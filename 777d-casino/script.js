// Script JavaScript untuk Animasi Slot
const symbols = ['🍒', '🍋', '🍉', '⭐', '💎', '7️⃣'];
const messageEl = document.getElementById('spin-message');

function spin() {
    messageEl.textContent = "Memutar...";
    messageEl.style.color = "white";

    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');

    // Simulasi animasi berputar
    let spins = 0;
    const interval = setInterval(() => {
        reel1.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        reel2.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        reel3.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        spins++;

        if (spins > 15) { // Berhenti setelah 15 putaran cepat
            clearInterval(interval);
            checkWin(reel1.textContent, reel2.textContent, reel3.textContent);
        }
    }, 100);
}

function checkWin(r1, r2, r3) {
    if (r1 === r2 && r2 === r3) {
        if(r1 === '7️⃣') {
            messageEl.textContent = "JACKPOT GRAND 777D! 💰💰💰";
        } else {
            messageEl.textContent = "MENANG BESAR! 🎉";
        }
        messageEl.style.color = "#ffd700";
    } else if (r1 === r2 || r2 === r3 || r1 === r3) {
        messageEl.textContent = "MENANG KECIL! 👍";
        messageEl.style.color = "#00ff00";
    } else {
        messageEl.style.color = "gray";
        messageEl.textContent = "Coba Lagi!";
    }
}

// Smooth scroll untuk navigasi
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
