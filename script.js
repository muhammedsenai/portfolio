
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.getAttribute('data-filter');
    projects.forEach(project => {
      const category = project.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});
