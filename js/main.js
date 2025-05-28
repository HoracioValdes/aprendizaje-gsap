/* Your first animation */

/* aprend 1
gsap.fromTo(".box", { 
  x: 200,
});*/

/* apren 2
let tl = gsap.timeline();
  gsap.set(".outline, code", { autoAlpha: 0 });
gsap.set(".code-to", {
        autoAlpha: 1
      })

var form = document.querySelector("form");
form.addEventListener("change", function () {
  let type = document.querySelector('input[name="method"]:checked').value;

  gsap.set(".circle", { clearProps: "all" });
  gsap.set(".outline, code", { autoAlpha: 0 });

  tl.clear();
  switch (type) {
    case "to":
      tl.set(".code-to", {
        autoAlpha: 1
      })
      .to(".to-outline", {
        autoAlpha: 1
      }).to(".circle", {
        duration: 1.1,
        ease: "none",
        x: 40,
        fill: "#00bae2"
      });
      break;
    case "set":
      tl.set(".code-set", {
        autoAlpha: 1
      }).set(".circle", {
        x: 40,
        fill: "#00bae2"
      }, "+=0.5");
      break;
    case "from":
      tl.set(".code-from", {
        autoAlpha: 1
      })
      .to(".from-outline", {
        autoAlpha: 1
      }).from(".circle", {
        duration: 1.1,
        ease: "none",
        x: -40,
        fill: "#00bae2"
      });
      break;
    case "fromTo":
      tl.set(".code-fromTo", {
        autoAlpha: 1
      })
        .to([".from-outline", ".to-outline"], {
          autoAlpha: 1,
          stagger: 0.25
        })
        .fromTo(
          ".circle",
          {
            x: -40,
            fill: "#00bae2"
          },
          {
            duration: 1.5,
            ease: "none",
            x: 40,
            fill: "#0ae448"
          }
        );
  }
});
*/

/* 3 apren
gsap.to(".box", { 
  duration: 2,
  x: 200,
  rotation: 360,
});*/

/* 4 apren
gsap.to(".box", { 
  duration: 2,
  backgroundColor: '#8d3dae',
});*/

/* 5 apren
gsap.to(".svgBox", { 
  duration: 2,
  x: 100, // use transform shorthand (this is now using SVG units not px, the SVG viewBox is 100 units wide)
  xPercent: -100,
  // or target SVG attributes
  attr: {
    fill: '#8d3dae',
    rx: 50, 
  },
}); */

/* 6 apren
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#28a92b";

let position = { x: 0, y: 0 };

function draw() {
  // erase the canvas
  ctx.clearRect(0, 0, 300, 300);
  // redraw the square at it's new position
  ctx.fillRect(position.x, position.y, 100, 100);
}

//animate x and y of point
gsap.to(position, { 
  x: 200, 
  y: 200, 
  duration: 4,
  // unlike DOM elements, canvas needs to be redrawn and cleared on every tick
  onUpdate: draw 
});*/

/* 7 apren
gsap.to(".box", { 
  rotation: 360,
  x: '100vw',
  xPercent: -100,
  // special properties
  duration: 2, // how long the animation lasts
  repeat: 2, // the number of repeats - this will play 3 times
  yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
});*/

/* 8 apren
gsap.to(".green", { 
  rotation: 360,
  duration: 1,
  repeat: 1,
  repeatDelay: 1,
});


gsap.to(".purple", { 
  rotation: 360,
  duration: 1,
  delay: 1 // delay the start of this animation
});*/

/* Easing */

/* 9 apren
gsap.to(".green", { 
  rotation: 360,
  duration: 2,
  repeat: -1,
  repeatDelay: 2,
  ease: 'none'
});


gsap.to(".purple", { 
  rotation: 360,
  duration: 2,
  repeat: -1,
  repeatDelay: 2,
  ease: 'bounce.out'
});*/

/* Staggers */

