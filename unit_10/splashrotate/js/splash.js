// copy and paste the code below into a separate file called "splash.js"

// in your version, change these to be relative file paths
var images = [
    '../images/splash1.jpg',  
    '../images/splash2.jpg', 
    '../images/splash3.jpg';
    
$('<img class="splash-imgs" src="../images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#splash');

// you'll need to adjust this script slightly to use relative file paths:
/*

$('<img class="splash-imgs" src="../images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#splash');

*/