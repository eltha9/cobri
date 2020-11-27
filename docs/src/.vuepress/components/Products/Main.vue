<template>
    <main>
        <div class="location-in-site">
            <div class="location-in-site-path">
                <span>Carrelage</span> / <span>Carrelage extérieur</span>
            </div>
            <h1>Carellage extérieur</h1>
        </div>
        <div class="product-list">
            <Products-ProductShow v-for="product in products" 
            v-bind:key="product.id" 
            v-bind:productLink="product.productLink" 
            v-bind:productName="product.productName" 
            v-bind:price="product.price"
            v-bind:rate="product.rate"
            v-bind:img="product.img"
            />
        </div>
    </main>  
</template>

<script>
export default {
    data(){
        return {
            products: [
                {
                    "productLink":"/products/carreau-carrelage-petite-sirene/",
                    "productName":"Xarreau de carrelage la Petite Sirène",
                    "price":"23.84",
                    "rate":4,
                    "img":"/img/sirene_2.png",
                    "id": 1
                },
                {
                    "productLink":"#",
                    "productName":"Carreau de carrelage Polochon la Petite Sirène",
                    "price":"23.00",
                    "rate":3,
                    "img":"/img/polochon.png",
                    "id": 2
                },
                {
                    "productLink":"#",
                    "productName":"Carreau de carrelage Ursula la Petite Sirène",
                    "price":"69.42",
                    "rate":2,
                    "img":"/img/ursula.png",
                    "id": 3
                }
                ]
        }
    }
}
</script>

<style lang="scss" scoped>
//var for product list
$main-H: 80vh;
$main-W: 100%;
$main-bgc : rgba(236,234,234,0.2);

main{
    padding: 0 162px;
    padding-top: 60px;
    min-height: $main-H;
    width: $main-W;
    box-sizing: border-box;
    //top of main content
    .location-in-site{
        font-size: 16px;
        font-weight: 400;

        display: flex;
        flex-direction: column;
        margin-bottom: 100px;
    }

    .product-list{
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        .product{// uncomnet if necessary 
            // width: calc( ( 100% - ( 162px * 2 ) ) / 3); 
        }
    }
}
</style>