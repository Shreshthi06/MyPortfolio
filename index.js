document.querySelectorAll('nav ul li a, footer a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

var typed = new Typed('#element', {
    strings: ['Web Development', 'Frontend Development', 'Backend Development', 'Web Designing'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    showCursor: false
});
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('contact-form').reset();
});

document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = '#25dff8';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.color = 'white';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('visible', entry.isIntersecting);
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    const sections = ['.leftSection', '.rightSection', '.second-right-section','.thirdsection', '.projects','.form-section'];
    sections.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => observer.observe(element));
    });
});
