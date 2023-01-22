setInterval(() => (newTime(), 1000));

function newTime() {
  const d = new Date();

  //return numbers smaller than 10 in 2 digits:
  const zero = (n) => (n < 10 ? "0" + n : n);

  let h = zero(d.getHours());
  let min = zero(d.getMinutes());
  let s = zero(d.getSeconds());

  //pointers of the classic clock
  document
    .querySelector("#hourpointer")
    .style.setProperty("rotate", `${h * (360 / 12)}deg`);
  document
    .querySelector("#minpointer")
    .style.setProperty("rotate", `${min * (360 / 60)}deg`);
  document
    .querySelector("#secpointer")
    .style.setProperty("rotate", `${s * (360 / 60)}deg`);

  //blinking colon:
  if (s % 2 === 0) {
    document.querySelector("p").innerText = h + ":" + min + ":" + s;
  } else {
    document.querySelector("p").innerText = h + " " + min + " " + s;
  }
}
