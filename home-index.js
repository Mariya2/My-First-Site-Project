

/* home */
function inform(){
	document.getElementById('info').innerHTML = 
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat imperdiet, iaculis lorem in, auctor diam. Vivamus sagittis vulputate pretium. Suspendisse cursus ut turpis ac varius. Nulla et pharetra leo. Mauris efficitur ex vel ante ornare cursus vitae quis dui. Nunc mollis interdum sem sed gravida. Nulla et lectus congue, rutrum lorem eu, suscipit quam. Integer sollicitudin elementum finibus. Aenean dictum nisl vitae metus ultrices, non pulvinar odio pretium. Mauris congue, odio ut elementum iaculis, justo ex lobortis purus, nec maximus libero risus sed neque. Maecenas urna mauris, rutrum ut dui vel, sollicitudin mattis ligula. Donec nisi leo, dignissim et arcu ac, laoreet venenatis purus. Ut venenatis dui id iaculis dictum. Aliquam mauris quam, molestie sit amet arcu a, tincidunt tincidunt est. Nunc lacinia lorem sit amet facilisis dictum. Sed sit amet tortor porttitor nisi facilisis lacinia at a arcu. Fusce ac elementum urna. Pellentesque et gravida eros. Maecenas cursus cursus commodo. In hac habitasse platea dictumst. Donec egestas velit eget ligula auctor, eu pulvinar nunc vehicula. Nulla porttitor massa et elementum semper.'
}
/* end home */

/* focus */
function changeImage1(){
	var image = document.getElementById('img1');
if(image.src.match("bulbon")) {
        image.src = "portfolioPic/webbl.jpg";
    } else {
        image.src = "portfolioPic/web.jpg";
    }
}
function changeImage2(){
	var image = document.getElementById('img2');
if(image.src.match("bulbon")) {
       image.src = "portfolioPic/3D Kitchenbl.jpg";
    } else {
        image.src = "portfolioPic/3D Kitchen.jpg";
    }
}
function changeImage3(){
	var image = document.getElementById('img3');
if(image.src.match("bulbon")) {
        image.src = "portfolioPic/landscapebl.jpg";
    } else {
        image.src = "portfolioPic/landscape.jpg";
    }
}
/* end focus */



/* contacts */
function add(){
var d = new Date();
document.getElementById("date").innerHTML = 'Today is ' +d.toDateString();
}
/* /?????? */
/* Function mapBigger(){
	var map = document.getElementById('map')
	map.addEventListener('mouseover', function(){
	 map.style.height= '400px';
	});
	map.addEventListener('mouseout', function(){
	 map.style.height='300px';
	}); */
/* } */

/* ????? */
/* function day(){
	var day = get day from new Date();
	switch (day){
	case 'Monday':
	case 'Tuesday':
	case 'Wednesday':
	case 'Thursday':
	case 'Friday':
		console.log ('Today is a workday');
	break;
	case 'Saturday':
	case 'Sunday':
		console.log('Today is not a workday');
	break;
		}
	var date1 = document.getElementById("date1").innerHTML = 'Today is ' + day();
	date1.style.backgroundColor = 'purple';
} */

function seeBigger(){
var x = document.getElementById ("see-bigger");
x.attachEvent("")
x.addEventListener('mouseover', function(){
	x.style.fontSize="120%";
x.style.border = "2px solid grey";
x.style.padding = "5px";
	});
	x.addEventListener('mouseout', function(){
	x.style.fontSize="100%";
x.style.border = "0";
x.style.padding = "0";
	});
}

function ValidateForm() {

    var hasError = false;

    if (document.getElementById('lname').value == "") {
        document.getElementById('wronglname').style.display = "inline";
        hasError = true;
    } else {
        document.getElementById('wronglname').style.display = "none";   
    }
	
    if (document.getElementById('fname').value == "") {
        document.getElementById('wrongname').style.display = "inline";
        hasError = true;
    } else {
        document.getElementById('wrongname').style.display = "none";   
    }

    if (document.getElementById('email').value.search(/^[a-zA-Z]+([_\.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,4})+$/) == -1) {
        document.getElementById('wrongemail').style.display = "inline";
        hasError = true;
    } else {
        document.getElementById ('wrongemail').style.display = "none";   
    }
	
	if (document.getElementById ('tel-num').value.search (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) == -1) {
	document.getElementById('wrongtel').style.display = "inline";
        hasError = true;
    } else {
        document.getElementById('wrongtel').style.display = "none";
	}

	
    return !hasError;
}
/* end contacts */

/* paralax */


/* end paralax */