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
        document.getElementById("background").style.background = "#f1efff";  //example of id grab
        document.getElementsByClassName("examples")[0].style.background = "#c4c4c4"; //example of class grab
        isDark = false;
    }else {
        document.getElementById("background").style.background = "#131313";
        document.getElementsByClassName("examples")[0].style.background = "#4c4c4c";
        isDark = true;
    }
}



