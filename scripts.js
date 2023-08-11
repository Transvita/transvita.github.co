const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

sidebar.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  content.classList.toggle('active');
});
