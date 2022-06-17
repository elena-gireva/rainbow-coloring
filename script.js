const orange = document.querySelector(".orange");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const indigo = document.querySelector(".indigo");
const violet = document.querySelector(".violet");
const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const btnThree = document.querySelector("#btnThree");
const text = document.querySelector("h2");
const container = document.querySelector(".container");

btnOne.addEventListener("click", tryAgain);
btnTwo.addEventListener("click", thinkAgain);
btnThree.addEventListener("click", chooseOrange);


function tryAgain(){
    text.innerHTML = "Try again;)) 🙄 What's the next color?"
}
function thinkAgain(){
    text.innerHTML = "Try one more time))🧐 What's the next color?"
}
function tryMore(){
    text.innerHTML = "Try again)) 🙄 What colors will we mix to get the next color?"
}
function thinkMore(){
    text.innerHTML = "Try one more time))🧐 What colors will we mix to get the next color?"
}
function thinkBetter(){
    text.innerHTML = "Try one more time))🙄"
}
function tryBetter(){
    text.innerHTML = "Try, you can do it:))🙄"
}

function chooseOrange(){
    text.innerHTML = "Super! 😊 What's the next color?"
    orange.setAttribute("id","orange");
    btnOne.style = "background-color:green";
    btnTwo.style = "background-color:yellow";
    btnThree.style = "background-color:blue";
    btnOne.innerHTML = "green";
    btnTwo.innerHTML = "yellow";
    btnThree.innerHTML = "blue";
    btnOne.addEventListener("click", thinkAgain);
    btnTwo.addEventListener("click", chooseYellow);
    btnThree.addEventListener("click", tryAgain);
}
function chooseYellow(){
    text.innerHTML = "OK! 😊 What colors will we mix to get the next color?"
    yellow.setAttribute("id","yellow");
    btnThree.style = "background:linear-gradient(to right, yellow, blue)";
    btnTwo.style = "background:linear-gradient(to right, green, red)";
    btnOne.style = "background:linear-gradient(to right, blue, pink)";

    btnThree.innerHTML = "yellow and blue";
    btnTwo.innerHTML = "green and red";
    btnOne.innerHTML = "blue and pink";
    btnThree.addEventListener("click", chooseGreen);
    btnTwo.addEventListener("click", tryMore);
    btnOne.addEventListener("click", thinkMore);
}

function chooseGreen(){
    text.innerHTML = "Great! 😊 What's the next color?"
    green.setAttribute("id","green");
    btnOne.style = "background-color:pink";
    btnTwo.style = "background-color:blue";
    btnThree.style = "background-color:brown";

    btnThree.innerHTML = "brown";
    btnOne.innerHTML = "pink";
    btnTwo.innerHTML = "blue";
    btnOne.addEventListener("click", thinkBetter);
    btnTwo.addEventListener("click", chooseBlue);
    btnThree.addEventListener("click", thinkAgain);
}
function chooseBlue(){
    text.innerHTML = "WOW Super! 😊 What's the next color?"
    blue.setAttribute("id","blue");
    btnOne.style = "background-color:yellow";
    btnTwo.style = "background-color:red";
    btnThree.style = "background-color:indigo";

    btnOne.innerHTML = "yellow";
    btnTwo.innerHTML = "red";
    btnThree.innerHTML = "indigo";
    btnOne.addEventListener("click", thinkAgain);
    btnTwo.addEventListener("click", tryAgain);
    btnThree.addEventListener("click", chooseIndigo);
}
function chooseIndigo(){
    text.innerHTML = "WOW Super! 😊 What's the next color?"
    indigo.setAttribute("id","indigo");
    btnOne.style = "background-color:green";
    btnTwo.style = "background-color:violet";
    btnThree.style = "background-color:orange";

    btnOne.innerHTML = "green";
    btnTwo.innerHTML = "violet";
    btnThree.innerHTML = "orange";
    btnOne.addEventListener("click", tryAgain);
    btnTwo.addEventListener("click", chooseViolet);
    btnThree.addEventListener("click", thinkBetter);
}

