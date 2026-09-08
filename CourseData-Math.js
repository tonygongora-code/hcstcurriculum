const mathCourses = [
  {
    title: "Algebra I",
    grades: [9], 
    description: "Algebra 1 introduces students to the fundamental concepts of algebraic expressions, equations, and functions. Key topics include solving linear equations and inequalities, graphing linear functions, understanding systems of equations, and an introduction to quadratic functions and polynomials.",
    link: "https://hcst-5154.chalk.com/public/map/60305/units"
  },
  {
    title: "Algebra I MS",
    grades: [8], 
    description: "An advanced course for middle school students, Algebra I covers linear equations and inequalities, systems of equations, polynomials, factoring, and quadratic functions. This course provides a high school-level foundation in algebra.",
    link: "https://hcst-5154.chalk.com/public/map/34710/units"
  },
  {
    title: "Algebra II",
    grades: [9, 10, 11], 
    description: "This course expands upon concepts from Algebra I, delving into advanced topics like polynomial, rational, exponential, and logarithmic functions, as well as sequences, series, probability, and statistics.",
    link: "https://hcst-5154.chalk.com/public/map/36810/units"
  },
  {
    title: "AP Calculus AB",
    grades: [11, 12], 
    description: "AP Calculus AB is a college-level course equivalent to a first-semester college calculus course. It covers differential and integral calculus, including limits, derivatives, and their applications, as well as the Fundamental Theorem of Calculus.",
    link: "https://hcst-5154.chalk.com/public/map/38814/units"
  },
  {
    title: "AP Calculus BC",
    grades: [11, 12], 
    description: "AP Calculus BC is a full-year college-level course, equivalent to two semesters of college calculus. It extends the topics of AP Calculus AB to include additional methods of integration, polar and parametric equations, and infinite sequences and series.",
    link: "https://hcst-5154.chalk.com/public/map/38815/units"
  },
  {
    title: "AP Precalculus",
    grades: [10, 11, 12], 
    description: "AP Precalculus is a college-level course that explores functions in greater depth, preparing students for the AP exam and subsequent calculus studies. Topics include polynomial, rational, exponential, logarithmic, and trigonometric functions.",
    link: "https://hcst-5154.chalk.com/public/map/47289/units"
  },
  {
    title: "AP Statistics",
    grades: [11, 12], 
    description: "AP Statistics is a college-level introductory course to statistics. Students will explore concepts such as exploring data, sampling and experimentation, anticipating patterns using probability, and statistical inference.",
    link: "https://hcst-5154.chalk.com/public/map/56193/units"
  },
  {
    title: "Business Math",
    grades: [11, 12], 
    description: "Business Math focuses on the practical application of mathematical skills in a business context. Topics include payroll, interest rates, financial reports, inventory, and other essential calculations for business operations.",
    link: "https://hcst-5154.chalk.com/public/map/37222/units"
  },
  {
    title: "Calculus",
    grades: [11, 12], 
    description: "Calculus provides an introduction to the concepts of limits, derivatives, and integrals. The course focuses on the application of these principles to understand rates of change and the area under curves, building a strong foundation for advanced mathematics.",
    link: "https://hcst-5154.chalk.com/public/map/37287/units"
  },
  {
    title: "Consumer Economics/Personal Finance",
    grades: [9], 
    description: "This Personal Finance course equips students with essential knowledge and skills to manage their financial lives effectively. Topics include budgeting, saving, investing, credit and debt, banking, insurance, and long-term financial planning.",
    link: "https://hcst-5154.chalk.com/public/map/38230/units"
  },
  {
    title: "Geometry",
    grades: [9, 10],
    description: "Geometry provides a comprehensive exploration of fundamental geometric concepts. Students will delve into Euclidean geometry, studying properties of points, lines, planes, and solids, with an emphasis on logical reasoning and proofs, transformations, congruence, and similarity.",
    link: "https://hcst-5154.chalk.com/public/map/38643/units"
  },
  {
    title: "Math 6",
    grades: [6],
    description: "This course focuses on key mathematical concepts for sixth graders, including ratios, proportional relationships, the number system, expressions and equations, and introductory statistics and probability. Students will develop problem-solving skills and a deeper understanding of mathematical principles.",
    link: "https://hcst-5154.chalk.com/public/map/39718/units"
  },
  {
    title: "Math 7",
    grades: [7],
    description: "This course builds on foundational concepts by exploring proportional relationships, operations with rational numbers, expressions and equations, and geometric concepts such as scale drawings, area, and volume.",
    link: "https://hcst-5154.chalk.com/public/map/39844/units"
  },
  {
    title: "Math 8",
    grades: [8],
    description: "This course delves into pre-algebra concepts, focusing on linear equations, functions, the Pythagorean theorem, and exploring irrational numbers. Students will also work with geometric transformations like rotations and reflections.",
    link: "https://hcst-5154.chalk.com/public/map/39847/units"
  },
  {
    title: "Math Proficiency",
    grades: [9], // Typically a support course across multiple grades
    description: "This Math Proficiency course is designed to strengthen students' foundational mathematical skills and concepts essential for success in higher-level mathematics. The curriculum focuses on reinforcing arithmetic operations, number sense, and pre-algebraic concepts.",
    link: "https://hcst-5154.chalk.com/public/map/44715/units"
  },
  {
    title: "Pre-Calculus",
    grades: [10, 11, 12], 
    description: "Pre-Calculus is designed to prepare students for calculus by covering advanced topics in algebra and trigonometry. Key areas of study include functions, graphing, complex numbers, conic sections, and an introduction to limits.",
    link: "https://hcst-5154.chalk.com/public/map/38984/units"
  },
  {
    title: "Probability and Statistics",
    grades: [11, 12],
    description: "This course introduces the fundamental concepts of collecting, analyzing, and interpreting data to make sense of uncertainty. Students will learn how to describe data sets using statistical measures, understand the principles of probability, design effective surveys and experiments, and use data from a small sample to draw reliable conclusions about a larger population. The curriculum emphasizes critical thinking, providing the tools to analyze real-world information and evaluate the validity of claims seen in news, science, and everyday life.",
    link: "https://hcst-5154.chalk.com/public/map/38989/units"
  }
  
];

// 2. The Function to Build the HTML
// containerId: The ID of the <div> where the courses will appear
// gradeFilter: (Optional) The grade level to filter by. If "All", it shows everything.
function renderCourses(containerId, gradeFilter) {
  const container = document.getElementById(containerId);
  if (!container) return; // Exit if the container doesn't exist on this page

  let html = "";

  mathCourses.forEach(course => {
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