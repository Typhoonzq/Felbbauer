document.addEventListener('DOMContentLoaded', () => {
    const btnPrimary = document.querySelector('.btn-primary');
    btnPrimary.addEventListener('click', () => {
        const shopSection = document.querySelector('#shop');
        shopSection.scrollIntoView({ behavior: 'smooth' });
    });
});
