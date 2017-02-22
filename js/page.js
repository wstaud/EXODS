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
        document.getElementById("sliderButton").style.left = "125px";
        document.getElementById("sliderButton").style.background = "#3700ff";
        document.getElementById("sliderButton").innerHTML = "Light";
        document.getElementsByTagName("h1")[2].style.color = "black";  //Tag grab
        isDark = false;
    }else {
        document.getElementById("background").style.background = "#131313";
        document.getElementsByClassName("examples")[0].style.background = "#4c4c4c";
        document.getElementById("sliderButton").style.left = "0px";
        document.getElementById("sliderButton").style.background = "#1c0084";
        document.getElementById("sliderButton").innerHTML = "Dark";
        document.getElementsByTagName("h1")[2].style.color = "#cac8c8";
        isDark = true;
    }
}


var mapOptions = {
            mapTypeId: 'satellite',
            // Set the zoom level
            zoom: 2,
            // This sets the center of the map at our location
            center: {
                lat:  29.426791,
                lng: -98.489602
            }
        };


var map = new google.maps.Map(document.getElementById("map"), mapOptions);


//-----------------TO DO-------------------------
//Change from inline HTML function click calls to Javasript listeners
