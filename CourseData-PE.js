const PECourses = [
  {
    title: "Driver's Education",
    grades: [10],
    description: "This course provides students with the knowledge and skills necessary for safe driving. The curriculum covers traffic laws, vehicle operation, and responsible decision-making on the road, preparing students for the written portion of the driver's license exam.",
    link: "https://hcst-5154.chalk.com/public/map/38419"
  },
  {
    title: "Health 6",
    grades: [6],
    description: "This course introduces students to key aspects of personal health and wellness. Topics include nutrition, physical activity, mental and emotional health, and substance abuse prevention, empowering students to make healthy choices.",
    link: "https://hcst-5154.chalk.com/public/map/39871/units"
  },
  {
    title: "Health 7",
    grades: [7],
    description: "This course expands on health and wellness concepts, with a focus on decision-making skills. Topics include interpersonal communication, disease prevention, and understanding the risks associated with alcohol, tobacco, and other drugs.",
    link: "https://hcst-5154.chalk.com/public/map/39574/units"
  },
  {
    title: "Health 8",
    grades: [8],
    description: "This course prepares students for the challenges of adolescence by focusing on social and emotional health, healthy relationships, and conflict resolution. It also provides an introduction to human growth and development.",
    link: "https://hcst-5154.chalk.com/public/map/39575/units"
  },
  {
    title: "Health I",
    grades: [9],
    description: "This foundational high school health course covers a wide range of topics essential for adolescent well-being. Areas of study include mental and emotional health, nutrition, substance abuse, and disease prevention, with a focus on developing healthy habits.",
    link: "https://hcst-5154.chalk.com/public/map/38435/units"
  },
  {
    title: "Health III",
    grades: [11],
    description: "his course focuses on advanced health topics, including family life and human sexuality, mental health awareness, and preparing for healthy independent living. Students will develop critical thinking skills to evaluate health information and services.",
    link: "https://hcst-5154.chalk.com/public/map/38437/units"
  },
  {
    title: "Health IV",
    grades: [12],
    description: "This senior-level health course focuses on preparing students for lifelong wellness. Topics include community health, consumer advocacy, and navigating the healthcare system. Students will complete a culminating project on a health topic of their choice.",
    link: "https://hcst-5154.chalk.com/public/map/38438/units"
  },
  {
    title: "Physical Education 6",
    grades: [6],
    description: "Physical Education 6 focuses on developing motor skills, knowledge of rules, and strategies for a variety of sports and physical activities. Emphasis is placed on teamwork, sportsmanship, and the importance of lifelong physical fitness.",
    link: "https://hcst-5154.chalk.com/public/map/38824/units"
  },
  {
    title: "Physical Education 7",
    grades: [7],
    description: "In Physical Education 7, students will participate in a wider range of team and individual sports. The curriculum emphasizes skill refinement, tactical strategies, and personal fitness goal-setting.",
    link: "https://hcst-5154.chalk.com/public/map/38838/units"
  },
  {
    title: "Physical Education 8",
    grades: [8],
    description: "Physical Education 8 aims to promote lifelong fitness by introducing students to various fitness principles and training methods. Activities include advanced team sports and individual fitness planning.",
    link: "https://hcst-5154.chalk.com/public/map/38839/units"
  },
  {
    title: "Physical Education I",
    grades: [9],
    description: "Physical Education I introduces high school students to a variety of team and individual sports and fitness activities. The course emphasizes the development of physical skills, teamwork, and an understanding of the principles of personal fitness.",
    link: "https://hcst-5154.chalk.com/public/map/38762/units"
  },
  {
    title: "Physical Education II",
    grades: [10],
    description: "Building on the foundations of PE I, this course offers students more choices in activities, focusing on lifetime sports and fitness. Students will design and implement personal fitness plans and further develop their skills in various individual and team sports.",
    link: "https://hcst-5154.chalk.com/public/map/38763/units"
  },
  {
    title: "Physical Education III",
    grades: [11],
    description: "Physical Education III allows students to specialize in fitness and sports activities that align with their personal interests. The curriculum promotes leadership, advanced strategy, and the skills needed to maintain an active lifestyle beyond high school.",
    link: "https://hcst-5154.chalk.com/public/map/38764/units"
  },
  {
    title: "Physical Education IV",
    grades: [12],
    description: "Physical Education IV offers students maximum choice in designing a personal fitness and recreation program. The course emphasizes self-directed activity, stress management techniques, and leadership roles in organizing and officiating activities.",
    link: "https://hcst-5154.chalk.com/public/map/38765/units"
  },
];      

// 2. The Function to Build the HTML
function renderCourses(containerId, gradeFilter) {
  const container = document.getElementById(containerId);
  if (!container) return; // Exit if the container doesn't exist on this page

  let html = "";

  PECourses.forEach(course => {
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