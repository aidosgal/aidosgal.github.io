async function loadPage(page) {
    const app = document.getElementById("app");

    try {
        const module = await import(`./pages${page}.js`); // Adjust path
        app.innerHTML = module.default();
    } catch (error) {
        app.innerHTML = "<h1>404 - Page Not Found</h1>";
    }
}

function navigateTo(route) {
    location.hash = route;
    loadPage(route);
}

window.addEventListener("hashchange", () => {
    loadPage(location.hash.replace("#", "") || "/home");
});

window.addEventListener("popstate", () => {
    loadPage(location.pathname);
});

document.addEventListener("DOMContentLoaded", () => {
    loadPage(location.pathname || "/home");
});

