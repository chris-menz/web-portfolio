<script>
    import {p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29} from "$lib/blog/swell-status-blog"
    
    
    let y;

    const images = ["./../plans-images/IMG_2698.PNG", "./../plans-images/IMG_2699.PNG", "./../plans-images/IMG_2700.PNG", "./../plans-images/IMG_2701.PNG", "./../plans-images/IMG_2702.PNG", "./../plans-images/IMG_2703.PNG", "./../plans-images/IMG_2704.PNG"]
</script>

<svelte:window bind:scrollY={y}/>

<main>
    <div class="container">
        <div class="header">The Process of Coding a Surf Forecaster</div>

        <div class="subheader">By Chris Menz</div>

            <p>
                {p1}
            </p>

            <br>
            <br>

        <div class="section-header">
            Data Sources
        </div>
            <p>
                {p2}
                <br>
                <br>

                {p3}
                <br>
                <br>

                {p4}
                <br>
                <br>
            </p>

            <br>

        <div class="section-header">
            SwellStatus 1.0 Back-End
        </div>

        <p>
            {p5}
            <br>
            <br>

        </p>

        <br>

        <div class="section-header">
            SwellStatus 1.0 Front-End
        </div>

        <p>
            {p6}
            <br>
            <br>

            {p7}
            <br>
            <br>

            {p8}
            <br>
            <br>

            {p9}
            <br>
            <br>

            {p10}
            <br>
            <br>

            

        </p>

        <br>


        <div class="section-header">
            Expanded Vision
        </div>

        <p>

            {p11}
            <br>
            <br>

            {p12}
            <br>
            <br>

        </p>

        <br>

        <div class="section-header">
            SwellStatus 2.0 Back-End
        </div>

        <p>
            
            {p13}
            <br>
            <br>

        </p>

            <div class="img-container">
                {#each images as src}
                    <img {src} alt="surf-web" class="image"/>
                {/each}
            </div>

        <p>

            {p14}
            <br>
            <br>

            {p15}
            <br>
            <br>

            {p16}
            <br>
            <br>

            {p17}
            <br>
            <br>

            {p18}
            <br>
            <br>

            {p19}
            <br>
            <br>

        </p>

        <br>

        <div class="section-header">
            SwellStatus 2.0 Front-End
        </div>

        <p>
            
            {p20}
            <br>
            <br>

            {p21}
            <br>
            <br>

            {p22}
            <br>
            <br>

            {p23}
            <br>
            <br>

            {p24}
            <br>
            <br>

            {p25}
            <br>
            <br>

        </p>

        <br>

        <div class="section-header">
            Deployment and Wrap-Up
        </div>

        <p>
            {p26}
            <br>
            <br>

            {p27}
            <br>
            <br>

            {p28}
            <br>
            <br>

            {p29}
            <br>
            <br>
        </p>

    </div>
    
</main>

<style>
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .container {
        max-width: 750px;
        padding: 0 1em;
        margin: 2em auto;
    }

    .header {
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 00.25em;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .section-header {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.625rem;
        margin-bottom: 0.25em;
    }

    .subheader {
        text-align: center;
        font-size: 1.25rem;
        margin-bottom: 2em;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: rgb(36, 36, 36)
    }

    p {
        font-size: 1.25rem;
        font-family: Helvetica, sans-serif;
        font-weight: lighter;
    }

    .img-container {
        display: flex;
        margin-bottom: 1.5em;
        overflow-x: scroll;
    }

    .image {
        width: 100%;
        max-width: 200px;
        height: auto;
    }
</style>