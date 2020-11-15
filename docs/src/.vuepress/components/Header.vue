<template>
    <header>
       <div class="container">
            <a href="./" class="logo">Cobri.</a>
            <div class="menu">
                <div class="inner-link">
                    <a href="./product-list.html">Produits</a>
                    <a href="#services">Services</a>
                    <a href="#bio">Contact</a>
                </div>
                <div class="inner-popup">
                    <button class="clickable-icon">
                        <!-- <img src="./assets/icons/user.svg" alt="user-icon"> -->
                    </button>
                    <button class="clickable-icon">
                        <!-- <img src="./assets/icons/shopping-cart.svg" alt="shopping-cart-icon"> -->
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
//var for header
$header-H: 10vh;
$header-W:100vw;
$bgc-header : #fff;

//header style
header{
    height: $header-H;
    width: $header-W;
    box-sizing: border-box;

    padding: 0 162px;
    background-color: $bgc-header;
    
    .container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .logo{
            text-decoration: none;
            color: #BFA3A6;
            font-size: 35px;
            font-weight: bold;
        }

        .menu{
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            .inner-link{
                
                a{
                    margin-left:35px;
                    font-size: 25px;
                    color: black;
                    font-weight: 500;

                    text-decoration: none;
                    &:first-of-type{
                        margin-left:0;
                    }
                }

                
            }

            .inner-popup{
                margin-left:35px;
                button.clickable-icon{
                    height: 24px;
                    width: 24px;
                    padding: 0;
                    margin:0;
                    background-color: unset;
                    border: none;
                    cursor: pointer;
                    img{
                        width: 100%;
                        height: 100%;
                        stroke: black;
                        fill: transparent;
                    }

                    &:last-child{
                        margin-left: 15px;
                    }
                }
            }

        }
    }
}

//fake header part, disable for instance
.fake-header{
    height: $header-H;
    width: $header-W;

    display: none;
}
</style>