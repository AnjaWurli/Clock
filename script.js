const digital = document.querySelector("p");

const hour = document.querySelector("#hourpointer");
const minute = document.querySelector("#minpointer");
const second = document.querySelector("#secpointer");

//set init digital time:
digital.innerText = newTime();

setInterval(myCallback, 1000);

function myCallback() {
  digital.innerText = newTime();
}

function newTime() {
  const d = new Date();
  //Jan 22 2023 02:08:03

  //return numbers smaller than 10 in 2 digits:
  const zero = (n) => (n < 10 ? "0" + n : n);

  let h = zero(d.getHours());
  let min = zero(d.getMinutes());
  let s = zero(d.getSeconds());

  //pointers
  hour.style.setProperty("rotate", `${h * (360 / 12)}deg`);
  minute.style.setProperty("rotate", `${min * (360 / 60)}deg`);
  second.style.setProperty("rotate", `${s * (360 / 60)}deg`);

  //blinking colon:
  if (s % 2 === 0) {
    return h + ":" + min + ":" + s;
  } else {
    return h + " " + min + " " + s;
  }
}
