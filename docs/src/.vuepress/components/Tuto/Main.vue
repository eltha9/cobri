<template>
    <main>
        <h1>Comment posez votre carreau de carrelage petite sirène</h1>

        <p>Pour ce tout premier tuto nous vous proposons de vous montrez comment mettre en place votre carreau de carrelage petite sirène.</p>

        <div class="video-integration">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TvR7Z_IzKf4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </main>
</template>

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

    h1{
        margin-bottom: 64px;
    }
    p{
        margin-bottom: 32px;

    }

    .video-integration{
        text-align: center;
    }
}
</style>