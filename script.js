// Selecionando os elementos do HTML
const phaseButton = document.getElementById('phase-btn');
const statusText = document.getElementById('status-text');
const bodyElement = document.body;

// Adicionando um evento de clique no botão
phaseButton.addEventListener('click', function() {
    // Alterna a classe que muda o fundo no CSS
    bodyElement.classList.toggle('phase-2-active');
    
    // Verifica se a classe da Fase 2 está ativa
    if (bodyElement.classList.contains('phase-2-active')) {
        statusText.innerText = "🔥 O Sangue do Lobo ferve! A espada queima em brasas...";
        statusText.style.color = "#ff4500";
        statusText.style.textShadow = "0 0 10px #ff4500";
        phaseButton.innerText = "Voltar à Fase 1";
    } else {
        statusText.innerText = "O Abismo aguarda...";
        statusText.style.color = "#c0c0c0";
        statusText.style.textShadow = "none";
        phaseButton.innerText = "Iniciar Fase 2";
    }
});
