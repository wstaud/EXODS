var isOpen = true;

// Function changes values in CSS (Of nav bar and Icon) on click of HTML items, specifically three bar icon I threw in.
function openNav() {
	if (isOpen) {
		document.getElementById("exifSidenav").style.width = "350px";
		document.getElementById("slidingButton").style.left = "360px";
		isOpen = false;
	}else {
		document.getElementById("exifSidenav").style.width = "0";
		document.getElementById("slidingButton").style.left = "10px";
		isOpen = true;
	}
    
}

