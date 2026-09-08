const artsCourses = [
  {
    title: "Dance Technique",
    grades: [9, 10, 11, 12],
    description: "This course is for students who wish to develop their skills in various dance styles. The curriculum focuses on building core strength, flexibility, and coordination, with instruction in techniques such as ballet, jazz, and modern dance.",
    link: "https://hcst-5154.chalk.com/public/map/38326/units"
  },
  {
    title: "Fine Art I",
    grades: [9, 10, 11, 12],
    description: "This foundational high school art course introduces students to the elements and principles of design. Students will explore a variety of 2D and 3D media, including drawing, painting, and sculpture, while developing their technical skills and creative expression.",
    link: "https://hcst-5154.chalk.com/public/map/44743/units"
  },
  {
    title: "Fine Art II",
    grades: [10, 11, 12],
    description: "Building on the skills from Fine Art I, this course allows students to explore advanced techniques and concepts. Students will work on more complex projects, develop a personal artistic voice, and begin to build a portfolio of their work.",
    link: "https://hcst-5154.chalk.com/public/map/44748/units"
  },
  {
    title: "Fine Art III",
    grades: [11, 12],
    description: "This advanced course is for serious art students focused on portfolio development. Students will work to create a cohesive body of work in a chosen concentration, guided by critiques, art history research, and advanced technical instruction.",
    link: "https://hcst-5154.chalk.com/public/map/44752/units"
  },
  {
    title: "Performing Arts - Guitar",
    grades: [9, 10, 11, 12],
    description: "This course is for students of all levels to learn and develop guitar skills. Instruction covers basic chords, reading music and tablature, and various playing styles. Students will perform both solo and in ensembles.",
    link: "https://hcst-5154.chalk.com/public/map/45380/units"
  },
  {
    title: "Performing Arts - Instrumental Music",
    grades: [9, 10, 11, 12],
    description: "This course allows students to participate in an instrumental ensemble. The curriculum focuses on developing technical proficiency, sight-reading skills, and music theory through rehearsal and performance.",
    link: "https://hcst-5154.chalk.com/public/map/45381/units"
  },
  {
    title: "Performing Arts - Vocal Music",
    grades: [9, 10, 11, 12],
    description: "This course is designed for students interested in vocal performance, typically as part of a choir. It covers vocal technique, sight-singing, music theory, and performance skills through a variety of musical genres.",
    link: "https://hcst-5154.chalk.com/public/map/46279/units"
  },
  {
    title: "Visual and Performing Arts 6",
    grades: [6],
    description: "This exploratory course introduces students to the fundamentals of both visual and performing arts. Students will engage in hands-on projects in drawing and painting, as well as introductory activities in music, dance, and theater.",
    link: "https://hcst-5154.chalk.com/public/map/39245/units"
  },
  {
    title: "Visual and Performing Arts 7",
    grades: [7],
    description: "Building on foundational skills, this course allows students to focus more deeply on specific areas of interest. Students may choose to develop their techniques in mediums like ceramics or digital art, or further their skills in instrumental music, vocal performance, or dramatic arts.",
    link: "https://hcst-5154.chalk.com/public/map/39246/units"
  },
  {
    title: "Visual and Performing Arts 8",
    grades: [8],
    description: "In this course, students prepare for high school-level arts by developing a portfolio or performance piece. They will refine their technical skills in a chosen discipline and study the historical and cultural context of various art forms.",
    link: "https://hcst-5154.chalk.com/public/map/39247/units"
  }
];

// 2. The Function to Build the HTML
function renderCourses(containerId, gradeFilter) {
  const container = document.getElementById(containerId);
  if (!container) return; // Exit if the container doesn't exist on this page

  let html = "";

  artsCourses.forEach(course => {
    // If a gradeFilter is provided (and it's not "All"), check if the course belongs in this grade
    if (gradeFilter !== "All" && !course.grades.includes(gradeFilter)) {
      return; // Skip this course
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