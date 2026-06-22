// ── AOS Init
AOS.init({ once: true, duration: 700 });

// ── Navbar scroll effect & active link
const navbar = document.querySelector('nav');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 80) current = s.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
});

// ── Typing Animation
const roles = ['Web Developer', 'Laravel Developer', 'Frontend Developer', 'TRPL Student'];
let roleIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typed');

function type() {
    const current = roles[roleIdx];
    typedEl.textContent = deleting ? current.substring(0, charIdx--) : current.substring(0, charIdx++);

    if (!deleting && charIdx === current.length + 1) {
        setTimeout(() => deleting = true, 1800);
    } else if (deleting && charIdx === -1) {
        deleting = false;
        charIdx = 0;
        roleIdx = (roleIdx + 1) % roles.length;
    }
    setTimeout(type, deleting ? 60 : 100);
}
type();

// ── Skill Bar Animate on Scroll
const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
                bar.style.width = bar.dataset.width + '%';
            });
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.getElementById('skills');
if (skillsSection) skillObserver.observe(skillsSection);

// ── Contact Form → mailto
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const nama = document.getElementById('formNama').value;
    const email = document.getElementById('formEmail').value;
    const pesan = document.getElementById('formPesan').value;
    window.location.href = `mailto:moh.naufal1987@gmail.com?subject=Pesan dari ${encodeURIComponent(nama)}&body=${encodeURIComponent(`Nama: ${nama}\nEmail: ${email}\n\n${pesan}`)}`;
});

// ── Legacy button (fallback)
function hubungiEmail() {
    window.location.href = "mailto:moh.naufal1987@gmail.com?subject=Halo%20Saya%20Ingin%20Bertanya&body=Halo Naufal,%0D%0A%0D%0ASaya ingin menghubungi Anda mengenai...";
}
