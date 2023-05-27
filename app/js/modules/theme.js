const initialState = themeName => {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

const toggleTheme = (lightTheme, darkTheme) => {
    if (localStorage.getItem('theme') === darkTheme) {
        initialState(lightTheme);
    } else {
        initialState(darkTheme);
    }
}

const changingTheme = (trigger, light, dark) => {
    const btn = document.querySelector(trigger);

    
    initialState(light);

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme(light, dark);
    });
}