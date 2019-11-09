var array = new Array("css/screen_first.png", "css/screen_second.png", "css/screen_three.png", "css/screen_four.png");
delay = 3500;

function imgRotator(i){
	/*alert(document.documentElement.clientWidth);*/
	var img = document.getElementById("image_rotator");
	img.src = array[i];
	i++;
	if (i == array.length) i=0;
	setTimeout("imgRotator("+i+")", delay);
}
