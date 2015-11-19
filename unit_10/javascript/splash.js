var images = [
    'splash1.jpg',  
    'splash2.jpg', 
    'splash3.jpg'];
    
$('<img class="splash-imgs" src="../images/splash/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#splash');



//		the current file path for images is:  "../splashrotate/images/splash/splash1.jpg"
//		this will probably change in the future, so pay attention to line 6 in the js file

