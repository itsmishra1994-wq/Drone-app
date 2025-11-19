
const API_URL = "https://script.google.com/macros/s/AKfycbwWkI2RHt-MyQM88FUH-KxILbRjdItpGitxMB5jZjMQLc_ne8f-hZrPa_7Vp7hNJJKgIw/exec";

async function submitTarget() {
  let id = Date.now().toString();
  let name = document.getElementById("name").value;
  let desc = document.getElementById("desc").value;
  let lat = document.getElementById("lat").value;
  let lng = document.getElementById("lng").value;
  let priority = document.getElementById("priority").value;
  let status = "Pending";

  let file = document.getElementById("photo").files[0];
  let base64 = "";

  if (file) {
    base64 = await toBase64(file);
  }

  let body = {
    id, name, description: desc, lat, lng, priority, status,
    imageBase64: base64 ? base64.split(",")[1] : ""
  };

  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(body)
  });

  alert("Target submitted!");
}

function toBase64(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
