user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";

function addRoom()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}
const firebaseConfig = {
    apiKey: "AIzaSyCHg0b7NnP-1mlbOmial5fRwSBbvbflwn8",
    authDomain: "aplicativo-xet-de-batpapo.firebaseapp.com",
    databaseURL: "https://aplicativo-xet-de-batpapo-default-rtdb.firebaseio.com",
    projectId: "aplicativo-xet-de-batpapo",
    storageBucket: "aplicativo-xet-de-batpapo.appspot.com",
    messagingSenderId: "148650527752",
    appId: "1:148650527752:web:b824caf3c65359d46ed5bd"
  };
  function getData() {  
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Nome da sala: " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }

