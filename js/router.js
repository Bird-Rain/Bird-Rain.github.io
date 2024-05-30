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
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
