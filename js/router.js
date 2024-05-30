const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    const targetPath = event.target.getAttribute('href');
    window.history.pushState({}, "", targetPath);
    handleLocation();
};

const routes = {
    "/": "/pages/home.html",
    "/interested": "/pages/interested.html",
    "/schedule": "/pages/schedule.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path];
    if (route) {
        const html = await fetch(route).then((data) => data.text());
        document.getElementById("main-page").innerHTML = html;
    }else{
        document.getElementById("main-page").innerHTML = "<h2>404 - Page Not Found</h2>";
    }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
