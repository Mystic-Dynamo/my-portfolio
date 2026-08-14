console.log("Hello World from Dyanamo!");
let name = "Dynamo";
const currentYear = 2026;
let iscodingnice = true;
let hobbies = ["Coding", "Gaming", "photography", "working out",];

console.log(name);
console.log(currentYear);

let greeting = "Hello, " + name + "! Welcome to the year " + currentYear + ".";
console.log(greeting);

function logWelcome(name) {
  console.log("Hello, " + name + "! You are welcome");
}
logWelcome(name);

if (currentYear === 2026) {
  console.log("We are in the right year!");
}
else {
  console.log("We are not in a different year!");
}

for (let i = 0; i < hobbies.length; i++) {
  console.log("My hobby is " + hobbies[i]);
}

let myHeader = document.querySelector('.header');
window.addEventListener('scroll', function() {
 if (window.scrollY > 50) {
  myHeader.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
 } else {
  myHeader.style.background = 'transparent';
  myHeader.style.boxShadow = 'none';
 }
});

let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    let targetId = link.getAttribute('href');
    let targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
  });
  });
