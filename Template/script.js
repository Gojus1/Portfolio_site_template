
document.querySelectorAll('button.intro-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert("Replace this alert with your actual link or function!");
    // Example: window.open('https://your-link.com', '_blank');
  });
});

document.querySelectorAll('.skill-btn').forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    console.log(`Hovered skill: ${skill.textContent}`);
  });
});

