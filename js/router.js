
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/#": "/pages/home.html",
    "/#interested": "/pages/interested.html",
    "/#schedule": "/pages/schedule.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
