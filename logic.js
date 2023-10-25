document.getElementById('submission').addEventListener('click', function(e) {
    e.preventDefault();
   
    const Q_input = document.getElementById('Q_input').value;
    const A_input = document.getElementById('A_input').value;
   
    if (Q_input && A_input) {
       const faqContainer = document.querySelector('.faq-container');
   
       const newFaq = document.createElement('div');
       newFaq.classList.add('faq');
   
       const faqTitle = document.createElement('h3');
       faqTitle.classList.add('faq-title');
       faqTitle.textContent = Q_input;
   
       const faqText = document.createElement('p');
       faqText.classList.add('faq-text');
       faqText.textContent = A_input;
   
       const faqToggle = document.createElement('button');
       faqToggle.classList.add('faq-toggle');
       faqToggle.innerHTML = '<i class="fas fa-chevron-down"></i><i class="fas fa-times"></i>';
   
       newFaq.appendChild(faqTitle);
       newFaq.appendChild(faqText);
       newFaq.appendChild(faqToggle);
   
       faqContainer.appendChild(newFaq);
   
       document.getElementById('Q_input').value = '';
       document.getElementById('A_input').value = '';
    }
   });


   const toggles = document.querySelectorAll('.faq-toggle')

   toggles.forEach(toggle => {
       toggle.addEventListener('click', () => {
           toggle.parentNode.classList.toggle('active');
           if (checker.classList.contains("active")) {
            checker.remove();
          }
       })
   })



