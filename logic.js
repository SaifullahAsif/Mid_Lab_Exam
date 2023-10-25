

const changer = document.querySelectorAll('.faq-toggle')


console.log(changer);

changer.forEach(changer => {
    changer.addEventListener('click', () => {
        changer.parentNode.classList.add('active');
        
    })
})


