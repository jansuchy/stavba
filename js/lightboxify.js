(function() {
    window.addEventListener("load", lightboxify, true);

    function lightboxify() {
        Array.prototype.map.call(document.images, lightboxifyImage);
    }

    function lightboxifyImage(image) {
        var link;

        if (!image.getAttribute("src")) {
            return;
        }

        link = document.createElement("a");
        link.setAttribute(
            "href",
            image.getAttribute("src").replace(/\.[^.]+$/, "_large$&")
        );
        link.setAttribute("data-lightbox", "allImages");
        image.parentNode.replaceChild(link, image);
        link.appendChild(image);
    }
})();
