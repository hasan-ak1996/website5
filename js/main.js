


let landingPage = document.querySelector('.landing-page');

let gear = document.querySelector('.fa-gear');

let selectBox = document.querySelector('.setting-box');

let htmlRoot = document.documentElement;

let colorItems = document.querySelectorAll('.colors li');

let randomBackItems = document.querySelectorAll('.random-option span');

let randomYesBtn = document.querySelector('.yes');

let randomNoBtn=document.querySelector('.no');


let bulletsBox = document.querySelector('.bullets-box');
let sections  = document.querySelectorAll('.part');



sections.forEach(function(section){
	
	let bullet =  document.createElement('div');
	
	bullet.className = 'bullet';
	
	bullet.setAttribute('data-scroll','.' + section.classList[0]);
	
	bulletsBox.appendChild(bullet);
	
	let bulletPart = document.createElement('div');
	
	bullet.appendChild(bulletPart);
	
	bulletPart.className = 'bullet-part';

	bulletPart.appendChild(document.createTextNode(section.querySelector('h2').innerHTML));
	
});






function scrollToSection(Elements){
	
	Elements.forEach(function(Element){
	
		Element.addEventListener('click',function(e){
		
		e.preventDefault();
		
		let sectionClass = e.target.dataset.scroll;
		
			document.querySelector(sectionClass).scrollIntoView({
			
				behavior : "smooth"
			
			});
		
		});
	
	
	});
	
}


function handleActive(ev){
	
	
	ev.target.parentElement.querySelectorAll('.active').forEach(function(item){
		
		item.classList.remove('active');
		
	});
	
	
	ev.target.classList.add('active');
	
	
	
}


let bullets = document.querySelectorAll('.bullets-box .bullet');

scrollToSection(bullets);




bullets.forEach(function(bullet){
	
	bullet.addEventListener('mouseover',function(e){
		
		let billetPart = e.target.firstElementChild;
		
		billetPart.style.opacity = '1';
		
		
	});
	
	bullet.addEventListener('mouseout',function(e){
		
		let billetPart = e.target.firstElementChild;
		
		billetPart.style.opacity = '0';
		
	});
	
});






let links = document.querySelectorAll('.links li a');

links.forEach(function(Link){
		Link.addEventListener('click',function(e){
			
			e.target.parentNode.querySelectorAll('.active').forEach(function(item){
				
				item.classList.remove('active');
				
			});
			e.target.classList.add('active');
			//handleActive(e);
			
		});
	
	
});



scrollToSection(links);


let upBtn = document.querySelector('.up-btn');


let landingP = document.querySelector('.landing-page');


upBtn.addEventListener('click',function(e){
	landingP.scrollIntoView({
		behavior : "smooth"
		
	});
});





randomBackItems.forEach(function(span){
	
	span.addEventListener('click',function(e){
		handleActive(e);
		
	});

	
	
});



const mainColor = localStorage.getItem('option');

if( mainColor !== null ){
	
	htmlRoot.style.setProperty('--main-color',mainColor);
	
	colorItems.forEach(function(color){
		color.classList.remove('active');
		if( color.dataset.color ===  mainColor){
			
			color.classList.add('active');
		}
	});
	
}

colorItems.forEach(function(item){
	
	item.addEventListener('click', function(e){
		let color = e.target.dataset.color;
		htmlRoot.style.setProperty('--main-color',color);
		localStorage.setItem("option",color);
		
		handleActive(e);
	});
	
	
});

	
	


gear.addEventListener('click',function(e){
	e.target.classList.toggle('fa-spin');
	selectBox.classList.toggle('open');
});
document.addEventListener('click',function(e){
	
	if( e.target !== gear && e.target !== selectBox ){
		
		if(selectBox.classList.contains('open')){
			gear.classList.toggle('fa-spin');
			selectBox.classList.toggle('open');
			
		}
	}
	
});

selectBox.onclick = function(e){
	
	e.stopPropagation();
	
};




//var imgs = ["img1","img2","img3","img4","img5","img6"];
	
	var count = 0;
	
	var backgroundboolean = true ;
	
	var interval;
	
	
	
	
	
	randomYesBtn.onclick = function(){
	backgroundboolean = true;
	randomOn();
	localStorage.setItem("random-option",true);
	
};
	


randomNoBtn.onclick = function(){
		backgroundboolean = false;
		clearInterval(interval);
		localStorage.setItem("random-option",false);
	
};
	
	
	var randomLocalStroage = localStorage.getItem('random-option');
	
	
	if(randomLocalStroage !== null){
		
		
		if(randomLocalStroage === 'true'){
			backgroundboolean = true;
		}else{
			backgroundboolean = false;	
		}
		
		document.querySelectorAll('.random-option span').forEach(function(span){
			
			span.classList.remove('active');
			
		});
		
		if(randomLocalStroage === 'true'){
			randomYesBtn.classList.add('active');
		}else{
			randomNoBtn.classList.add('active');
		}
		
		
	}
	
	
	
	
	
	
