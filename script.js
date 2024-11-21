// Nope. This is a concept design, so no menu or filter toggles work. But it looks good, doesn't it?

document.querySelectorAll('.relative').forEach((dropdown) => {
    const button = dropdown.querySelector('button');
    const menu = dropdown.querySelector('div');

    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            menu.classList.add('hidden');
        }
    });
});
