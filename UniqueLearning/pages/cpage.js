const courses = ['Course 1', 'Course 2', 'Course 3','course 4'];

const coursesContainer = document.getElementById('courses-container');

courses.forEach(course => {
    const courseBox = document.createElement('div');
    courseBox.classList.add('course-box');
    courseBox.textContent = course;
    coursesContainer.appendChild(courseBox);
});