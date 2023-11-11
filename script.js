$(document).ready(function () {
    $(".switchable-image").click(function () {
        // Get the alt-pic attribute value
        var altPic = $(this).attr("alt-pic");

        // Change the source of the clicked image
        $(this).attr("src", altPic);
    });
});
