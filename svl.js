const nameField = document.getElementById('tname');
const descField = document.getElementById('tdesc');
const latField = document.getElementById('lat');
const lngField = document.getElementById('lng');
const priorityField = document.getElementById('priority');
const photoField = document.getElementById('photo');

document.getElementById('targetForm').addEventListener('submit', async (e)=>{
  e.preventDefault();

  const tname = nameField.value.trim();
  const tdesc = descField.value.trim();
  const latv = latField.value.trim();
  const lngv = lngField.value.trim();
  const pr = priorityField.value;
  const file = photoField.files[0];

  const id = db.ref().child('targets').push().key;

  let photoURL = "";
  if (file) {
    const ref = storage.ref("photos/" + id);
    await ref.put(file);
    photoURL = await ref.getDownloadURL();
  }

  await db.ref("targets/" + id).set({
    id: id,
    name: tname,
    desc: tdesc,
    lat: latv,
    lng: lngv,
    priority: pr,
    status: "Pending",
    timestamp: Date.now(),
    photo: photoURL
  });

  alert("Target added successfully!");
});
