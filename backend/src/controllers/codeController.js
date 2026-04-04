import axios from "axios";
import { ENV } from "../lib/env.js";

export const executeCode = async (req, res) => {
  const { language, code } = req.body;

  const languageMap = {
    python:     { language: "python3", versionIndex: "4" },
    javascript: { language: "nodejs",  versionIndex: "4" },
    java:       { language: "java",    versionIndex: "4" },
    c:          { language: "c",       versionIndex: "5" },
    cpp:        { language: "cpp17",   versionIndex: "1" },
  };

  const config = languageMap[language];
  if (!config) {
    return res.status(400).json({ success: false, output: "Unsupported language" });
  }

  try {
    const response = await axios.post("https://api.jdoodle.com/v1/execute", {
      clientId: ENV.JDOODLE_CLIENT_ID,
      clientSecret: ENV.JDOODLE_CLIENT_SECRET,
      script: code,
      language: config.language,
      versionIndex: config.versionIndex
    });

    res.json({
      success: response.data.statusCode === 200,
      output: response.data.output
    });
  } catch (error) {
    console.error("JDoodle API Error:", error.message);
    res.status(500).json({ success: false, output: "Execution failed on server" });
  }
};