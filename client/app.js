const db = new PouchDB('my_database');
console.log("Local database created");
var remoteCouch = 'https://admin:a37ec1c0751f@couchdb-6ea1ed.smileupps.com/todos';

function sync() {
  var opts = {live: true};
  db.replicate.to(remoteCouch, opts);
  db.replicate.from(remoteCouch, opts);

  db.allDocs({
    include_docs: true,
    attachments: true,
  }).then(function (result) {
    console.log(result);
  }).catch(function (err) {
    console.log(err);
  });

}


document.getElementById("submit").addEventListener("click", function(e){
  console.log("hey");
  e.preventDefault();
  const data = {
    _id: new Date().toISOString(),
    //destination: document.getElementsByName("destination")[0].value,
    location: JSON.parse(localStorage.getItem('loc')),
    current_time: Date(),
    estimated_travel_time: document.getElementsByName("estimate")[0].value,
    email: document.getElementsByName("email")[0].value,
    //image: document.getElementsByName("")[0].value,
    message: document.getElementsByName("subject")[0].value,
    name: document.getElementsByName("name")[0].value,
    status: "open"
  }
  console.log(data);

  db.put(data, function callback(err, result) {
    if (!err) {
      console.log('Successfully SOS is sended!');
    }
  })

  sync();
});





