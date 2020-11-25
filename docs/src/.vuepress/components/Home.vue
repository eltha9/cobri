<template>
    <div>
        <div class="container">
			<div class="main-image">
				<img :src="$withBase('/img/cobri_cover.jpg')" alt="Image de couverture page accueil cobri">
			</div>
			<div class="content">
				<h1>Bienvenu chez Cobri</h1>
				<h3>Leader européen des produits de bricolage et spécialiste dans la vente de carreaux de carrelage.</h3>
				<div class="description">
					<div class="description-text">
						<h4>Retrouvez notre dernières nouveautée :</h4>
						<p>Dans la tendance actuelle, nous avons reçu un nouveau carrelage au motif sirène pour décorer vos salle de bain.</p>
						<p>De couleur gris foncé, ce carrelage se fond idéalement dans une décoration moderne, tout en faisant plaisir aux plus jeunes.</p>
						<div class="more">
							<a href="./products/carreau-carrelage-petite-sirene">En savoir plus</a>
							<div class="ligne"></div>
						</div>
					</div>
					<div class="description-image">
						<div class="image-1">
							<img :src="$withBase('/img/tiling.png')" alt="Image carreau de carralage motif petite sirène">
						</div>
						<div class="image-2">
							<img :src="$withBase('/img/deco_tiling_1.png')" alt="Décoration salle de bain avec carreau de carralage petite sirène">
						</div>
					</div>
				</div>
			</div>
			<!-- START tutoriel part -->
			<div class="tuto">	
				<h2>Nos tutoriels</h2>
				<p>Cobri. ne fait pas que vous vendre ses carreaux de carralage, mais vous montre à travers une série de tutoriels DIY comment le poser</p>
				<div class="more">
					<a href="./comment-poser-carreau-carrelage-petite-sirene">En savoir plus</a>
					<div class="ligne"></div>
				</div>
			</div>
			<!-- END tutoriel part -->
			<div class="services" id="services">
				<h2>Nos services</h2>
				<p>Cobri vous propose différents services :</p>
				<div class="services-description">
					<div class="services-description-block">
						<div class="services-description-block-img">
							<img :src="$withBase('/img/aide.jpg')" alt="Image description service">
						</div>
						<p>Conseil</p>
					</div>
					<div class="services-description-block">
						<div class="services-description-block-img">
							<img :src="$withBase('/img/devis.jpg')" alt="Image description devis">
						</div>
						<p>Devis</p>
					</div>
					<div class="services-description-block">
						<div class="services-description-block-img">
							<img :src="$withBase('/img/pose.jpg')" alt="Image description pose">
						</div>
						<p>Pose par un professionnel</p>
					</div>
				</div>
			</div>
			<div class="bio" id="bio">
				<h2>Qui sommes-nous ?</h2>
				<p>Entreprise spécialiste dans la vente de produits de bricolage</p>
				<p>Pour toute question ou renseignement : 00.00.00.00.00</p>
				<small>Ce site est un projet fictif</small>
			</div>
		</div>
    </div>
</template>

<style lang="scss" scoped>
body{
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100%;
	background-color: #ffffff;
	.container{
		background-color: rgba(236,234,234,0.2);
		width: 100%;

		.main-image{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			background-color: grey;
			height: 465px;
			overflow: hidden;

			img{
				width: 100%;
				height: auto;
			}
		}

		.content{
			padding: 0px 162px;

			h2{
				margin: 0;
				color: #C7AEB1;
				margin-top: 60px;
				font-size: 30px;
				font-weight: bold;
			}

			h3{
				margin: 0;
				color: #000000;
				margin-top: 60px;
				font-size: 30px;
				font-weight: normal;
				width: 598px;
			}

			.description,.tuto{
				margin-top: 50px;
				width: 100%;
				display: flex;

				.description-text{
					margin: 0;
					width: 50%;
					// background-color: cadetblue;

					h4{
						margin: 0;
						color: #000000;
						margin-top: 60px;
						font-size: 25px;
	
						font-weight: bolder;
						width: 598px;
					}

					p{
						font-size: 22px;
						width: 579px;
					}

					.more{
						margin-top: 140px;
						display: flex;
						align-items: center;

						a{
							font-size: 22px;
							color: #6B719E;
							text-decoration: none;
						}

						.ligne{
							width: 67px;
							height: 2px;
							background-color: #6B719E;
							margin-left: 20px;
						}
					}
				}

				.description-image{
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 50%;

					.image-1{
						display: flex;
						width: 411px;
						height: 100%;
						justify-content: flex-end;

						img{
							width: 60%;
							height: auto;
							border-radius: 5px;
						}
					}
					.image-2{
						margin-top: -40px;
						width: 411px;
						height: 258px;

						img{
							width: 60%;
							height: auto;
							border-radius: 5px;
						}
					}
				}
			}
		}

		.services{
			padding: 0px 162px;

			h2{
				margin: 0;
				color: #C7AEB1;
				margin-top: 60px;
				font-size: 30px;
				font-weight: bold;
			}

			p{
				font-size: 20px;
			}

			.services-description{
				margin-top: 60px;
				display: flex;
				justify-content: space-between;
				width: 100%;

				.services-description-block{
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;

					.services-description-block-img{
						width: 258px;
						height: 258px;
						// background-color: chocolate;
						border-radius: 5px;
						overflow: hidden;

						img{
							width: 200%;
							height: auto;
						}

					}

				}
			}

		}

		.bio{
			padding: 0px 162px 60px 152px;
			padding-bottom: 60px;

			h2{
				color: #C7AEB1;
				margin-top: 80px;
				font-size: 30px;
				font-weight: bold;
			}

			p{
				font-size: 20px;
			}
		}

		.tuto{
			padding: 0px 162px;

			h2{
				margin: 0;
				color: #C7AEB1;
				margin-top: 60px;
				font-size: 30px;
				font-weight: bold;
			}

			p{
				font-size: 20px;
			}
			.more{
						margin-top: 40px;
						display: flex;
						align-items: center;

						a{
							font-size: 22px;
							color: #6B719E;
							text-decoration: none;
						}

						.ligne{
							width: 67px;
							height: 2px;
							background-color: #6B719E;
							margin-left: 20px;
						}
					}
		}
	}
}
</style>