function chooseViolet(){
    
    gsap.to ("h2", {
        text:"Yesss! 🥇 You're the WINNER!!!",
        duration: 3,
        ease: "power4.out",
    })
    violet.setAttribute("id","violet");
    btnOne.style = "display:none";
    btnTwo.style = "display:none";
    btnThree.style = "display:none";
    


    // салют
$(function() {
	let canvas = $('#canvas')[0];
	canvas.width = $(window).width();
	canvas.height = $(window).height();
	let ctx = canvas.getContext('2d');
	
	// resize
	$(window).on('resize', function() {
		canvas.width = $(window).width();
		canvas.height = $(window).height();
		ctx.fillStyle = '#000';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	});

	// init
	ctx.fillStyle = '#000';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	// objects
	let listFire = [];
	let listFirework = [];
	let fireNumber = 10;
	let center = { x: canvas.width / 2, y: canvas.height / 2 };
	let range = 100;
	for (let i = 0; i < fireNumber; i++) {
		let fire = {
			x: Math.random() * range / 2 - range / 4 + center.x,
			y: Math.random() * range * 2 + canvas.height,
			size: Math.random() + 0.5,
			fill: '#fd1',
			vx: Math.random() - 0.5,
			vy: -(Math.random() + 4),
			ax: Math.random() * 0.02 - 0.01,
			far: Math.random() * range + (center.y - range)
		};
		fire.base = {
			x: fire.x,
			y: fire.y,
			vx: fire.vx
		};
		//
		listFire.push(fire);
	}

	function randColor() {
		let r = Math.floor(Math.random() * 256);
		let g = Math.floor(Math.random() * 256);
		let b = Math.floor(Math.random() * 256);
		let color = 'rgb($r, $g, $b)';
		color = color.replace('$r', r);
		color = color.replace('$g', g);
		color = color.replace('$b', b);
		return color;
	}

	(function loop() {
		requestAnimationFrame(loop);
		update();
		draw();
	})();

	function update() {
		for (let i = 0; i < listFire.length; i++) {
			let fire = listFire[i];
			//
			if (fire.y <= fire.far) {
				// case add firework
				let color = randColor();
				for (let i = 0; i < fireNumber * 5; i++) {
					let firework = {
						x: fire.x,
						y: fire.y,
						size: Math.random() + 1.5,
						fill: color,
						vx: Math.random() * 5 - 2.5,
						vy: Math.random() * -5 + 1.5,
						ay: 0.05,
						alpha: 1,
						life: Math.round(Math.random() * range / 2) + range / 2
					};
					firework.base = {
						life: firework.life,
						size: firework.size
					};
					listFirework.push(firework);
				}
				// reset
				fire.y = fire.base.y;
				fire.x = fire.base.x;
				fire.vx = fire.base.vx;
				fire.ax = Math.random() * 0.02 - 0.01;
			}
			//
			fire.x += fire.vx;
			fire.y += fire.vy;
			fire.vx += fire.ax;
		}

		for (let i = listFirework.length - 1; i >= 0; i--) {
			let firework = listFirework[i];
			if (firework) {
				firework.x += firework.vx;
				firework.y += firework.vy;
				firework.vy += firework.ay;
				firework.alpha = firework.life / firework.base.life;
				firework.size = firework.alpha * firework.base.size;
				firework.alpha = firework.alpha > 0.6 ? 1 : firework.alpha;
				//
				firework.life--;
				if (firework.life <= 0) {
					listFirework.splice(i, 1);
				}
			}
		}
	}

	function draw() {
		// clear
		ctx.globalCompositeOperation = 'source-over';
		ctx.globalAlpha = 0.18;
		ctx.fillStyle = '#000';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// re-draw
		ctx.globalCompositeOperation = 'screen';
		ctx.globalAlpha = 1;
		for (let i = 0; i < listFire.length; i++) {
			let fire = listFire[i];
			ctx.beginPath();
			ctx.arc(fire.x, fire.y, fire.size, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fillStyle = fire.fill;
			ctx.fill();
		}

		for (let i = 0; i < listFirework.length; i++) {
			let firework = listFirework[i];
			ctx.globalAlpha = firework.alpha;
			ctx.beginPath();
			ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fillStyle = firework.fill;
			ctx.fill();
		}
	    }
    })
}

gsap.to ("h2", {
    text:"What's the next color?",
    duration: 2,
    repeatDelay: 5,
    ease: "power2.out",
    yoyo: true,
    delay:1
})

