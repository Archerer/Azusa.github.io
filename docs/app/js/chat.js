document.getElementById("sendBtn").addEventListener("click", async () => {
  const baseUrl = document.getElementById("baseUrl").value.trim();
  const agentId = document.getElementById("agentId").value.trim();
  const userId = document.getElementById("userId").value.trim();
  const message = document.getElementById("message").value.trim();
  const result = document.getElementById("result");

  result.textContent = "请求中...";

  try {
    const response = await fetch(`${baseUrl}/api/v1/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        agentId,
        userId,
        message
      })
    });

    const data = await response.json();
    result.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    result.textContent = `请求失败: ${error.message}`;
  }
});

