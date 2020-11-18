<template>
	<main>
		<div class="container">
			<div class="block-image">
				<div class="main-image">
					<div class="image">
						<img id="main-image" :src="SwitchImage()" alt="carreau de carrelage la petite sirène">
					</div>
				</div>
				<div class="view-image">
					<div class="image first" @click="ClickImageOne">
						<img src="../../public/img/deco_tiling_1.png" alt="carreau de carrelage la petite sirène">
					</div>
					<div class="image second" @click="ClickImageTwo">
						<img src="../../public/img/tiling.png" alt="carreau de carrelage la petite sirène">
					</div>
				</div>
			</div>
			<div class="block-content">
				<div class="text-details">
					<div class="new">
						<p>Nouveauté</p>
					</div>
					<div class="heart" @click="Heart">
						<svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg" :class="[HSelected ? 'fill' : null]">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M26.05 3.76252C24.7606 2.47251 23.0114 1.74774 21.1875 1.74774C19.3636 1.74774 17.6144 2.47251 16.325 3.76252L15 5.08752L13.675 3.76252C10.9895 1.07704 6.63548 1.07704 3.95 3.76252C1.26451 6.44801 1.26451 10.802 3.95 13.4875L5.275 14.8125L15 24.5375L24.725 14.8125L26.05 13.4875C27.34 12.1981 28.0648 10.4489 28.0648 8.62502C28.0648 6.8011 27.34 5.05193 26.05 3.76252Z" stroke="#A4797E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>										
					</div>
					<p class="ref">ref. 6688044</p>
				</div>
				<h2>Carreau de carrelage motif petite sirène</h2>
				<div class="opinion">
					<div class="stars">
						<img src="../../public/img/color-stars.png" alt="étoiles de notation">
						<img src="../../public/img/color-stars.png" alt="étoiles de notation">
						<img src="../../public/img/color-stars.png" alt="étoiles de notation">
						<img src="../../public/img/color-stars.png" alt="étoiles de notation">
						<img src="../../public/img/grey-stars.png" alt="étoiles de notation">
					</div>
					<a href="#">Donnez votre avis</a>
				</div>
				<h3>Beaux carreaux de carrelage avec motif la petite sirène. Idéal pour vos décorations de salle de bain d'enfants en bas âges.</h3>
				<p class="price-carton">23.94 € / carton</p>
				<p class="price-meter">19.95 € / M²</p>
				<div class="buy">
					<div class="add">
						<div class="add-block minus" @click="Minus">
							<img src="../../public/img/minus.png" alt="">
						</div>
						<div class="add-block number">
							<p>{{this.nb}}</p>
						</div>
						<div class="add-block plus" @click="Add">
							<img src="../../public/img/plus.png" alt="">
						</div>
					</div>
					<div class="basket">
						<img src="../../public/img/shopping-cart.png" alt="">
						<p>Ajouter au panier</p>
					</div>
				</div>
				<div class="delivery-block">
					<div class="delivery relay" :class="[RSelected ? 'relaySelected' : null]" @click="DeliveryRelay">
						<p>Livraison en point relais</p>
						<p>GRATUIT</p>
					</div>
					<div class="delivery home" :class="[DSelected ? 'relaySelected' : null]" @click="DeliveryHome">
						<p>Livraison à domicile</p>
						<p>GRATUIT</p>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
  export default {
    name: 'Main',
    data() {
      return {
		nb: 0,
		RSelected: false,
		DSelected: false,
		HSelected: false,
		image: "first",
      }
	},
	methods:{
		Add: function(){
			this.nb = this.nb + 1
		},
		Minus: function() {
			if(this.nb >= 1){
				this.nb = this.nb - 1
			}
		},
		DeliveryRelay: function() {
			this.RSelected = true,
			this.DSelected = false
		},
		DeliveryHome: function() {
			this.RSelected = false,
			this.DSelected = true
		},
		Heart: function(){
			this.HSelected =! this.HSelected
		},
		SwitchImage: function(){
			if(this.image === "first")
				return require("../../public/img/deco_tiling_1.png")
			else if(this.image === "second")
				return require("../../public/img/tiling.png")
		},
		ClickImageOne: function(){
			this.image = "first"
		},
		ClickImageTwo: function(){
			this.image = "second"
		}
	}
  }
</script>

