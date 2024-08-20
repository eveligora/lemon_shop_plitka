function updateBlocks() {
    document.querySelectorAll('.decor_aft, .decor_bef').forEach(block => {
        block.classList.remove('decor_aft', 'decor_bef');
    });

    const blocks = document.querySelectorAll('.top_sales__product_card.product_card');

    let topRightBlock = null;
    let topRightPosition = { top: Infinity, left: -Infinity };

    let bottomLeftBlock = null;
    let bottomLeftPosition = { bottom: -Infinity, left: Infinity };

    blocks.forEach(block => {
        const rect = block.getBoundingClientRect();

        if (rect.top < topRightPosition.top || 
            (rect.top === topRightPosition.top && rect.left > topRightPosition.left)) {
            topRightBlock = block;
            topRightPosition.top = rect.top;
            topRightPosition.left = rect.left;
        }

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

}

document.addEventListener("DOMContentLoaded", updateBlocks);
window.addEventListener('resize', updateBlocks);
