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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
      message=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
         name:user_name,
         message:message,like:0   
      });
      document.getElementById("message").value="";
    }
    
    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.HTML");
    }

    firebase.initializeApp(firebaseConfig);
function getData() {
       firebase.database().ref("/"+room_name).on('value', 
       
       function(snapshot) {
          document.getElementById("output").innerHTML = "";
           snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
             childData = childSnapshot.val();

              if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
        console.log(firebase_message_id);
        console.log(message_data);
        name=message_data['name'];
        message=message_data['message'];
        like=message_data['like'];
        name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
        message_tag="<h4 class='message_h4'>"+message+"</h4>";
        likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";

        span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
        row=name_tag+message_tag+likebutton+span_tag;
        document.getElementById("output").innerHTML+=row;

      } });  }); }
getData();

function updateLike(message_id){
button_id=message_id;
likes=document.getElementById(button_id).value;
updatedlikes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
  like:updatedlikes
});
}