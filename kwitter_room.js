//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyACSsI943kN-mjYu8Rz1vqjFYmNiXc6Lck",
      authDomain: "kwitter-page-5fa63.firebaseapp.com",
      databaseURL: "https://kwitter-page-5fa63-default-rtdb.firebaseio.com",
      projectId: "kwitter-page-5fa63",
      storageBucket: "kwitter-page-5fa63.appspot.com",
      messagingSenderId: "635609359370",
      appId: "1:635609359370:web:c1975ab3143ce51f08abf3"
    };
    
      // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room rame"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class room_name id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}