/* 10 apren
gsap.to(".box", {
  duration: 1,
  rotation: 360,
  opacity: 1, 
  delay: 0.5, 
  stagger: 0.2,
  ease: "sine.out", 
  force3D: true
});

document.querySelectorAll(".box").forEach(function(box) {
  box.addEventListener("click", function() {
    gsap.to(".box", {
      duration: 0.5, 
      opacity: 0, 
      y: -100, 
      stagger: 0.1,
      ease: "back.in"
    });
  });
}); */

/* 11 apren
var grid = [5,13], //[rows, columns]
    tl = gsap.timeline({repeat: -1, repeatDelay: 0.5});

function animateBoxes(from, axis, ease) {
  //one stagger call does all the animation:
  tl.to(".box", {
      duration: 1,
      scale: 0.1, 
      y: 60,
      yoyo: true, 
      repeat: 1, 
      ease: "power1.inOut",
      stagger: {
        amount: 1.5, 
        grid: grid, 
        axis: axis, 
        ease: ease,
        from: from
      }
    }
  );
}




//builds a grid of <div class="box"> elements, dropped into #container (unrelated to animation code)
buildGrid({grid: grid, className: "box", width: 1000, gutter: 15, parent: "#container", onCellClick: onCellClick});

animateBoxes("center");




//---- the rest of the code below just handles all the interactivity ----

var options = document.querySelectorAll('input[name="from"], input[name="axis"], input[name="ease"]'),
    _select = function(selector) {
      return document.querySelector(selector);
    },
    axisCodeEl = _select("#axisCode"),
    axisEl = _select("#axis"),
    easeCodeEl = _select("#easeCode"),
    easeEl = _select("#ease"),
    fromEl = _select("#from"),
    fromIndexEl = _select("#fromIndex"),
    indexEl = _select("#index"),
    selections = {from: "center", axis: null, ease: "none"},
    i;

//add change listeners
for (i = 0; i < options.length; i++) {
  options[i].addEventListener("change", onOptionChange);
}

function onOptionChange(e) {
  var group = e.target.getAttribute("name"),
      value = e.target.getAttribute("value");
  if (group === "from") {
    updateFrom(value);
  } else if (group === "axis") {
    selections.axis = (value === "null") ? null : value;
    axisCode.style.display = (value === "null") ? "none" : "inline";
    axisEl.textContent = '"' + value + '"';
  } else if (group === "ease") {
    easeEl.textContent = value;
    easeCodeEl.style.display = (value === '"none"') ? "none" : "inline";
    selections.ease = value.split('"').join("");
  }
  updateAnimation();
}

function updateFrom(value) {
  var current = selections.from,
      parsedVal = value,
      newIsNumber = !isNaN(value),
      oldIsNumber = !isNaN(current);
  if (newIsNumber) {
    parsedVal = parseInt(value, 10);
  } else if (value === "end") {
    parsedVal = grid[0] * grid[1] - 1;
    newIsNumber = true;
  }
  if (current !== parsedVal) {
    selections.from = parsedVal;
    fromEl.textContent = (value === "end") ? '"end"' : newIsNumber ? value : '"' + value + '"';
    if (newIsNumber && !oldIsNumber) {
      gsap.to(".box", {duration: 0.3, backgroundColor: "#abff84"});
    } else if (!newIsNumber && oldIsNumber) {
      gsap.to(".box", {duration: 0.3, backgroundColor: "#0ae448"});
    }
    if (newIsNumber) {
      if (value !== "end") {
        indexEl.checked = true;
        indexEl.setAttribute("value", parsedVal);
        fromIndexEl.textContent = parsedVal + " (index)";
      }
      gsap.fromTo("[data-index='" + parsedVal + "']", {rotation: 0}, {duration: 0.4, rotation: 360, backgroundColor: "#0ae448", ease: "power1.inOut"});
      if (oldIsNumber) {
        gsap.to("[data-index='" + current + "']", {duration: 0.3, backgroundColor: "#abff84"});
      }
    }
  }
}

function onCellClick(e) {
  updateFrom(e.target.index);
  updateAnimation();
}

function updateAnimation() {
  tl.seek(0).clear();
  animateBoxes(selections.from, selections.axis, selections.ease);
}

//helper function to build a grid of <div> elements
function buildGrid(vars) {
  vars = vars || {};
  var container = document.createElement("div"),
    rows = vars.grid[0] || 5,
    cols = vars.grid[1] || 5,
    width = vars.width || 100,
    gutter = vars.gutter || 1,
    className = vars.className || "",
    w = (width - cols * gutter) / cols,
    parent = (typeof(vars.parent) === "string") ? document.querySelector(vars.parent) : vars.parent ? vars.parent : document.body,
    css = "display: inline-block; margin: 0 " + (gutter / width * 100) + "% " + (gutter / width * 100) + "% 0; width: " + (w / width * 100) + "%;",
    l = rows * cols,
    i, box;
  for (i = 0; i < l; i++) {
    box = document.createElement("div");
    box.style.cssText = css;
    box.setAttribute("class", className);
    box.index = i;
    box.setAttribute("data-index", i);
    if (vars.onCellClick) {
      box.addEventListener("click", vars.onCellClick);
    }
    container.appendChild(box);
  }
  container.style.cssText = "width:" + width + "px; line-height: 0; padding:" + gutter + "px 0 0 " + gutter + "px; display:inline-block;";
  parent.appendChild(container);
  return container;
}

//this just helps avoid the pixel-snapping that some browsers do.
gsap.set(".box", {rotation: 0.5, force3D: true});*/

