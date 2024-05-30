const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/pages/404.html",
    "/": "/pages/index.html",
    "/inter": "/pages/inter.html",
    "/sch": "/pages/sch.html",
};

const loadgallery = () => {
    alert('Loading Gallery');
    var width = $('[data-role="slider"]').attr('data-width');
    var height = $('[data-role="slider"]').attr('data-height');
    var count = $('[data-role="slider"] div.item').length;
    $('[data-role="slider"]').css({
        position: 'relative', overflow: 'hidden', width: width, height: height
    })
        .find('.container_slide').css({
            position: 'absolute', width: count * width, overflow: 'hidden'
        })
        .find('.item').css({
            width: width, height: height, float: 'left'
        })

    var currentPage = 0;
    var changePage = function () {
        $('[data-role="slider"] > .container_slide').animate({ left: -currentPage * width }
            , 500);
    };

    $('#left-button').click(function () {
        if (currentPage > 0) { currentPage--; changePage(); }
    });
    $('#right-button').click(function () {
        if (currentPage < count - 1) { currentPage++; changePage(); }
    });
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
    loadgallery();
};



window.onpopstate = handleLocation;
window.route = route;

handleLocation();
