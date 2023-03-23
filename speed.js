//checkSpeed(80);
// function to check speed with a parameter speed
function speedDetector() {
  let speed = document.getElementById("speed").value;
  const speedLimit = 70;
  const kmPerPoint = 5;
// if to check if the speedlimit is ok and console Ok
  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  // it checks if the point is 12 or more 
  if(points >= 12) {
  console.log("License suspended");
}
  else {
     console.log("Points:", points);
}
}
