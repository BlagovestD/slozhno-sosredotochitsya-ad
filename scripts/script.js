function changeTheme(theme) {
    document.body.className = 'page';

    if (theme !== 'auto') {
        document.body.classList.add(`theme_${theme}`);
    }

    localStorage.setItem('theme', theme);
}

function setActiveButton(buttonsArray, theme) {
    buttonsArray.forEach((button) => {
        button.classList.remove('header__theme-menu-button_active');
        button.removeAttribute('disabled');
    });

    const target = document.querySelector(
        `.header__theme-menu-button_type_${theme}`
    );

    if (target) {
        target.classList.add('header__theme-menu-button_active');
        target.setAttribute('disabled', true);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = [
        ...document.querySelectorAll('.header__theme-menu-button'),
    ];

    const savedTheme = localStorage.getItem('theme') || 'auto';

    changeTheme(savedTheme);
    setActiveButton(themeButtons, savedTheme);

    themeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const chosenTheme = [...button.classList]
                .find((className) => className.includes('_type_'))
                .split('_type_')[1];

            changeTheme(chosenTheme);
            setActiveButton(themeButtons, chosenTheme);
        });
    });
});