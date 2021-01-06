
document.addEventListener("click", (e) => {
    if (!e.target.matches('.modal-close')) return;
    e.preventDefault();

    const is_open = document.querySelector('.is-open');

    if (is_open) {
        is_open.classList.remove('is-open');
    }
})