const db = firebase.database();
const box = document.getElementById('targets');

db.ref('targets').on('value', snap=>{
  box.innerHTML="";
  let data = snap.val();
  for(let id in data){
    let t = data[id];
    box.innerHTML += `<div>
      <h3>${t.name}</h3>
      <p>${t.desc}</p>
      <p>Lat: ${t.lat}, Lng: ${t.lng}</p>
      <p>Priority: ${t.priority}</p>
      <img src="${t.photo}" width="120">
    </div><hr>`;
  }
});
