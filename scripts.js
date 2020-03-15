// Write your JavaScript code here.
// window.onload = (event) => {
//     alert('Page is fully loaded');
//   };

function takeoffConfirm() {
  const x = confirm('Confirm that the shuttle is ready for takeoff.');
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
//rocket
const rocket = document.getElementById('rocket');
//command buttons
const abort = document.getElementById('missionAbort');
const takeoff = document.getElementById("takeoff");
const landing = document.getElementById("landing");

//directional buttons
const upButton = document.getElementById('upButton');
const downButton = document.getElementById('downButton');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

//Event listeners
takeoff.addEventListener('click', takeoffConfirm);
landing.addEventListener('click', landConfirm);
abort.addEventListener('click', abortMission);

leftButton.addEventListener('click', function () {
    console.log('leftButton', rocket.style.left);
    rocket.style.left = String(parseInt(rocket.style.left, 10) - 10) + 'px';
});
rightButton.addEventListener('click', function () {
    console.log('rightButton', rocket.style.left);
    rocket.style.left = String(parseInt(rocket.style.left, 10) + 10) + 'px';
});
upButton.addEventListener('click', function () {
    console.log('upButton', rocket.style.bottom);
    rocket.style.bottom = String(parseInt(rocket.style.bottom, 10) + 10) + 'px';
});
downButton.addEventListener('click', function () {
    console.log('downButton', rocket.style.bottom);
    rocket.style.bottom = String(parseInt(rocket.style.bottom, 10) - 10) + 'px';
});
// Remember to pay attention to page loading!