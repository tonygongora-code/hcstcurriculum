const worldLanguageCourses = [
  {
    title: "AP Spanish Language",
    grades: [11, 12],
    description: "This college-level course emphasizes communication skills, requiring students to use Spanish in a variety of contexts. The curriculum focuses on developing fluency and accuracy in written and spoken Spanish, preparing students for the AP exam.",
    link: "https://hcst-5154.chalk.com/public/map/38895/units"
  },
  {
    title: "AP Spanish Literature and Culture",
    grades: [11, 12],
    description: "A college-level course where students read, analyze, and discuss a wide range of literary works in Spanish. The course deepens understanding of Hispanic cultures and hones critical reading and analytical writing skills.",
    link: "https://hcst-5154.chalk.com/public/map/38898/units"
  },
  {
    title: "World Language 6",
    grades: [6],
    description: "This exploratory course introduces students to the basics of world languages and cultures. The curriculum focuses on foundational vocabulary, simple conversational phrases, and an appreciation for cultural diversity, preparing students for more in-depth language study.",
    link: "https://hcst-5154.chalk.com/public/map/39248/units"
  },
  {
    title: "World Language 7",
    grades: [7],
    description: "Building on the exploratory foundation of Grade 6, this course allows students to begin focusing on a specific language. The curriculum develops skills in listening, speaking, reading, and writing, with an emphasis on grammar and cultural context.",
    link: "https://hcst-5154.chalk.com/public/map/39399/units"
  },
  {
    title: "World Language 8",
    grades: [8],
    description: "This course continues to build communicative proficiency, with a greater emphasis on constructing complex sentences and understanding cultural nuances. Students will engage in more advanced conversations, read authentic materials, and write short compositions.",
    link: "https://hcst-5154.chalk.com/public/map/39400/units"
  },
  {
    title: "World Languages I",
    grades: [9, 10, 11, 12],
    description: "This introductory high school course builds a solid foundation in a chosen language. The curriculum focuses on developing proficiency in speaking, listening, reading, and writing, along with an exploration of the culture associated with the language.",
    link: "https://hcst-5154.chalk.com/public/map/44701/units"
  },
  {
    title: "World Languages II",
    grades: [9, 10, 11, 12],
    description: "Building upon the foundation of Level I, this course expands students' vocabulary and grammatical knowledge, introducing more complex sentence structures and past tenses. The focus shifts from basic phrases to holding simple conversations, comprehending short authentic texts, and writing descriptive paragraphs. Cultural exploration continues with a deeper look into the daily life and traditions of the target language's speakers.",
    link: "https://hcst-5154.chalk.com/public/map/45161/units"
  },
  {
    title: "World Languages III",
    grades: [9, 10, 11, 12],
    description: "This course is designed to increase conversational fluency and is conducted primarily in the target language. Students will master more nuanced grammar and idiomatic expressions while engaging in class discussions and debates. The curriculum incorporates the reading of authentic materials such as news articles and short stories, and writing skills are honed through the composition of short essays. A deeper dive into the history, literature, and contemporary issues of the target culture is also a key component.",
    link: "https://hcst-5154.chalk.com/public/map/45162/units"
  },
  {
    title: "World Languages IV",
    grades: [9, 10, 11, 12],
    description: "As a pre-college level course, World Language IV is conducted almost entirely in the target language to achieve a high degree of proficiency. Students will critically analyze advanced literary texts and films, write well-structured analytical essays, and debate complex, abstract topics. This capstone course prepares students for college-level language study or AP examinations by fostering near-native fluency and a deep cultural understanding.",
    link: "https://hcst-5154.chalk.com/public/map/45164/units"
  }
];

// 2. The Function to Build the HTML
function renderCourses(containerId, gradeFilter) {
  const container = document.getElementById(containerId);
  if (!container) return; // Exit if the container doesn't exist on this page

  let html = "";

  worldLanguageCourses.forEach(course => {
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