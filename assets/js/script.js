async function loadContent(url, targetId) {
    const response = await fetch(url);
    const content = await response.text();
    document.getElementById(targetId).innerHTML = content;
}

// Fonction principale pour initialiser la page
async function initializePage() {
    // Charger le header et le footer dynamiquement
    await loadContent("assets/includes/header.html", "header");
    await loadContent("assets/includes/footer.html", "footer");

    // Les éléments sont maintenant dans le DOM, on peut les manipuler
    const toggleMenuBtn = document.querySelector("#menu-btn");
    const toggledMenu = document.querySelector("#toggled-menu");

    toggleMenuBtn.addEventListener("click", toggleNav);

    const pageUrl = window.location.href;
    let p = pageUrl.split('/');
    const thisPage = ((p[p.length - 1]).split('.'))[0];

    const menuItems = toggledMenu.querySelectorAll("li");

    for (let item of menuItems) {
        console.log(item);
        if (item.classList.contains(thisPage)) {
            item.classList.add("underline");
            item.classList.add("underline-offset-4");
        }
    }
}

// Fonction pour gérer l'ouverture et la fermeture du menu
function toggleNav() {
    const toggledMenu = document.querySelector("#toggled-menu");
    const toggleMenuBtn = document.querySelector("#menu-btn");

    toggledMenu.classList.toggle("-translate-y-full");

    // Vérifie si le menu est ouvert ou fermé
    if (toggledMenu.classList.contains("-translate-y-full")) {
        // Menu fermé : affiche le bouton hamburger
        toggleMenuBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                </svg>`;
        toggleMenuBtn.setAttribute("aria-expanded", "false");
    } else {
        // Menu ouvert : affiche la croix
        toggleMenuBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>`;
        toggleMenuBtn.setAttribute("aria-expanded", "true");
    }
}

// Appeler la fonction principale pour initialiser la page
initializePage();