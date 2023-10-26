const x = 5; //masafat miyan do dorbin (km)
let speed;
let d = "Night";
function my(time) {
  let c = 60 / time;
  speed = x * c;
  console.log("speed :", speed);
  if ((speed > 60 && d === "Night") || (speed > 80 && d === "Day")) {
    console.log("Unallowable");
  } else if (speed > 0) {
    console.log("OK");
  }
}
