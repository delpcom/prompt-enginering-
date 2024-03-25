// script.js
function updateTime() {
  const now = new Date();
  document.getElementById('system-time').textContent = now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime(); // İlk yüklemede saati güncelle
