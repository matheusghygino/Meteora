const fecharModal = document.getElementById('modal-produtos-img-fechar');

fecharModal.addEventListener('click', () => {
    mudarModalProduto();
})

document.body.onclick = function (e) {
    if(~Array.from(e.target.classList).indexOf("btn-produtos")) {
        
        ativarModal();
    }
}

export function ativarModal() {
    mudarModalProduto()
    window.onclick = function(e) {
        const modal = document.querySelector('.modal-produtos');
        if (e.target == modal) {
            mudarModalProduto();
        }
    }
}
export const mudarModalProduto = () => {
    const modal = document.querySelector('.modal-produtos');
    const estiloAtual = modal.style.display;
    if(estiloAtual == 'block') {
        modal.style.display = 'none';
    }
    else {
        modal.style.display = 'block';
    }
}
