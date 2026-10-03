// --- 1. EFECTO MÁQUINA DE ESCRIBIR ---
const textArray = [
    "Soy amante del teclado.",
    "Apasionado por los videojuegos.",
    "Creador de Proyectos."
];
let arrayIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById("typewriter");

function type() {
    if (charIndex < textArray[arrayIndex].length) {
        typewriterElement.textContent += textArray[arrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typewriterElement.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        arrayIndex = (arrayIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

// --- 2. MODO OSCURO / MODO CLARO ---
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        toggleBtn.textContent = '☀️ Modo Claro';
    } else {
        toggleBtn.textContent = '🌙 Modo Oscuro';
    }
});

// --- 3. ANIMACIÓN EN TARJETAS ---
const cards = document.querySelectorAll('.project-card, .download-container');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        card.style.transform = `perspective(1000px) rotateX(${-y / 25}deg) rotateY(${x / 25}deg) scale(1.01)`;
        card.style.transition = 'none';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        card.style.transition = 'transform 0.5s ease';
    });
});

// Inicializar la animación de escritura
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
});