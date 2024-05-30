/*week14*/
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

$(document).ready(function () {
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
});