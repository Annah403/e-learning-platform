// --- Course Data ---
const courses = [
  {
    id: 1,
    title: "HTML Basics",
    description: "Learn the structure of web pages with HTML.",
    lessons: ["Introduction to HTML", "Tags and Elements", "Links and Images", "Forms"],
    completed: false,
    progress: 0
  },
  {
    id: 2,
    title: "CSS Fundamentals",
    description: "Style your web pages beautifully with CSS.",
    lessons: ["Selectors", "Box Model", "Flexbox", "Grid Layout"],
    completed: false,
    progress: 0
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    description: "Add interactivity to your websites with JavaScript.",
    lessons: ["Variables and Data Types", "Functions", "DOM Manipulation", "Events"],
    completed: false,
    progress: 0
  }
];

const app = document.getElementById('app');

// --- Render the Home Page ---
function renderHomePage() {
  app.innerHTML = `
    <h2>Available Courses</h2>
    <div class="course-list">
      ${courses.map(course => `
        <div class="course-card">
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <p><strong>Progress:</strong> ${course.progress}%</p>
          <button onclick="viewCourse(${course.id})">View Course</button>
        </div>
      `).join('')}
    </div>
  `;
}

// --- View Course Details ---
function viewCourse(id) {
  const course = courses.find(c => c.id === id);
  const completedLessons = course.progress / (100 / course.lessons.length);

  app.innerHTML = `
    <div class="course-detail">
      <h2>${course.title}</h2>
      <p>${course.description}</p>

      <div class="progress-container">
        <div class="progress-bar" style="width: ${course.progress}%;"></div>
      </div>
      <p>${course.progress}% completed</p>

      <h3>Lessons</h3>
      ${course.lessons.map((lesson, index) => `
        <div class="lesson ${index < completedLessons ? 'completed' : ''}">
          ${lesson}
        </div>
      `).join('')}

      <button class="complete-btn" onclick="markCompleted(${course.id})">
        Mark as Completed
      </button>
      <button class="back-btn" onclick="renderHomePage()">Back to Courses</button>
    </div>
  `;
}

// --- Mark Course as Completed ---
function markCompleted(id) {
  const course = courses.find(c => c.id === id);
  course.completed = true;
  course.progress = 100;
  alert(`${course.title} marked as completed!`);
  viewCourse(id);
}

// --- Initialize Home Page ---
renderHomePage();
