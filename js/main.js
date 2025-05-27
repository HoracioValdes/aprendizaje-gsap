/* aprend 1
gsap.fromTo(".box", { 
  x: 200,
});*/

/* apren 2 */
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