var prevScrollY = window.scrollY;

window.onscroll = function() {
    var currentScrollY = window.scrollY;
    if ((currentScrollY > 0) && (prevScrollY === 0)) {
        //var stickyHeaderHeight = getComputedStyle(document.documentElement).getPropertyValue("--height-sticky-header");
        //var bottomFooterHeight = getComputedStyle(document.documentElement).getPropertyValue("--height-top-header");
        //document.getElementById("top-header").style.height = 0;
        //document.getElementById("main-container").style.paddingTop = stickyHeaderHeight;
        //document.getElementById("bottom-footer").style.height = bottomFooterHeight;

        var topHeaderHeight = getComputedStyle(document.documentElement).getPropertyValue("--height-top-header");
        document.getElementsByTagName("header")[0].style.transform = "translate(0, calc(-1 * " + topHeaderHeight + "))";
        document.getElementsByTagName("main")[0].style.transform = "translate(0, calc(-1 * " + topHeaderHeight + "))";
        document.getElementById("footer").style.transform = "translate(0, calc(-1 * " + topHeaderHeight + "))";
    } else if ((currentScrollY === 0) && (prevScrollY > 0)) {
        //var topHeaderHeight = getComputedStyle(document.documentElement).getPropertyValue("--height-top-header");
        //var totalHeaderHeight = getComputedStyle(document.documentElement).getPropertyValue("--height-total-header");
        //document.getElementById("top-header").style.height = topHeaderHeight;
        //document.getElementById("main-container").style.paddingTop = totalHeaderHeight;
        //document.getElementById("bottom-footer").style.height = 0;

        document.getElementsByTagName("header")[0].style.transform = "translate(0, 0)";
        document.getElementsByTagName("main")[0].style.transform = "translate(0, 0)";
        document.getElementById("footer").style.transform = "translate(0, 0)";
    }
    prevScrollY = currentScrollY;
}