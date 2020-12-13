var prevScrollY = window.scrollY;
var topHeaderHeight = getComputedStyle(document.documentElement).getPropertyValue("--height-top-header");
var pageMargin = getComputedStyle(document.documentElement).getPropertyValue("--margin-page");

window.onscroll = function() {
    var currentScrollY = window.scrollY;

    // hide header if page is scrolled
    if ((currentScrollY > 0) && (prevScrollY === 0)) {

        document.getElementsByTagName("header")[0].style.transform = "translate(0, calc(-1 * " + topHeaderHeight + "))";
        document.getElementsByTagName("main")[0].style.transform = "translate(0, calc(-1 * " + topHeaderHeight + "))";
        document.getElementById("footer-bar").style.transform = "translate(0, calc(-1 * " + topHeaderHeight + "))";

    } else if ((currentScrollY === 0) && (prevScrollY > 0)) {

        document.getElementsByTagName("header")[0].style.transform = "translate(0, 0)";
        document.getElementsByTagName("main")[0].style.transform = "translate(0, 0)";
        document.getElementById("footer-bar").style.transform = "translate(0, 0)";

    }

    // scroll download button if on résumé page
    if (document.URL.includes("resume")) {
        document.getElementById("downlad").style.top = currentScrollY + "px";
        //document.documentElement.style.setProperty("--download-top", currentScrollY + "px");
    }

    prevScrollY = currentScrollY;
}