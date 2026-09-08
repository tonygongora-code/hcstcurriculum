const csCourses = [
  {
    title: "AP Computer Science A",
    grades: [10, 11, 12], 
    description: "AP Computer Science A is an introductory college-level course in computer science. Students cultivate their understanding of programming with a focus on problem solving and algorithm development using the Java programming language.",
    link: "https://hcst-5154.chalk.com/public/map/38826/units"
  },
  {
    title: "AP Computer Science Principles",
    grades: [9, 10, 11, 12],
    description: "AP Computer Science Principles introduces students to the foundational concepts of computer science and challenges them to explore how computing and technology can impact the world. The course covers creative problem solving, data, and the societal impacts of computing.",
    link: "https://hcst-5154.chalk.com/public/map/40105/units"
  },
  {
    title: "Technology 6",
    grades: [6],
    description: "This introductory course provides students with foundational skills in digital literacy, online safety, and computer basics. Topics include effective use of productivity software, an introduction to block-based coding, and responsible digital citizenship.",
    link: "https://hcst-5154.chalk.com/public/map/45323/units"
  },
  {
    title: "Technology 7",
    grades: [7],
    description: "Building on the skills from Grade 6, this course introduces more advanced topics, including spreadsheet and data management, the fundamentals of web design using HTML, and an introduction to text-based programming concepts.",
    link: "https://hcst-5154.chalk.com/public/map/45322/units"
  },
  {
    title: "Technology 8",
    grades: [8],
    description: "This course advances students' skills by focusing on algorithmic thinking and problem-solving through text-based programming. Students will also explore topics in cybersecurity, data analysis, and the societal impacts of technology.",
    link: "https://hcst-5154.chalk.com/public/map/39212/units"
  }
];

function renderCourses(containerId, gradeFilter) {
  const container = document.getElementById(containerId);
  if (!container) return; // Exit if the container doesn't exist on this page

  let html = "";

  csCourses.forEach(course => {
    if (gradeFilter !== "All" && !course.grades.includes(gradeFilter)) {
      return; 
    }

    // Build the HTML block for the course
    html += `
      <div class="course-item-dropdown">
        <button class="course-item" onclick="toggleDropdown(this)">
          <span>${course.title}</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="dropdown-content dropdown-content-single">
          <p>${course.description}</p>
          <a href="${course.link}" class="button-link" target="_blank">View ${course.title} Curriculum</a>
        </div>
      </div>
    `;
  });

  // Inject the HTML into the page
  container.innerHTML = html;
}