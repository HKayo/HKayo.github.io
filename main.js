$(document).ready(fuction() {

    var page_url = window.location.href;
    var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
        if (page_id == "honoo") {
            $("html, body").animate({
                scrollTop: $(page_id).offset().top
            }, 1000);
        }
                  
});
