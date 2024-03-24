
//Initially I planned to leave it as it is but, now I'm thinking to impliment it through HTML
//We only have to change the inside content of the Course box instead of chnaging the box itself
const courses = ['Course 1', 'Course 2', 'Course 3','course 4', 'course 5', 'course 6', 'course 7',
 'course 8'];

const coursesContainer = document.getElementById('courses-container');

courses.forEach(course => {
    const courseBox = document.createElement('div');
    courseBox.classList.add('course-box');
    courseBox.textContent = course;
    coursesContainer.appendChild(courseBox);
});

function linkCourse(){
 coursesContainer.classList.add("")
}

coursesContainer.onclick = () => {
  linkCourse();
};

//Sticky effect of nav bar
window.onscroll = function() {navbarFunc()};
//window.onscroll = function() {sidenavFunc()};

var navbar = document.getElementById("navbara");
//var sidenava = document.getElementById("sidenava");
var sticky = navbar.offsetTop;
//var sticky1 = sidenava.offsetLeft;

/*function sidenavFunc() {
    if (window.scrollY >= sticky1) {
      sidenava.classList.add("sticky1")
    } else {
      sidenava.classList.remove("sticky1");
    }
  }*/

function navbarFunc() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


/*Test */

let myButton = document.getElementById("test");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

myButton.onclick = () => {
  setUserName();
};
