// Anda bisa menambahkan JavaScript di sini untuk fungsionalitas tambahan.
// Contoh: Efek smooth scroll saat klik menu navigasi.

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Mengurangi tinggi header
                behavior: 'smooth'
            });
        }
    });
});

// Anda juga bisa menambahkan efek animasi saat scroll, validasi form, dll.
// Contoh sederhana untuk logging saat dokumen siap:
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portofolio web berhasil dimuat!');
});

// Contoh: Efek "fade in" saat elemen muncul di viewport (membutuhkan Intersection Observer API)
const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Berhenti mengamati setelah terlihat
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.classList.add('hidden'); // Tambahkan kelas 'hidden' secara default
    observer.observe(section);
});

// Tambahkan gaya CSS untuk kelas 'hidden' dan 'visible'
/*
// Dalam style.css:
.hidden {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.visible {
    opacity: 1;
    transform: translateY(0);
}
*/