function randomOn(){

	if(backgroundboolean === true){


		interval = setInterval(() => {
		//var randomNumber = Math.floor(Math.random() * imgs.length);
			
				
				count++;
				
				if( count > 6){
					count = 1;
				}
				
				landingPage.style.backgroundImage = 'url("images/img' +count+ '.jpg")';
				
				landingPage.style.transition = '3s';
				
		 }
	,10000);}
}

randomOn();

let bulletsOption = document.querySelectorAll('.bullets-option span');

let bulletStorage = localStorage.getItem("bullets_option");

if( bulletStorage !== null ){
	
	bulletsOption.forEach(span => {
		
		span.classList.remove('active');
		
		
	});
	
	
	if( bulletStorage === '5px'){
		
		bulletsBox.style.right = '5px';
		document.querySelector('.bullets-option .yes').classList.add('active');
	}else{
		bulletsBox.style.right = '-20px';
		document.querySelector('.bullets-option .no').classList.add('active');
		
	}
	
	
	
}


bulletsOption.forEach(option => {
	
	option.addEventListener('click',function(e){
		
		handleActive(e);
		
		if(e.target.dataset.show === 'show' ){
			
			bulletsBox.style.right = '5px';
			
		localStorage.setItem("bullets_option","5px");
			
		}else{
			
			bulletsBox.style.right = '-20px';
			
			localStorage.setItem("bullets_option","-20px");
		}
		
		
	});
	
	
	
	
} );

let resetBtn = document.querySelector('.setting-box .reset');

resetBtn.addEventListener('click',function(e){
	
	//localStorage.clear();
	localStorage.removeItem('option');
	localStorage.removeItem('random-option');
	localStorage.removeItem('bullets_option');
	window.location.reload();
	
});










let ourSkills = document.querySelector('.skills');

let skillsProgress = document.querySelectorAll('.skill-box .progress span');

let aboutUs = document.querySelector('.about-us');


window.onscroll = function(){
	
	let skillsOffsetTop = ourSkills.offsetTop;
	
	let skillsOuterHeight = ourSkills.offsetHeight;
	
	let windowInnerHight = this.innerHeight;

	if(this.pageYOffset > (skillsOffsetTop + skillsOuterHeight - windowInnerHight)){
		
		skillsProgress.forEach(function(span){
			
			span.style.width = span.dataset.prog;
			span.style.transition = '1s';
			
		});
	}else{
		
		skillsProgress.forEach(function(span){
			
			span.style.width = '0';
			span.style.transition = '1s';
	});}
	
	upBtn.style.opacity = '0';
	
	if( this.pageYOffset > (landingP.offsetHeight + landingP.offsetTop) ){

		upBtn.style.opacity = '1';
		
	}
	
	
};

let Images = document.querySelectorAll('.gallery .images img');

Images.forEach(function(img){
	
	img.addEventListener('click',function(e){
		
		let overlay = document.createElement('div');
		
		document.body.appendChild(overlay);
		
		overlay.className = 'img-overlay';
		
		let figure = document.createElement('div');
		
		figure.className = 'figure';
		
		document.body.appendChild(figure);
		if(img.alt !== null){
			
			let imageHeading = document.createElement('h3');
		
		
			imageHeading.appendChild(document.createTextNode(img.alt));
		
		
			figure.appendChild(imageHeading);
		}
		
		let closeButton = document.createElement('span');
		
		closeButton.appendChild(document.createTextNode('X'));
		
		closeButton.className = 'close-btn';
		
		figure.appendChild(closeButton);
		
		
		
		let imag = document.createElement('img');
		
		imag.src = e.target.src;
		figure.appendChild(imag);
	});
	
});

document.addEventListener('click',function(e){
	
	if(e.target.className === 'close-btn'){
		
		e.target.parentElement.remove();
		document.querySelector('.img-overlay').remove();
	}
	
});

let menuBtn = document.querySelector('.toggle-menu');

let tLinks = document.querySelector('.links');

menuBtn.addEventListener('click',function(e){

	menuBtn.classList.toggle('toggle-before');
	tLinks.classList.toggle('open');
	e.stopPropagation();
});

tLinks.onclick = function(e){
	e.stopPropagation();
};

document.addEventListener('click',function(e){
	if( e.target !== menuBtn && e.target !==  tLinks){
		
		if(tLinks.classList.contains('open')){
			
			menuBtn.classList.toggle('toggle-before');
			tLinks.classList.toggle('open');
			
		}
		
	}
	
	
});

