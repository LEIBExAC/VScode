const coursesList = document.getElementById("courses-list");
const courseContent = document.getElementById("course-content");

const courses = [
  {
    name: "DBMS",
    url: "course1.dbms"
  },
  {
    name: "SE",
    url: "course2.se"
  }
  // Add more courses here
];

courses.forEach((course) => {
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = course.name;
  link.addEventListener("click", () => {
    courseContent.innerHTML = `<iframe src="${course.url}" width="100%" height="500"></iframe>`;
    courseContent.style.display = "block";
  });
  const listItem = document.createElement("li");
  listItem.appendChild(link);
  coursesList.appendChild(listItem);
});

courseContent.style.display = "none";