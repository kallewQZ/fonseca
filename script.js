AOS.init();

// Seleciona os elementos
const btnToggle = document.getElementById('toggleButton');
const extraHaircuts = document.getElementById('extraHaircuts');

// Adiciona um ouvinte de evento para o clique do botão
btnToggle.addEventListener('click', () => {
    extraHaircuts.classList.toggle('show'); // Alterna a classe .show

    // Alterar o texto do botão conforme o estado
    if (extraHaircuts.classList.contains('show')) {
        btnToggle.textContent = 'Mostrar menos';
    } else {
        btnToggle.textContent = 'Mostrar mais';
    }
});
// WhatsApp redirect
const whatsappURL = 'https://api.whatsapp.com/send?phone=351967655658&text=Quero%20fazer%20um%20agendamento%20hoje!';

// Seleciona todas as imagens dentro da seção .haircuts
const haircutImages = document.querySelectorAll('.haircut img');
const haircutButtons = document.querySelectorAll('.haircut-info button');

// Adiciona evento de clique para redirecionar ao WhatsApp ao clicar nas imagens
haircutImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        window.open(whatsappURL, '_blank');
    });
});

// Adiciona evento de clique para redirecionar ao WhatsApp ao clicar nos botões
haircutButtons.forEach(btn => {
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', () => {
        window.open(whatsappURL, '_blank');
    });
});

