document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const thankYou = document.getElementById('thankYouMessage');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.classList.add('d-none');
      thankYou.classList.remove('d-none');
    });
  });
  