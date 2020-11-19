<template>
    <main>
        <div class="location-in-site">
            <div class="location-in-site-path">
                <span>Carrelage</span> / <span>Carrelage extérieur</span>
            </div>
            <h1>Carellage extérieur</h1>
        </div>
        <div class="product-list">
            <Products-ProductShow/>
        </div>
    </main>  
</template>

<style lang="scss">
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