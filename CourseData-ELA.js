const elaCourses = [
  {
    title: "AP English Language and Composition A",
    grades: [11, 12],
    description: "This college-level course engages students in becoming skilled readers of prose written in a variety of rhetorical contexts and in becoming skilled writers who compose for a variety of purposes. Students will focus on analyzing rhetoric and developing their own argumentative and analytical essays.",
    link: "https://hcst-5154.chalk.com/public/map/38833/units"
  },
  {
    title: "AP English Literature and Composition A",
    grades: [11, 12],
    description: "A college-level course where students deepen their understanding of literature through the close reading of complex texts. The course focuses on critical analysis, exploring structure, style, and themes, and requires intensive writing to develop analytical skills.",
    link: "https://hcst-5154.chalk.com/public/map/38830/units"
  },
  {
    title: "Creative Writing",
    grades: [9, 10, 11, 12],
    description: "This course provides a hands-on introduction to the craft of imaginative writing, focusing on genres like fiction, poetry, and creative nonfiction. Students will move beyond traditional academic essays to explore the core elements of storytelling, including plot, character development, dialogue, imagery, and voice. A significant portion of the class will be conducted as a supportive workshop, where students share their original compositions and learn to provide and receive constructive peer feedback. By reading and analyzing the techniques of established authors, students will experiment with different styles and build a portfolio of polished, original pieces.",
    link: "https://hcst-5154.chalk.com/public/map/38284/units"
  },
  {
    title: "English I/World Literature",
    grades: [9],
    description: "This foundational high school course explores diverse literary works from various cultures and historical periods. Students will analyze themes, characters, and literary devices while honing their skills in analytical writing, research, and critical thinking.",
    link: "https://hcst-5154.chalk.com/public/map/34949/units"
  },
  {
    title: "English II/American Literature",
    grades: [10],
    description: "This course explores the rich tapestry of American literature from its origins to the contemporary period. Students will analyze how historical and cultural movements have shaped American literary traditions while further developing their skills in critical reading and argumentative writing.",
    link: "https://hcst-5154.chalk.com/public/map/36838/units"
  },
  {
    title: "English II/AP Seminar",
    grades: [10],
    description: "This advanced, interdisciplinary course merges the literary analysis of a traditional 10th-grade English class with the rigorous research, argumentation, and communication skills of the AP Seminar curriculum. While exploring foundational works of American literature, students will learn to investigate real-world topics by analyzing complex texts and evaluating diverse sources. The course places a strong emphasis on conducting research, building evidence-based arguments, and collaborating with peers. It culminates in the submission of performance tasks for the AP exam, providing excellent preparation for other AP courses and college-level academic work.",
    link: "https://hcst-5154.chalk.com/public/map/38893/units"
  },
  {
    title: "English III/European Literature",
    grades: [11],
    description: "This course offers a survey of major works of European literature. Students will explore how these texts reflect their historical and cultural contexts while analyzing literary movements, universal themes, and character development, further refining their essay-writing skills.",
    link: "https://hcst-5154.chalk.com/public/map/36843/units"
  },
  {
    title: "English IV/Literary Masterpieces",
    grades: [12],
    description: "This senior-level course examines canonical works of literature that have shaped cultural and literary history. Students will engage in in-depth analysis, discussion, and writing, exploring the enduring themes and artistic merits of these masterpieces.",
    link: "https://hcst-5154.chalk.com/public/map/36861/units"
  },
  {
    title: "English Language Arts 6",
    grades: [6],
    description: "This course focuses on developing students' skills in reading, writing, speaking, and listening. Students will analyze a variety of literary and informational texts, develop writing in different genres including narrative and argumentative, and build their vocabulary and grammar knowledge.",
    link: "https://hcst-5154.chalk.com/public/map/39835/units"
  },
  {
    title: "English Language Arts 7",
    grades: [7],
    description: "This course deepens students' analytical reading and writing skills by engaging with more complex literary and informational texts. Students will focus on developing evidence-based arguments, analyzing themes and author's craft, and refining their own writing process through drafting and revision. Emphasis is placed on expanding vocabulary and mastering more sophisticated grammar to enhance clarity and style, preparing students to become more critical thinkers and effective communicators.",
    link: "https://hcst-5154.chalk.com/public/map/39836/units"
  },
  {
    title: "English Language Arts 8",
    grades: [8],
    description: "In this course, students will engage in critical analysis of a wide range of literature and nonfiction. Emphasis is placed on developing sophisticated writing skills, including research techniques, literary analysis, and persuasive argumentation, preparing them for high school-level work.",
    link: "https://hcst-5154.chalk.com/public/map/39838/units"
  },
  {
    title: "English Language/Literature Through Film",
    grades: [11, 12],
    description: "This course treats film as a modern form of literature, teaching students to \"read\" and analyze movies with the same critical rigor used for novels and plays. Students will explore how core literary elements—such as narrative structure, theme, character development, and symbolism—are translated into a visual medium. The curriculum focuses on analyzing cinematographic techniques (like camera angles, lighting, and editing) as the \"literary devices\" of filmmaking, examining how these choices shape the audience's understanding and emotional response to the story.",
    link: "https://hcst-5154.chalk.com/public/map/38346/units"
  },
  {
    title: "Gothic/Horror Literature and Film",
    grades: [11, 12],
    description: "This course explores the power of the Gothic and Horror genres to reflect cultural anxieties, both on the page and on the screen. Students will trace the evolution of the genre from its literary origins in works by authors like Poe and Shelley to its modern expression in film. The curriculum focuses on analyzing how literary devices such as suspense, foreshadowing, and the uncanny are translated into cinematic techniques like lighting, sound design, and camera angles. By examining recurring themes of the monstrous, the unknown, and the forbidden, students will critically analyze how horror serves as a powerful medium for exploring the darker side of human nature and society.",
    link: "https://hcst-5154.chalk.com/public/map/37227/units"
  },
  {
    title: "Pursuit of Happiness",
    grades: [11, 12],
    description: "What does it mean to live a good life? This course explores the universal human quest for fulfillment through literature, philosophy, and film. From the American Dream to modern mindfulness, students will analyze how authors across history have defined \"happiness.\" Expect lively debates, introspection, and texts that challenge you to rethink what success really looks like.",
    link: "https://hcst-5154.chalk.com/public/map/51218/units"
  },
  {
    title: "Rock and Roll as a Literary Form",
    grades: [11, 12],
    description: "This course analyzes rock and roll (along with its related genres like folk, punk, and hip-hop) as a vital form of 20th and 21st-century literature. Moving beyond the music, students will treat lyrics as poetry, examining the work of influential singer-songwriters—from Bob Dylan and Joni Mitchell to Kendrick Lamar—as contemporary authors. The class will apply formal literary analysis to explore narrative structure in songs and concept albums, the use of poetic devices like metaphor and allusion, and the evolution of major themes such as rebellion, alienation, love, and social protest. By placing these \"texts\" within their historical and cultural contexts, this course validates popular music as a powerful and legitimate medium for storytelling.",
    link: "https://hcst-5154.chalk.com/public/map/40102/units"
  }
];

// 2. The Function to Build the HTML
function renderCourses(containerId, gradeFilter) {
  const container = document.getElementById(containerId);
  if (!container) return; // Exit if the container doesn't exist on this page

  let html = "";

  elaCourses.forEach(course => {
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