document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('.accordion-header');
  
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const activeHeader = document.querySelector('.accordion-header.active');
      
      if (activeHeader && activeHeader !== header) {
        activeHeader.classList.remove('active');
        activeHeader.nextElementSibling.style.display = 'none';
        activeHeader.querySelector('.icon').classList.remove('active');
      }

      header.classList.toggle('active');
      const content = header.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
      header.querySelector('.icon').classList.toggle('active');
    });
  });
});
