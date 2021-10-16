//YOUR FIREBASE LINKS
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
     user_name = localStorage.getItem("User_Name");
     room_name = localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            likes:0
      })
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      names = message_data['name'];
      message = message_data['message'];
      likes = message_data['likes'];
      name_with_tag = "<h4>"+names+"<img class='user_tick' src='tick.png' "+"</h4>"; 
      message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
      button_with_tag= "<button class='btn btn-warning' id="+firebase_message_id+ " value="+likes+" onclick='updateLikes(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>&nbsp; &nbsp; Likes:"+ likes + "</span></button><hr>";
      row = name_with_tag + message_with_tag + button_with_tag + span_with_tag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updateLikes(message_id){
      console.log("likes");
      console.log(message_id);
      button_id = message_id;
      like = document.getElementById(button_id).value;
      updated_likes = Number(like) + 1;

      firebase.database().ref(room_name).child(message_id).update({
            likes : updated_likes
      });

}
function logout(){
      localStorage.removeItem("User_Name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function back(){
      window.location = "kwitter_room.html";
}
