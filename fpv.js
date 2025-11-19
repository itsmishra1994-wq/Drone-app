
const API_URL = "https://script.google.com/macros/s/AKfycbwWkI2RHt-MyQM88FUH-KxILbRjdItpGitxMB5jZjMQLc_ne8f-hZrPa_7Vp7hNJJKgIw/exec";

async function loadData() {
  let res = await fetch(API_URL);
  let data = await res.json();

  let div = document.getElementById("targets");
  div.innerHTML = "";

  data.forEach(t => {
    div.innerHTML += `
      <div style='border:1px solid #000;margin:10px;padding:10px;'>
        <h3>${t.Name}</h3>
        <p>${t.Description}</p>
        <p><b>Lat:</b> ${t.Latitude} | <b>Lng:</b> ${t.Longitude}</p>
        <p><b>Priority:</b> ${t.Priority}</p>
        <p><b>Status:</b> ${t.Status}</p>
        ${t.ImageURL ? `<img src='${t.ImageURL}' width='150'>` : ""}
      </div>
    `;
  });
}

setInterval(loadData, 3000);
loadData();
