export async function executeCode(language, code) {
  try {
    const response = await fetch("/api/code/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ language, code }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.output || `Server error: ${response.statusText}`);
    }
    const result = await response.json();
    
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