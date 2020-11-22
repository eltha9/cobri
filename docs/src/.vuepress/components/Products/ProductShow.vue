<template>
    <a :href="productLink" class="product">
                

                <div class="product-image">
                    <img :src="$withBase( img )" :alt=" productName ">
                </div>
                <div class="product-description">
                    <div class="product-name">{{ productName }}</div>
                    <div class="product-rate">

                        <div class="rate-icon full" v-for="n in rate">
                            <img :src="$withBase('./img/color-stars.png')" alt="étoiles de notation">
                        </div>
                       
                        <div class="rate-icon " v-for="n in (5 - rate)">
                            <img :src="$withBase('./img/grey-stars.png')" alt="étoiles de notation">
                        </div>
                    </div>
                    <div class="product-price">
                        <span class="price">{{ price }} €</span> / <span class="quantity">carton</span>
                    </div>
                </div>
            </a>
</template>

<script>
export default {
    props: [
        "productLink",
        "productName",
        "rate",
        "price",
        "img"
    ]
}
</script>

<style lang="scss">
.product{
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 0;

    $image-xy: 17vw;
    margin-bottom: 100px;

    color:black;
    text-decoration: none;
    .product-image{
        width: $image-xy;
        height: $image-xy;
        img{
            height: 100%;
            width: 100%;
        }
        margin-bottom: 40px;
    }

    .product-description{
        display: flex;
        flex-direction: column;
        align-items: center;
        .product-name{
            font-size: 17px;
            font-weight: 500;
            padding: 0 6%;
            text-align: center;

            margin-bottom: 16px;
        }

        .product-rate{
            display: flex;
            flex-direction: row;
            justify-content: center;
            .rate-icon{
                width: 18px;
                height: 18px;
                img{
                    width: 100%;
                    height: 100%;

                    fill: #D3D3D3 !important;
                    stroke: transparent !important;
                }

                &.full{
                    img{
                        fill:#7077A5 !important;
                    }
                }

                margin-left: 10px;
                &:first-of-type{
                    margin-left:0;
                }
            }
            margin-bottom: 16px;
        }

        .product-price{
            font-size: 16px;
            font-weight: 600;
        }
    }
}
</style>