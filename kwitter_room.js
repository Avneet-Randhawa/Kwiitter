// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCm9mH_egYLe6N_cLGflpgtZxBo9cn9LAE",
      authDomain: "kwitter-533eb.firebaseapp.com",
      databaseURL: "https://kwitter-533eb-default-rtdb.firebaseio.com",
      projectId: "kwitter-533eb",
      storageBucket: "kwitter-533eb.appspot.com",
      messagingSenderId: "236119148136",
      appId: "1:236119148136:web:436b2eaf140c8026fc9ddd"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("User_Name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name+"!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room"
      })
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location = "kwitter_page.html";
 }
 function logout(){
       localStorage.removeItem("User_Name");
       localStorage.removeItem("room_name");
       console.log("Done");
       window.location ="index.html";
 }
