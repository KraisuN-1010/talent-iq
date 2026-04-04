export async function executeCode(language, code) {
  try {
    const response = await fetch("/api/code/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ language, code }),
    });

    const rawBody = await response.text();
    let result = {};
    try {
      result = rawBody ? JSON.parse(rawBody) : {};
    } catch {
      result = {};
    }

    if (!response.ok) {
      throw new Error(
        result.output || rawBody || `Server error: ${response.status} ${response.statusText}`
      );
    }
    
    return {
      success: result.success,
      output: result.output || "No output"
    };
  } catch (error) {
    console.error("Frontend Execution Error:", error);
    return {
      success: false,
      output: error.message
    };
  }
}