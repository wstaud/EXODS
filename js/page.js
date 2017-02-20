"use strict";

var isOpen = true;

// Function changes values in CSS (Of nav bar and Icon) on click of HTML items, specifically three bar icon I threw in.
function openNav() {
    if (isOpen) {
        document.getElementById("exifSidenav").style.width = "300px";
        document.getElementById("slidingButton").style.left = "310px";
        isOpen = false;
    }else {
        document.getElementById("exifSidenav").style.width = "0";
        document.getElementById("slidingButton").style.left = "10px";
        isOpen = true;
    }
}


var isDark = true;

function themeSwitch() {
    if (isDark) {
        document.getElementById("background").style.background = "#e8e5e5";
        isDark = false;
    }else {
        document.getElementById("background").style.background = "#131313";
        isDark = true;
    }
}



