document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.survey-checkbox');
  const successMessage = document.getElementById('successMessage');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      // Check if all checkboxes are checked
      const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
      if (allChecked) {
        successMessage.classList.remove('hidden');
      } else {
        successMessage.classList.add('hidden');
      }
    });
  });
});
