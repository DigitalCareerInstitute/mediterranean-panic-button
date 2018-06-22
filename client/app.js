// Create a local PouchDB database
const db = new PouchDB('my_database');
console.log("Local database created");
var remoteCouch = 'https://admin:a37ec1c0751f@couchdb-6ea1ed.smileupps.com/todos';

function sync() {
  //syncDom.setAttribute('data-sync-state', 'syncing');
  var opts = {live: true};
  db.replicate.to(remoteCouch, opts);
  db.replicate.from(remoteCouch, opts);
}


function sosSend(data) {
  const sos = {
    _id: new Date().toISOString(),
    destLocation: data,
    locatoin: "",
    currTime: "",
    estTravelTime: "",
    email: "",
    image:"",
    message: "",
    name: "",
    status:""
  };
  db.put(sos, function callback(err, result) {
    if (!err) {
      console.log('Successfully SOS is sended!');
    }
  })
  sync();
  ;
}



document.getElementById("submit").addEventListener("click", function(e){
  e.preventDefault();
  const data = {
   destLocation: document.getElementsByName("destLocation")[0].value,
   locatoin: document.getElementsByName("destLocation")[0].value,
   currTime: document.getElementsByName("destLocation")[0].value,
   estTravelTime: document.getElementsByName("destLocation")[0].value,
   email: document.getElementsByName("destLocation")[0].value,
   image: document.getElementsByName("destLocation")[0].value,
   message: document.getElementsByName("destLocation")[0].value,
   name: document.getElementsByName("destLocation")[0].value,
   status: "open"
}
  document.getElementById("demo").innerHTML = data.destLocation;
  sosSend(data);
});





