const socialStudiesCourses = [
  {
    title: "Abnormal Psychology",
    grades: [11, 12],
    description: "Abnormal Psychology provides an in-depth exploration of psychological disorders, examining the criteria used to define and diagnose atypical patterns of behavior, emotion, and thought. Students will survey major diagnostic categories, including anxiety, mood, psychotic, and personality disorders, while investigating their potential causes from various perspectives, such as biological, psychological, and sociocultural. The course aims to foster an empathetic and scientific understanding of mental health, reduce stigma, and provide a comprehensive overview of modern therapeutic approaches and interventions.",
    link: "https://hcst-5154.chalk.com/public/map/36725/units"
  },
  {
    title: "AP Human Geography",
    grades: [9, 10, 11, 12],
    description: "A college-level course on the systematic study of patterns and processes that have shaped human understanding, use, and alteration of Earth's surface.",
    link: "https://hcst-5154.chalk.com/public/map/38848/units"
  },
  {
    title: "AP Psychology",
    grades: [11, 12],
    description: "A college-level course introducing the systematic and scientific study of the behavior and mental processes of human beings and other animals.",
    link: "https://hcst-5154.chalk.com/public/map/54118/units"
  },
  {
    title: "AP US Government and Politics",
    grades: [11, 12],
    description: "A college-level course providing an analytical perspective on government and politics in the United States, including the study of the Constitution, political beliefs, and policy processes.",
    link: "https://hcst-5154.chalk.com/public/map/38900/units"
  },
  {
    title: "AP US History",
    grades: [10, 11, 12],
    description: "This college-level course provides a detailed examination of American history. Students analyze historical materials, develop historical thinking skills, and prepare for the AP exam.",
    link: "https://hcst-5154.chalk.com/public/map/38915/units"
  },
  {
    title: "AP US History I",
    grades: [10],
    description: "This college-level course provides a detailed examination of American history from pre-Columbian societies to the Civil War. Students will analyze historical materials, develop historical thinking skills, and prepare for the AP exam.",
    link: "https://hcst-5154.chalk.com/public/map/72986/units"
  },
  {
    title: "AP US History II",
    grades: [11],
    description: "This college-level course covers American history from the late 19th century to the present, focusing on industrialization, global conflicts, and social movements.",
    link: "https://hcst-5154.chalk.com/public/map/72987/units"
  },
  {
    title: "AP World History: Modern",
    grades: [9, 10],
    description: "This college-level course covers the history of the world from 1200 C.E. to the present. Students will investigate significant events and processes, analyzing sources and crafting historical arguments in preparation for the AP exam.",
    link: "https://hcst-5154.chalk.com/public/map/62305/units"
  },
  {
    title: "History Through Film",
    grades: [11, 12],
    description: "An elective course analyzing historical events through film. Students critically evaluate cinematic portrayals of history, comparing them with historical documents.",
    link: "https://hcst-5154.chalk.com/public/map/38439/units"
  },
  {
    title: "Psychology",
    grades: [11, 12],
    description: "Psychology is the scientific study of behavior and mental processes. This survey course introduces students to the major concepts and theories used to understand the human experience. Students will explore a wide range of topics, including the biological basis of behavior, learning and cognition, personality development, social interactions, and the nature of psychological disorders. By examining key research and case studies, the course emphasizes the application of the scientific method to understand why people think, feel, and act as they do, while fostering critical thinking skills that can be applied to everyday life.",
    link: "https://hcst-5154.chalk.com/public/map/39014/units"
  },
  {
    title: "Rock and Roll History",
    grades: [11, 12],
    description: "This course traces the history and cultural impact of rock and roll, exploring how the music reflected and influenced social, political, and economic changes.",
    link: "https://hcst-5154.chalk.com/public/map/68184/units"
  },
  {
    title: "Social Studies 6",
    grades: [6],
    description: "This course explores the history and geography of the ancient world. Students will study early civilizations in regions such as Mesopotamia, Egypt, India, China, Greece, and Rome, focusing on their cultures, governments, and contributions to society.",
    link: "https://hcst-5154.chalk.com/public/map/38843/units"
  },
  {
    title: "Social Studies 7",
    grades: [7],
    description: "This course covers world history and geography from the medieval period to the early modern era. Students will explore the interactions between societies in Europe, Asia, Africa, and the Americas, focusing on the growth of empires, trade networks, and cultural exchanges.",
    link: "https://hcst-5154.chalk.com/public/map/38886/units"
  },
  {
    title: "Social Studies 8",
    grades: [8],
    description: "This course provides a comprehensive survey of United States history, from early colonial settlement through the Civil War and Reconstruction. Students will analyze key events, historical figures, and the founding principles of American government.",
    link: "https://hcst-5154.chalk.com/public/map/39244/units"
  },
  {
    title: "US Gender Studies",
    grades: [11, 12],
    description: "This course provides a comprehensive exploration of how gender and sexuality have shaped the American experience. Students will analyze gender as a social and cultural construct, examining how its meaning has changed throughout U.S. history. Using an intersectional lens, the class will investigate how gender interacts with race, class, and other identities to influence American culture, politics, and institutions, from the family and the workplace to law and media.",
    link: "https://hcst-5154.chalk.com/public/map/38921/units"
  },
  {
    title: "US History I",
    grades: [10],
    description: "This course covers American history from early exploration and colonization through the Civil War and Reconstruction. Students will study major political, social, and economic developments that shaped the nation.",
    link: "https://hcst-5154.chalk.com/public/map/38922/units"
  },
  {
    title: "US History II",
    grades: [11],
    description: "This course examines U.S. history from the late 19th century to the present, covering industrialization, immigration, America's role as a world power, and major social movements.",
    link: "https://hcst-5154.chalk.com/public/map/39200/units"
  },
  {
    title: "World History",
    grades: [9],
    description: "This course provides a comprehensive survey of world history from early modern times to the present. Students will explore major global events, cultural developments, and the interactions between different societies, focusing on historical thinking skills.",
    link: "https://hcst-5154.chalk.com/public/map/39976/units"
  }
];

// 2. The Function to Build the HTML
function renderCourses(containerId, gradeFilter) {
  const container = document.getElementById(containerId);
  if (!container) return; // Exit if the container doesn't exist on this page

  let html = "";

  socialStudiesCourses.forEach(course => {
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