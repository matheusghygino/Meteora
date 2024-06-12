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

export function carregarProdutos () {
    fetch('/produtos.json')
        .then(response => response.json())
        .then(produtos => {
            const produtos_container = document.getElementById('produtos_container')
            produtos_container.classList.add("produtos", "container")
            produtos.map(produto => {
                const card = document.createElement("div");
                card.classList.add("produto");

                const card_img = document.createElement("img");
                card_img.src = produto.imagem;
                card_img.alt = produto.produto;

                const card_titulo = document.createElement("h3");
                card_titulo.textContent = produto.descricao

                const card_preco = document.createElement("span");
                card_preco.textContent = produto.preco;

                const card_btn = document.createElement("button");
                card_btn.classList.add("btn-produtos");
                card_btn.textContent = "Ver mais";

                card.appendChild(card_img);
                card.appendChild(card_titulo);
                card.appendChild(card_preco);
                card.appendChild(card_btn);
                produtos_container.appendChild(card)
            })
        })
}
