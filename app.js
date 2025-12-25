async function analyze() {
  const result = document.getElementById("result");
  result.innerHTML = "⏳ กำลังเตรียมระบบวิเคราะห์...";

  try {
    // หน่วงนิดนึงให้ UX ดูโปร
    await new Promise(r => setTimeout(r, 800));

    const res = await fetch("http://127.0.0.1:5000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        frame: "5inch",
        battery: "4S",
        style: "freestyle"
      })
    });

    const data = await res.json();

    result.innerHTML = `
      <h3>📊 ผลการวิเคราะห์</h3>
      <p>Rating: <b>${data.analysis.rating}</b></p>
      <p>Thrust: ${data.analysis.thrust_estimate}</p>
      <p>Battery Time: ${data.analysis.battery_time}</p>
    `;
  } catch (e) {
    result.innerHTML = "⚠️ ระบบกำลังตื่น กรุณารอสักครู่แล้วลองใหม่";
  }
}
