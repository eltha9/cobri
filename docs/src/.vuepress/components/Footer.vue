<template>
    <footer>
		<div class="footer">
			<h1>Cobri.</h1>
			<p>Spécialiste des produits de bricolage pour particuliers</p>
			<small>Code & design by Théa Dos Santos et Carla Compan</small>
		</div>
	</footer>
</template>

<style lang="scss">
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

	@media screen and (max-width: 430px){
		.footer{
			padding: 0 20px;
			padding-bottom: 20px;
			margin-top: 50px;
			flex-direction: column;

			p{
				margin-top: 10px;
				font-size: 12px;
			}

			small{
				margin-top: 10px;
				font-size: 12px;
			}
		}
	}
</style>