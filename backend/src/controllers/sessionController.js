import Session from "../models/Session.js"
import { streamClient, chatClient } from "../lib/stream.js"

export async function createSession(req, res) {
  try {
    const { problem, difficulty } = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    //validate
    if (!problem || !difficulty) {
      return res.status(400).json({msg:"Problem and difficulty are required"})
    }
    //Generate unique call ID for the session
    const callId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const session =  await Session.create({
      problem,
      difficulty,
      host: userId,
      callID: callId
    })

    await streamClient.video.call("default", callId).getOrCreate({
      data:{
        created_by_id: clerkId,
        custom: {problem, difficulty, sessionId: session._id.toString()}
      }
    })
    
    //chat messaging
    const channel = chatClient.channel("messaging", session._id.toString(), { 
      name: `Session ${problem} (${difficulty})`,
      created_by_id: clerkId,
      members: [clerkId]
    })

    await channel.create();

    res.status(201).json({msg:"Session created successfully", sessionId: session._id, callId})
  } catch (error) {
    console.error("Error creating session:", error)
    res.status(500).json({msg:"Failed to create session"})
  }
}

export async function getActiveSessions(_ , res) {
  try {
    const sessions = await Session.find({status:"active"})
    .populate("host", "name email")
    .sort({createdAt: -1})
    .limit(20)

    res.status(200).json({sessions})
  } catch (error) {
    console.error("Error fetching active sessions:", error)
    res.status(500).json({msg:"Failed to fetch active sessions"})
  }
}

export async function getMyRecentSessions(req, res) {
  try {
    //Where user is either the host or participant
    const userId = req.user._id;

    const sessions = await Session.find({
      status:"completed",
      $or: [{host: userId}, {participant: userId}]
    })
    .sort({createdAt: -1})
    .limit(20)
    res.status(200).json({sessions})
  } catch (error) {
    console.error("Error fetching my recent sessions:", error)
    res.status(500).json({msg:"Failed to fetch my recent sessions"})
  }
} 

export async function getSessionById(req, res) {
  try {
    const {id} = req.params

    const session = await Session.findById(id)
    .populate("host", "name email")
    .populate("participant", "name email")

    if (!session) {
      return res.status(404).json({msg:"Session not found"})
    }
    res.status(200).json({session})
  } catch (error) {
    console.error("Error fetching session by ID:", error)
    res.status(500).json({msg:"Failed to fetch session by ID"})
  }
}

export async function joinSession(req, res) { 
  try {
    const {id} = req.params
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    const session = await Session.findById(id)

    if (!session) {
      return res.status(404).json({msg:"Session not found"})
    }
    
    //Check if session is already full
    if (session.participant) {
      return res.status(400).json({msg:"Session is already full"})
    }

    session.participant = userId;
    await session.save() 

    const channel = chatClient.channel("messaging", session.callID.toString())
    await channel.addMembers([clerkId])

    res.status(200).json({msg:"Joined session successfully", sessionId: session._id, callId: session.callID})
  } catch (error) {
    console.error("Error joining session:", error)
    res.status(500).json({msg:"Failed to join session"})
  }
}

export async function endSession(req, res) {
  try {
    const {id} = req.params
    const userId = req.user._id;

    const session = await Session.findById(id)
    if (!session) {
      return res.status(404).json({msg:"Session not found"})
    }
    //Only host can end the session
    if (session.host.toString() !== userId.toString()) {
      return res.status(403).json({msg:"Only the host can end the session"})
    }
    if (session.status === "completed") { 
      return res.status(400).json({msg:"Session is already completed"})
    }
     
    session.status = "completed";
    await session.save();

    //Delete the stream video call
    const call = await streamClient.video.call("default", session.callID).get()
    if (call) {
      await call.delete({hard: true})
    }

    //delete the chat channel

    const channel = chatClient.channel("messaging", session.callID.toString())

    await channel.delete()  
    res.status(200).json({msg:"Session ended successfully"})
  } catch (error) {
    console.error("Error ending session:", error)
    res.status(500).json({msg:"Failed to end session"})
  }
}