<style lang="scss">
.container{
	display: flex;
	width: 100%;
	height: auto;
	background-color: rgba(236, 234, 234,0.2);

	.block-image{
		display: flex;
		flex-direction: column;
		width: auto;

		.main-image{
			display: flex;
			padding-top: 153px;
			padding-left: 246px;
			padding-right: 20px;
			box-sizing: border-box;

			.image{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 380px;
				height: 380px;

				img{
					width: 100%;
					height: auto;
					border-radius: 5px;
				}
			}
		}

		.view-image{
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 54px;
			padding-left: 220px;
			box-sizing: border-box;
			width: 483px;

			.image{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 94px;
				height: 94px;
				cursor: pointer;

				img{
					width: 100%;
					height: auto;
					border-radius: 5px;
				}
			}
		}
	}

	.block-content{
		display: flex;
		flex-direction: column;
		width: auto;
		padding-left: 82px;
		box-sizing: border-box;
		padding-top: 67px;
		
		.text-details{
			display: flex;
			align-items: flex-end;
			width: 100%;

			.new{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 169px;
				height: 46px;
				background-color: #B9BCD3;
				border-radius: 5px;
				margin-right: 23px;
				
				p{
					color: #ffffff;
					font-size: 25px;
					font-family: "Montserrat";
				}
			}

			.heart{
				width: 30px;
				height: 30px;
				cursor: pointer;

				.fill{
					fill: #A4797E;
					stroke: none;
				}
			}

			.ref{
				color: #000000;
				font-family: "Montserrat";
				font-size: 18px;
				margin: 0;
				margin-left: 213px;
			}
		}

		h2{
			width: 431px;
			color: #C7AEB1;
			font-family: "Montserrat";
			font-size: 30px;
			font-weight: bold;
			margin: 0;
			margin-top: 40px;
		}

		.opinion{
			display: flex;
			align-items: flex-end;
			margin-top: 27px;

			.stars{
				width: 190px;
				height: 21px;
				display: flex;
				justify-content: space-between;
				// background-color: grey;
			}

			a{
				color: #000000;
				font-family: "Montserrat";
				font-size: 14px;
				text-decoration: underline;
				margin: 0;
				margin-left: 28px;
			}

		}

		h3{
			margin: 0;
			color: #000000;
			font-family: "Montserrat";
			font-size: 16px;
			margin-top: 32px;
			font-weight: normal;
			width: 439px;
		}

		.price-carton{
			margin: 0;
			margin-top: 46px;
			font-size: 30px;
			color: #000000;
			font-family: "Montserrat";
			font-weight: bold;
			width: 168px;
		}

		.price-meter{
			margin: 0;
			margin-top: 20px;
			font-size: 15px;
			color: #000000;
			font-family: "Montserrat";
		}

		.buy{
			margin-top: 66px;
			display: flex;

			.add{
				display: flex;
				justify-content: space-between;
				width: 171px;

				.add-block{
					display: flex;
					justify-content: center;
					align-items: center;
					width: 46px;
					height: 46px;
					background-color: #C1C4D8;
					border-radius: 5px;
					cursor: pointer;

					p{
						font-size: 20px;
						color: #ffffff;
						font-family: "Montserrat";
					}
				}

			}

			.basket{
				display: flex;
				align-items: center;
				width: 205px;
				height: 46px;
				background-color: #C1C4D8;
				border-radius: 5px;
				margin-left: 43px;

				img{
					margin-left: 14px;
				}

				p{
					font-size: 15px;
					color: #ffffff;
					font-family: "Montserrat";
					margin-left: 18px;
				}
			}
		}

	}

	.delivery-block{
		margin-top: 55px;
		padding-bottom: 50px;

		.delivery{
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 424px;
			height: 63px;
			border: 1px solid #A4797E;
			border-radius: 5px;
			margin-bottom: 9px;
			padding: 0 23px;
			cursor: pointer;

			&.relaySelected{
				background-color: #A4797E;

				p{
					color: #ffffff;
					font-family: "Montserrat";
					font-size: 14px;
				}
			}

			p{
				color: #000000;
				font-family: "Montserrat";
				font-size: 14px;
			}
		}

	}
}

.footer{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background-color: #ffffff;
	padding: 30px 162px;
	box-sizing: border-box;

	h1{
		margin: 0;
		padding: 0;
		color: #A4797E;
		font-family: "Montserrat";
		font-size: 24px;
	}

	p{
		margin: 0;
		color: #000000;
		font-family: "Montserrat";
		font-size: 16px;
		width: 300px;
		text-align: center;
	}

	small{
		margin: 0;
		color: #000000;
		font-family: "Montserrat";
		font-size: 12px;
		text-align: center;
	}
}

</style>