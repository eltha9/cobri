let nb = 0

Add = () => {
	let plus = document.querySelector('.plus')
	let number = document.querySelector('.number')
	let minus = document.querySelector('.minus')

	plus.addEventListener("click", ()=> {
		nb = nb + 1
		number.innerHTML = nb
		number.style.color = "#ffffff"
		number.style.fontSize = "20px"
		number.style.fontFamily = "Montserrat"
	})
	
	minus.addEventListener("click", ()=> {
		if(nb >= 1){
			nb = nb - 1
			number.innerHTML = nb
			number.style.color = "#ffffff"
			number.style.fontSize = "20px"
			number.style.fontFamily = "Montserrat"
		}
	})
}

Add()

SelectDelivery = () => {
	let deliveryRelay = document.querySelector('.relay')
	let deliveryHome = document.querySelector('.home')

	deliveryRelay.addEventListener("click", ()=> {
		deliveryRelay.classList.add("relaySelected")
		deliveryHome.classList.remove("relaySelected")
	})

	deliveryHome.addEventListener("click", ()=> {
		deliveryRelay.classList.remove("relaySelected")
		deliveryHome.classList.add("relaySelected")
	})
}

SelectDelivery()

ClickHeart =() => {
	let heart = document.querySelector(".heart svg")
	heart.addEventListener("click", ()=> {
		heart.classList.toggle("fill")
	})
}

ClickHeart()

ChangeImage = () => {
	// let mainImage = document.querySelector(".main-image .image")
	let imageFirst = document.querySelector(".view-image .first")
	let imageSecond = document.querySelector(".view-image .second")

	imageFirst.addEventListener("click", ()=> {
		document.getElementById("main-image").src = "src/img/deco_tiling_1.png";
	})

	imageSecond.addEventListener("click", ()=> {
		document.getElementById("main-image").src = "src/img/tiling.png";
	})
}

ChangeImage()