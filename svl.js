const db = firebase.database();
const storage = firebase.storage();

document.getElementById('targetForm').addEventListener('submit', async (e)=>{
  e.preventDefault();
  let tname = tname.value;
  let tdesc = tdesc.value;
  let latv = lat.value;
  let lngv = lng.value;
  let pr = priority.value;
  let file = document.getElementById('photo').files[0];
  let id = db.ref().child('targets').push().key;

  let photoURL = "";
  if(file){
    let ref = storage.ref('photos/'+id);
    await ref.put(file);
    photoURL = await ref.getDownloadURL();
  }

  db.ref('targets/'+id).set({
    name: tname,
    desc: tdesc,
    lat: latv,
    lng: lngv,
    priority: pr,
    status: "Pending",
    photo: photoURL
  });
  alert("Target added");
});
