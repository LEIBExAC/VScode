
//Initially I planned to leave it as it is but, now I'm thinking to impliment it through HTML
//We only have to change the inside content of the Course box instead of chnaging the box itself
//Maybe we can go using js
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

var scrc = document.getElementsByClassName("serc");

function search_impliment(course_name){
  if(course_name === cList[i]){
    for(i = 0;;){
      let a = 10;
    }
  }

}
/*Test */
