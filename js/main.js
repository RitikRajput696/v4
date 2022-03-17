const hamBurger = document.querySelector(".hamburger");
const showNav = document.querySelector(".nav__links");
console.log(
  "help me someone, i donot know why but this website freezes while scrolling, if you have the solution pls connect with me on social media"
);

// hamburger show/hide
hamBurger.addEventListener("click", () => {
  console.log("mujhe mat chuo");
  showNav.classList.toggle("nav-active");
});

// const navClickAnimation = document.querySelectorAll(".nav__links a");

// navClickAnimation.addEventListener("click", () => {
//   console.log("hasthmaithoon");
// });

// var form = document.getElementById("form");

// async function handleSubmit(event) {
//   event.preventDefault();
//   var status = document.getElementById("my-form-status");
//   var data = new FormData(event.target);
//   fetch(event.target.action, {
//     method: form.method,
//     body: data,
//     headers: {
//         'Accept': 'application/json'
//     }
//   }).then(response => {
//     if (response.ok) {
//       status.innerHTML = "Thanks for your submission!";
//       form.reset()
//     } else {
//       response.json().then(data => {
//         if (Object.hasOwn(data, 'errors')) {
//           status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
//         } else {
//           status.innerHTML = "Oops! There was a problem submitting your form"
//         }
//       })
//     }
//   }).catch(error => {
//     status.innerHTML = "Oops! There was a problem submitting your form"
//   });
// }
// form.addEventListener("submit", handleSubmit)
