//YOUR FIRE BASE LINKS

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB4821LeDe_u66rDVeBJ9kORAswRhUogew",
  authDomain: "kwitterapp-f8e19.firebaseapp.com",
  databaseURL: "https://kwitterapp-f8e19-default-rtdb.firebaseio.com",
  projectId: "kwitterapp-f8e19",
  storageBucket: "kwitterapp-f8e19.appspot.com",
  messagingSenderId: "933211071015",
  appId: "1:933211071015:web:7d5ec0ad53558370f8a402"
  };
  
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,
    like: 0
  });
  
  document.getElementById("msg").value = "";
}

function getData() {
  firebase.database().ref("/" + room_name).on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      childData = childSnapshot.val();
      if (childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;



        
        //Start code
        
        //End code
      }
    });
  });
}
getData();
