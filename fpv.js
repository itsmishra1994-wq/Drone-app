const box = document.getElementById('targets');

db.ref("targets").on("value", (snapshot) => {
  box.innerHTML = "";

  const data = snapshot.val();
  if (!data) {
    box.innerHTML = "<p>No targets added yet.</p>";
    return;
  }

  Object.values(data).forEach(t => {
    box.innerHTML += `
      <div class="targetCard">
        <h3>${t.name}</h3>
        <p>${t.desc}</p>
        <p>Lat: ${t.lat}, Lng: ${t.lng}</p>
        <p>Priority: ${t.priority}</p>
        ${t.photo ? `<img src="${t.photo}" width="120">` : ""}
      </div>
      <hr>
    `;
  });
});
