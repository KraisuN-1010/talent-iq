import { axiosInstance } from '../lib/axios'

export const sessionApi = {
  createSession: async (data) => {  
    try {
      const response = await axiosInstance.post('/sessions', data)
      return response.data
    } catch (error) {
      console.error('Error creating session:', error)
      throw error
    } 
  }, 
  getActiveSession: async () => {
    try {
      const response = await axiosInstance.get('/sessions/active')
      return response.data
    } catch (error) {
      console.error('Error fetching active session:', error)
      throw error
    }
  },
  getRecentSessions: async () => {
    try {
      const response = await axiosInstance.get('/sessions/recent')
      return response.data
    } catch (error) {
      console.error('Error fetching recent sessions:', error)
      throw error
    }
  },
  getSessionById: async (sessionId) => {
    try {
      const response = await axiosInstance.get(`/sessions/${sessionId}`)  
      return response.data
    } catch (error) {
      console.error(`Error fetching session with ID ${sessionId}:`, error)  
      throw error
    }
  },
  joinSession: async (sessionId) => {
    try {
      const response = await axiosInstance.post(`/sessions/${sessionId}/join`)
      return response.data
    } catch (error) {
      console.error(`Error joining session with ID ${sessionId}:`, error)
      throw error
    }
  },
  leaveSession: async (sessionId) => {
    try {
      const response = await axiosInstance.post(`/sessions/${sessionId}/end`)
      return response.data
    } catch (error) {
      console.error(`Error leaving session with ID ${sessionId}:`, error)
      throw error
    }
  },
  getStreamToken: async () => {
    try {
      const response = await axiosInstance.get(`/chat/token`)
      return response.data
    } catch (error) {
      console.error(`Error fetching stream token:`, error)
      throw error
    }
  }
}