/* Timelines */

/* 12 apren
gsap.to(".green", { 
  rotation: 360,
  duration: 1,
});
gsap.to(".purple", { 
  rotation: 360,
  duration: 1,
  delay: 1,
});
gsap.to(".orange", { 
  rotation: 360,
  duration: 1,
  delay: 2,
});*/

/* 13 apren
let width = document.querySelector('.timelineUI').offsetWidth

let tl = gsap.timeline({ onUpdate: sequenceUpdateDragger, paused: true });

tl
  .to("#green", { x: width, xPercent: -100, duration: 2 })
  .to("#purple", { x: width, xPercent: -100, duration: 1 })
  .to("#orange", { x: width,  xPercent: -100, duration: 1 });


gsap.to('.timelineUI-tween', {opacity: 1})
let sequenceTime = $("#sequenceTime");
let markerCont = document.querySelector(".markers");
markerCont.innerHTML = '';
let sequenceTrackLength = width;
let sequenceDragger = $("#sequence .timelineUI-dragger");
let timelineItems = document.querySelectorAll(".timelineUI-tween");
let children = tl.getChildren();
let time = tl.duration();

for (let i = 0; i < time + 1; i++) {
  markerCont.innerHTML += `<div class="secondMarker"></div>`;
}

function sequenceUpdateDragger() {
  gsap.set(sequenceDragger, {
    x: sequenceTrackLength * tl.progress()
  });
  sequenceTime.html(tl.time().toFixed(2));
}

let sequenceDraggable = new Draggable(sequenceDragger, {
  type: "x",
  bounds: { minX: 0, maxX: sequenceTrackLength },
  trigger: "#sequence .timelineUI-dragger div",
  onDrag: function () {
    tl.progress(this.x / sequenceTrackLength).pause();
  }
})[0];

children.forEach((child, index) => {
  let timelineBar = timelineItems[index];
  let duration = child.duration();
  let startTime = child.startTime();
  let width = (duration / time) * 100;
  let startPosition = (startTime / time) * 100;
  let color = child._targets[0].dataset.color;

  gsap.set(timelineBar, {
    width: `${width}%`,
    marginLeft: `${startPosition}%`,
    backgroundColor: color
  });
});

$("#sequence .play").click(function () {
  if (tl.progress() < 1) {
    tl.play();
  } else {
    tl.restart();
  }
});*/

