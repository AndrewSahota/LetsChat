
var firebaseConfig = {
      apiKey: "AIzaSyDnJKydB5SEZ-l3iN8cO2LC-Dj6JUvLuzQ",
      authDomain: "gullygang-fccf1.firebaseapp.com",
      databaseURL: "https://gullygang-fccf1.firebaseio.com",
      projectId: "gullygang-fccf1",
      storageBucket: "gullygang-fccf1.appspot.com",
      messagingSenderId: "318834102236",
      appId: "1:318834102236:web:f763b7e286f29d741e4919",
      measurementId: "G-XSKRY84WNQ"
    };

    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome "+ user_name;

    function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"addinguser"
      }) ;

      localStorage.setItem("room_name",room_name);
      window.location="chat_page.html";
    }

function getData() {
      firebase.database().ref("/").on('value', 
      function(snapshot) {
            document.getElementById("output").innerHTML = "";snapshot.forEach(

                  function(childSnapshot) {
                        childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="chat_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}