// Write your JavaScript code here.
// window.onload = (event) => {
//     alert('page is fully loaded');
//   };

function takeoffConfirm() {
  let x = confirm('Confirm that the shuttle is ready for takeoff.');
  if(x == true){
  document.getElementById("flightStatus").innerHTML='Shuttle in flight.';
  document.getElementById("shuttleBackground").style.backgroundColor = 'blue';
  document.getElementById("spaceShuttleHeight").innerHTML='10,000';
  }
}

function landConfirm() {
  alert("The shuttle is landing. Landing gear engaged.");
  document.getElementById("flightStatus").innerHTML='The Shuttle has landed.';
  document.getElementById("shuttleBackground").style.backgroundColor = 'green';
  document.getElementById("spaceShuttleHeight").innerHTML='0';
}

function abortMission() {
  let x = confirm('Confirm that you want to abort the mission.');
  if(x == true){
  document.getElementById("flightStatus").innerHTML='Mission aborted.';
  document.getElementById("shuttleBackground").style.backgroundColor = 'green';
  document.getElementById("spaceShuttleHeight").innerHTML='0';
  }
}

function moveRocketUp() {
  // document.getElementById("rocket").style.position = 'absolute';
  document.getElementById("rocket").style.marginTop += '10px';
  // document.getElementById("rocket").style.left = '10px';
}
let upButton = document.getElementById('upButton');
let abort = document.getElementById('missionAbort');
let takeoff = document.getElementById("takeoff");
let landing = document.getElementById("landing");

upButton.addEventListener("click", moveRocketUp);
takeoff.addEventListener("click", takeoffConfirm);
landing.addEventListener("click", landConfirm);
abort.addEventListener("click", abortMission);

// Remember to pay attention to page loading!