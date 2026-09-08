const scienceCourses = [
  {
    title: "Anatomy and Physiology",
    grades: [11, 12],
    description: "A detailed study of the structure and function of the human body, exploring the major body systems and how they work together to maintain homeostasis.",
    link: "https://hcst-5154.chalk.com/public/map/36836/units"
  },
  {
    title: "AP Biology",
    grades: [11, 12],
    description: "A college-level course covering key biological concepts, including evolution, cellular processes, genetics, and ecology, with a significant lab component.",
    link: "https://hcst-5154.chalk.com/public/map/38345/units"
  },
  {
    title: "AP Chemistry",
    grades: [11, 12],
    description: "A college-level course covering atomic theory, chemical bonding, reactions, kinetics, thermodynamics, and equilibrium, with a strong emphasis on laboratory work.",
    link: "https://hcst-5154.chalk.com/public/map/38825/units"
  },
  {
    title: "AP Physics C: Electricity And Magnetism",
    grades: [11, 12],
    description: "A calculus-based, college-level course that explores concepts such as electrostatics, conductors, circuits, magnetic fields, and electromagnetism.",
    link: "https://hcst-5154.chalk.com/public/map/38853/units"
  },
  {
    title: "AP Physics C: Mechanics",
    grades: [11, 12],
    description: "A calculus-based, college-level physics course that explores concepts such as kinematics, Newton’s laws of motion, work, energy, power, and rotational motion.",
    link: "https://hcst-5154.chalk.com/public/map/38853/units" // Note: Same link as E&M in your HTML
  },
  {
    title: "AP Physics I",
    grades: [11, 12],
    description: "AP Physics 1 is an algebra-based, introductory college-level physics course. Students explore topics such as kinematics, dynamics, energy, momentum, and simple harmonic motion through inquiry-based investigations.",
    link: "https://hcst-5154.chalk.com/public/map/38854/units"
  },
  {
    title: "AP Physics II",
    grades: [11, 12],
    description: "An algebra-based, college-level course exploring fluid dynamics, thermodynamics, electric force, field, and potential, circuits, and magnetism.",
    link: "https://hcst-5154.chalk.com/public/map/38890/units"
  },
  {
    title: "AP Research",
    grades: [11, 12],
    description: "Following AP Seminar, this course allows students to deeply explore an academic topic, designing and conducting a year-long investigation to address a research question.",
    link: "https://hcst-5154.chalk.com/public/map/38892/units"
  },
  {
    title: "AP Seminar",
    grades: [10, 11],
    description: "AP Seminar is a foundational course where students learn to investigate real-world issues from multiple perspectives, gathering and analyzing information to develop credible and complex arguments.",
    link: "https://hcst-5154.chalk.com/public/map/38893/units"
  },
  {
    title: "Aquaculture",
    grades: [10, 11, 12],
    description: "The science of farming aquatic organisms, this course covers the principles of fish and shellfish cultivation, water quality management, and sustainable practices.",
    link: "https://hcst-5154.chalk.com/public/map/36922/units"
  },
  {
    title: "Biology",
    grades: [9],
    description: "This foundational high school course provides a comprehensive study of living organisms and their vital processes. Key topics include cell structure and function, genetics, evolution, ecology, and human anatomy.",
    link: "https://hcst-5154.chalk.com/public/map/64597/units"
  },
  {
    title: "Biology Honors",
    grades: [9],
    description: "This advanced course is designed to provide a more in-depth introduction to biology, preparing students for AP Biology. It covers the same core topics as standard biology but with a greater emphasis on inquiry-based labs, data analysis, and critical thinking.",
    link: "https://hcst-5154.chalk.com/public/map/59132/units"
  },
  {
    title: "Chemistry",
    grades: [10],
    description: "This course introduces students to the fundamental principles of chemistry. Topics include atomic structure, the periodic table, chemical bonding, reactions, stoichiometry, and the behavior of gases, providing a strong foundation for further scientific study.",
    link: "https://hcst-5154.chalk.com/public/map/37374/units"
  },
  {
    title: "Earth and Space Science",
    grades: [9, 10, 11, 12],
    description: "This course explores the Earth's systems and its place in the universe, including geology, oceanography, meteorology, and astronomy.",
    link: "https://hcst-5154.chalk.com/public/map/46155/units"
  },
  {
    title: "Food Science/Bromatology",
    grades: [11, 12],
    description: "This course explores the science of food, including its chemical composition, principles of preservation, processing techniques, and nutrition.",
    link: "https://hcst-5154.chalk.com/public/map/38584/units"
  },
  {
    title: "General Science",
    grades: [11],
    description: "A survey of major scientific disciplines, designed to enhance scientific literacy and understanding of the scientific method through accessible, real-world topics.",
    link: "https://hcst-5154.chalk.com/public/map/59134/units"
  },
  {
    title: "Hydroponics",
    grades: [10, 11, 12],
    description: "A course on the method of growing plants without soil, covering nutrient solution management, system design, and the science of plant growth.",
    link: "https://hcst-5154.chalk.com/public/map/38801/units"
  },
  {
    title: "Introduction to Astronomy & Astrophysics (e-school)",
    grades: [11, 12],
    description: "This online course provides an overview of modern astronomy. Topics include the solar system, stars, galaxies, and cosmology.",
    link: "https://hcst-5154.chalk.com/public/map/56195/units"
  },
  {
    title: "Marine Science/Coastal Biology",
    grades: [11, 12],
    description: "This course focuses on the study of marine ecosystems, including the properties of seawater, marine biodiversity, and the ecological dynamics of coastal environments.",
    link: "https://hcst-5154.chalk.com/public/map/38708/units"
  },
  {
    title: "Pathology/Microbiology",
    grades: [11, 12],
    description: "This course introduces the world of microorganisms and the study of disease, including the biology of bacteria, viruses, fungi, and the principles of immunology.",
    link: "https://hcst-5154.chalk.com/public/map/38761/units"
  },
  {
    title: "Physics",
    grades: [11],
    description: "This course provides an introduction to the fundamental concepts of physics, including motion, forces, energy, and electricity. Students will develop a conceptual understanding of the physical world through lab work and problem-solving.",
    link: "https://hcst-5154.chalk.com/public/map/38766/units"
  },
  {
    title: "Science 6",
    grades: [6],
    description: "This course provides an introduction to the major domains of science. Students will explore topics in life science, physical science, and Earth and space science through hands-on investigations, experiments, and inquiry-based learning.",
    link: "https://hcst-5154.chalk.com/public/map/39848/units"
  },
  {
    title: "Science 7",
    grades: [7],
    description: "This course deepens the exploration of life science, with a focus on ecosystems, genetics, and the human body. Students will also investigate concepts in chemistry and physics, using the scientific method to conduct experiments and analyze data.",
    link: "https://hcst-5154.chalk.com/public/map/39849/units"
  },
  {
    title: "Science 8",
    grades: [8],
    description: "This course focuses on Earth and space science, exploring topics such as plate tectonics, weather and climate, and the solar system. Students will also investigate core principles of physical science, including forces, motion, and the properties of waves.",
    link: "https://hcst-5154.chalk.com/public/map/39850/units"
  },
  {
    title: "Zoology",
    grades: [11, 12],
    description: "This course covers the classification, structure, function, and behavior of animals, from simple invertebrates to complex vertebrates.",
    link: "https://hcst-5154.chalk.com/public/map/40137/units"
  }
];

// 2. The Function to Build the HTML
function renderCourses(containerId, gradeFilter) {
  const container = document.getElementById(containerId);
  if (!container) return; // Exit if the container doesn't exist on this page

  let html = "";

  scienceCourses.forEach(course => {
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