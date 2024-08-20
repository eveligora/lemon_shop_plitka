function updateBlocks() {
    // Сброс классов перед новым расчетом
    document.querySelectorAll('.decor_aft, .decor_bef').forEach(block => {
        block.classList.remove('decor_aft', 'decor_bef');
    });

    const blocks = document.querySelectorAll('.top_sales__product_card.product_card');
    const parentElement = blocks[0]?.parentElement; // Получаем родительский элемент

    let topRightBlock = null;
    let topRightPosition = { top: Infinity, left: -Infinity };

    let bottomLeftBlock = null;
    let bottomLeftPosition = { bottom: -Infinity, left: Infinity };

    blocks.forEach(block => {
        const rect = block.getBoundingClientRect();

        // Ищем блок с минимальным top и максимальным left (правый верхний угол)
        if (rect.top < topRightPosition.top || 
            (rect.top === topRightPosition.top && rect.left > topRightPosition.left)) {
            topRightBlock = block;
            topRightPosition.top = rect.top;
            topRightPosition.left = rect.left;
        }

        // Ищем блок с максимальным bottom и минимальным left (нижний левый угол)
        if (rect.bottom > bottomLeftPosition.bottom || 
            (rect.bottom === bottomLeftPosition.bottom && rect.left < bottomLeftPosition.left)) {
            bottomLeftBlock = block;
            bottomLeftPosition.bottom = rect.bottom;
            bottomLeftPosition.left = rect.left;
        }
    });

    if (topRightBlock) {
        topRightBlock.classList.add('decor_aft');
    }

    if (bottomLeftBlock) {
        bottomLeftBlock.classList.add('decor_bef');
    }

    // Проверяем количество карточек и применяем стиль к родительскому элементу
    if (blocks.length > 4 && parentElement) {
        parentElement.style.justifyContent = 'flex-start';
    } else if (parentElement) {
        parentElement.style.justifyContent = 'center'; // Центрируем, если карточек 4 или меньше
    }
}

document.addEventListener("DOMContentLoaded", updateBlocks);
window.addEventListener('resize', updateBlocks);
