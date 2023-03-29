const addbtnEl = document.querySelector("#addbtn");
const savebtnEl = document.querySelector("#savebtn");
const stickyCont = document.querySelector(".sticky-container");
let stickies = document.getElementsByClassName("sticky");

for (let i = 0; i < localStorage.length; i++) {
  if (localStorage.key(i).startsWith("stickyNote-")) {
    let stickySingle = document.createElement('div');
    stickySingle.classList.add('sticky');
    stickySingle.contentEditable = "true";
    stickySingle.setAttribute("role", "textbox");
    stickySingle.innerHTML = localStorage.getItem(localStorage.key(i));
    stickyCont.appendChild(stickySingle);
    let close = document.createElement('span');
    close.classList.add('close');
    close.innerHTML = "X";
    close.contentEditable = "false";
    stickySingle.appendChild(close);
    stickies = document.getElementsByClassName("sticky");
    close.addEventListener("click", () => {
      stickySingle.style.display = "none";
      localStorage.removeItem(`stickyNote-${i}`);
    });
    let angle = randomNumber(-4, 4);
    stickySingle.style.transform = "rotate(" + angle + "deg)";
    let color = randomNumber(1, 720);
    stickySingle.style.filter = "hue-rotate(" + color + "deg)";
  }
}

addbtnEl.addEventListener('click', () => {
  let stickySingle = document.createElement('div')
  stickySingle.classList.add('sticky');
  stickySingle.contentEditable = "true";
  stickySingle.setAttribute("role", "textbox");
  stickySingle.innerHTML = "...";
  stickyCont.appendChild(stickySingle);
  let close = document.createElement('span');
  close.classList.add('close');
  close.innerHTML = "X";
  close.contentEditable = "false";
  stickySingle.appendChild(close);
  stickies = document.getElementsByClassName("sticky");
  close.addEventListener("click", () => {
    stickySingle.style.display = "none";
    localStorage.removeItem(`stickyNote-${stickies.length}`);
  });
  let angle = randomNumber(-4, 4);
  stickySingle.style.transform = "rotate(" + angle + "deg)";
  let color = randomNumber(1, 720);
  stickySingle.style.filter = "hue-rotate(" + color + "deg)";
});


savebtnEl.addEventListener('click', () => {
  for (let i = 0; i < stickies.length; i++) {
    localStorage.setItem(`stickyNote-${i}`, stickies[i].innerHTML);
  }
  alert("Notes saved!");
});

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
