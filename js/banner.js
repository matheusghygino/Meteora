function carousel() {
    const controls = document.querySelectorAll(".control");
    let currentItem = 0;
    const items = document.querySelectorAll(".item");
    const maxItems = items.length;

    controls.forEach(control => {
        control.addEventListener('click', () => {
            const isLeft = control.classList.contains('seta__esquerda');
            console.log('control clicked', isLeft);
    
            if (isLeft) {
                currentItem -= 1;
            } else {
                currentItem += 1;
            }
            if (currentItem >= maxItems) {
                currentItem = 0;
            }
            if (currentItem < 0) {
                currentItem = maxItems - 1;
            }
    
            items.forEach(item => {
                item.classList.remove('item__atual')
            })
    
            items[currentItem].scrollIntoView({
                inline: "center",
                behavior: "smooth"
            })
    
            items[currentItem].classList.add("item__atual");
        })
    })
}

export default carousel;