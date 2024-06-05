const newsForm = document.getElementById('news-form');
const newsInput = document.getElementById('news-input');
const fecharModal = document.getElementById('modal-news-img-fechar')

fecharModal.addEventListener('click', () => {
    mudarModal();
})

export const enviarNews = newsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newsInput.value = '';
    mudarModal();
    window.onclick = function(e) {
        const modal = document.querySelector('.modal');
        if (e.target == modal) {
            mudarModal();
        }
    }
});

export const mudarModal = () => {
    const modal = document.querySelector('.modal');
    const estiloAtual = modal.style.display;
    if(estiloAtual == 'block') {
        modal.style.display = 'none';
    }
    else {
        modal.style.display = 'block';
    }
}

