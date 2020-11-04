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
	let selected = false
	deliveryRelay.addEventListener("click", ()=> {
		deliveryRelay.classList.toggle("relaySelected")

	})
}

SelectDelivery()