/* 14 apren
let width = document.querySelector('.timelineUI').offsetWidth

let tl = gsap.timeline({ onUpdate: sequenceUpdateDragger, paused: true });

tl
  .to("#sequence #green", { x: width, xPercent: -100,duration: 2 })
  .to("#sequence #purple", { x: width, xPercent: -100,duration: 1, delay: 1 })
  .to("#sequence #orange", { x: width, xPercent: -100, duration: 1 });


gsap.to('.timelineUI-tween', {opacity: 1})
let sequenceTime = $("#sequenceTime");
let markerCont = document.querySelector(".markers");
markerCont.innerHTML = '';
let sequenceTrackLength = width;
let sequenceDragger = $("#sequence .timelineUI-dragger");
let timelineItems = document.querySelectorAll(".timelineUI-tween");
let children = tl.getChildren();
let time = tl.duration();

for (let i = 0; i < time + 1; i++) {
  markerCont.innerHTML += `<div class="secondMarker"></div>`;
}

function sequenceUpdateDragger() {
  gsap.set(sequenceDragger, {
    x: sequenceTrackLength * tl.progress()
  });
  sequenceTime.html(tl.time().toFixed(2));
}

let sequenceDraggable = new Draggable(sequenceDragger, {
  type: "x",
  bounds: { minX: 0, maxX: sequenceTrackLength },
  trigger: "#sequence .timelineUI-dragger div",
  onDrag: function () {
    tl.progress(this.x / sequenceTrackLength).pause();
  }
})[0];

children.forEach((child, index) => {
  let timelineBar = timelineItems[index];
  let duration = child.duration();
  let startTime = child.startTime();
  let width = (duration / time) * 100;
  let startPosition = (startTime / time) * 100;
  let color = child._targets[0].dataset.color;

  gsap.set(timelineBar, {
    width: `${width}%`,
    marginLeft: `${startPosition}%`,
    backgroundColor: color
  });
});

$("#sequence .play").click(function () {
  if (tl.progress() < 1) {
    tl.play();
  } else {
    tl.restart();
  }
});*/

/* 15 apren */
let width = document.querySelector('.timelineUI').offsetWidth

let tl = gsap.timeline({ onUpdate: sequenceUpdateDragger, paused: true });

tl
  .to("#sequence #green", { x: width,xPercent: -100, duration: 2 }, 1)
  .to("#sequence #purple", { x: width, xPercent: -100,duration: 1 }, "<")
  .to("#sequence #orange", { x: width, xPercent: -100,duration: 1 }, "+=1");


gsap.to('.timelineUI-tween', {opacity: 1})
let sequenceTime = $("#sequenceTime");
let markerCont = document.querySelector(".markers");
markerCont.innerHTML = '';
let sequenceTrackLength = width;
let sequenceDragger = $("#sequence .timelineUI-dragger");
let timelineItems = document.querySelectorAll(".timelineUI-tween");
let children = tl.getChildren();
let time = tl.duration();

for (let i = 0; i < time + 1; i++) {
  markerCont.innerHTML += `<div class="secondMarker"></div>`;
}

function sequenceUpdateDragger() {
  gsap.set(sequenceDragger, {
    x: sequenceTrackLength * tl.progress()
  });
  sequenceTime.html(tl.time().toFixed(2));
}

let sequenceDraggable = new Draggable(sequenceDragger, {
  type: "x",
  bounds: { minX: 0, maxX: sequenceTrackLength },
  trigger: "#sequence .timelineUI-dragger div",
  onDrag: function () {
    tl.progress(this.x / sequenceTrackLength).pause();
  }
})[0];

children.forEach((child, index) => {
  let timelineBar = timelineItems[index];
  let duration = child.duration();
  let startTime = child.startTime();
  let width = (duration / time) * 100;
  let startPosition = (startTime / time) * 100;
  let color = child._targets[0].dataset.color;

  gsap.set(timelineBar, {
    width: `${width}%`,
    marginLeft: `${startPosition}%`,
    backgroundColor: color
  });
});

$("#sequence .play").click(function () {
  if (tl.progress() < 1) {
    tl.play();
  } else {
    tl.restart();
  }
});