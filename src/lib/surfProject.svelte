<script>
    import IconBaselineSurfing from "~icons/ic/baseline-surfing"
    import IconGithub from "~icons/bi/github"
    import IconOutlineArticle from "~icons/ic/outline-article"
    import { slide } from "svelte/transition";

    let showPurpose = false;
    let showFeatures = true;

    const iconStyle="color: white; font-size: 1.25rem; margin-left: -8px; margin-right: 5px"

    const purpose = "Surfers want to surf good waves. To know if and when the waves will be good, they need to check the surf conditions, which provides information regarding wave height, power, shape, and overall quality." 
    const purpose2 =  "One way that surfers can gain a better understanding of what conditions create good waves at their local surf spots is by logging their surf sessions. This entails keeping track of what the conditions were and how good the waves were. Surfers can then reference these sessions while viewing conditions forecasts and get a general idea of what kind of waves those forecasted conditions will create."
    

    import { onMount } from 'svelte';

    let Carousel; // for saving Carousel component class
    let carousel; // for calling methods of the carousel instance
    onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;
    });

    const handleNextClick = () => {
        carousel.goToNext()
    }

    const images = ["./../surf-images/surfwebimage1.png", "./../surf-images/surfwebimage2.png", "./../surf-images/surfwebimage3.png", "./../surf-images/surfwebimage4.png"]

</script>

<main>
    <div class="container">
        
        <div class="header">
            <a href="https://www.swellstatus.com">SwellStatus.com<IconBaselineSurfing style="margin-bottom: -10px"></IconBaselineSurfing></a>
        </div>
        <div class="subheader">
            A surf forecasting and logging web application
        </div>


        <div class="sub-subheader-container">
            <div class="sub-subheader">
                Role: Solo Developer
            </div>
            <div class="sub-subheader">
                Timeline: January 2022 - Present
            </div>
        </div>


         <div class="buttons-container">
                
                
                <a class="code-button" href="https://github.com/chris-menz/swell-status">
                    <IconGithub style={iconStyle}></IconGithub>
                    <div style="margin-left: 5px;">Repository</div>
                </a>

                <a class="blog-button" href="/blog/swell-status-blog">
                    <IconOutlineArticle style={iconStyle}></IconOutlineArticle>
                    <div>Developer Blog</div>
                </a>
                
            </div>

        <div class="carousel">
            <svelte:component
                        this={Carousel}
                        bind:this={carousel}
                        let:loaded
            >
                {#each images as src, imageIndex (src)}
                    <div class="img-container">
                        {#if loaded.includes(imageIndex)}
                            <img {src} alt="surf-web" class="image"/>
                        {/if}
                    </div>       
                {/each}
            </svelte:component>
        </div>
        
        <div class="body-container">
           

            <div class="tabs-container">
                <div class="features-tab" 
                    on:click={() => {showPurpose = false; showFeatures = true}}
                    style="color: {showFeatures ? "black" : ""};"
                >
                    Features
                </div>
                <div class="purpose-tab" 
                    on:click={() => {showPurpose = true; showFeatures = false}}
                    style="color: {showPurpose ? "black" : ""};"
                >
                    Purpose
                </div>
                
            </div>
            <div class="description">
                {#if showPurpose}
                    <p in:slide="{{ delay: 400, duration: 600}}" out:slide="{{ duration: 400 }}">
                        {purpose}
                        <br>
                        <br>
                        {purpose2}
                    </p>
                    
                {/if}
                {#if showFeatures}
                    <ul class="features-list" in:slide="{{ delay: 400, duration: 600}}" out:slide="{{ duration: 400 }}">
                        <li>– View Surf Reports</li>
                        <ul>
                            <li>
                                – Reports for all surf spots in New England (plans to expand to other regions)
                            </li>
                            <li>
                                – Live surf conditions and 7-day forecast
                            </li>
                            <li>
                                – Includes tooltips to help newer surfers understand what each part of a surf report is and how it affects the waves
                            </li>
                        </ul>
                        <li>
                            – Save surf spots for quick look up (account needed)
                        </li>
                        <li>
                            – Log surf sessions (account needed)
                        </li>
                            <ul>
                                <li>– User decides if the session will be viewable to the public or only viewable to the user</li>
                            </ul>
                        <li>
                            – View other users' public surf sessions
                        </li>
                        <li>
                            – Comment on and "favorite" other users' public surf sessions (account needed)
                        </li>
                    </ul>
                    
                    
                {/if}
            </div>
            <div class="tech-container">
                <div class="tech-header">
                    Technologies
                </div>
                <div class="tech-subheader">
                    Front-End
                </div>
                <div class="tech-list">
                    <div class="list-item">TypeScript</div>
                    <div class="list-item">Svelte + SvelteKit</div>
                </div>
                <div class="tech-subheader">
                    Back-End
                </div>
                <div class="tech-list">
                    <div class="list-item">Go</div>
                    <div class="list-item">PostgreSQL</div>
                    <div class="list-item">Redis</div>
                    <div class="list-item">Docker</div>
                    <div class="list-item">Nginx</div>
                    <div class="list-item">DigitalOcean</div>
                </div>
            </div>
            <div class="message">
                Refer to the devloper blog for full details of the technologies used to build this project and their respective implementations.
            </div>
        </div>

        

       

    </div>
</main>

<style>
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .container {
        display: grid;
        align-items: start;
        margin-bottom: 1em;
    }

    .header a, .header a:visited {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', Geneva, Verdana, sans-serif;
        font-size: 2.75rem;
        text-decoration: underline;
        color: black;
    }

    .header a:hover {
        transition-duration: 250ms;
        color: rgb(77, 77, 77);
    }

    .header {
        margin-bottom: 0.0875em;
    }

    .subheader {
        font-family: Helvetica, sans-serif;
        font-weight: lighter;
        font-style: oblique;
        margin-bottom: 0.5em;
        grid-column: 1;
        color: rgb(53, 53, 53);
    }

    .sub-subheader-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 0.5em;
    }

    .sub-subheader {
        font-family: 'Lucida Sans';
        font-size: 1.375rem;
        /* font-weight: bold; */
    }

    .description {
        max-width: 400px;
        font-family: Helvetica, sans-serif;
        font-weight: lighter;
        font-size: 1.125rem;
        margin-bottom: 0.75em;
        grid-column: 1;
    }

    .body-container {
        grid-column: 1;
    }

    .buttons-container{
        margin-bottom: 0.5em;
        display: flex;
        grid-column: 1;
    }

    .buttons-container a, .buttons-container a:visited {
        font-size: 1.25rem;
        font-family: Verdana, sans-serif;
        text-decoration: none;
        color: white;
        border-radius: 5px;
        display: flex;
        padding: 0.5em 1em;
        margin-right: 00.5em;
        transition-duration: 300ms;
    }

    .buttons-container a:hover {
        filter: brightness(70%);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
        cursor: pointer;
    }

    .code-button {
        background: rgb(13, 16, 58);
    }

    .blog-button {
        background: rgb(4, 0, 212);
    }

    .tabs-container {
        display: flex;
        cursor: pointer;
        margin-bottom: 00.625em;
        grid-column: 1;
    }

    .purpose-tab, .features-tab {
        padding-right: 1em;
        font-size: 1.875rem;
        text-decoration: underline;
        color: rgb(63, 63, 63);
        font-family: Verdana, sans-serif;
        transition-duration: 300ms;
    }

    .purpose-tab:hover, .features-tab:hover {
        color: rgb(0, 0, 0);
        transition-duration: 300ms;
    }

    p {
        transition: all 500ms ease-in-out;
        font-size: 1.125rem;
    }

    .features-list {
        list-style: none;
    }

    .features-list li {
        margin-bottom: 00.3875em;
        font-size: 1.3125rem;
    }

    .features-list ul {
        margin-top: -0.25em;
        margin-bottom: 00.3125em;
        margin-left: 1.5em;
        list-style: none;
    }

    .features-list ul li {
        font-size: 1rem;
        color: rgb(51, 51, 51);
    }


    .tech-container {
        display: grid;
        max-width: 300px;
        margin-bottom: 1em;
        grid-column: 1;
    }

    .tech-header {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.875rem;
        margin-bottom: 0.25em;
        text-align: left;
        grid-row: 1;
        grid-column: 1/3;
    }

    .tech-subheader {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.5rem;
        margin-bottom: 0.25em;
        margin-top: 0.1875em;
        grid-row: 2;
        text-align: left;
    }

    .tech-list {
        grid-row: 3;
        text-align: left;
    }

    .list-item {
        font-family: Helvetica, sans-serif;
        font-weight: lighter;
        font-size: 1.125rem;
        margin-bottom: 00.1875em;
    }

    .message {
        font-family: Helvetica, sans-serif;
        font-weight: lighter;
        max-width: 400px;
        text-align: left;
    }


    .carousel {
        grid-column: 2;
        grid-row: 2/6;
        max-width: 520px;
    }

    .image {
        width: 100%;
        height: auto;
    }

    @media (max-width: 1300px){
        .carousel {
            max-width: 450px;
        }
    }

    @media (max-width: 1150px){
        .carousel {
            grid-column: 1;
            grid-row: 4;
            margin-top: 1em;
            margin-left: -1.25em;
        }
    }

    @media (max-width: 950px) {
        .buttons-container {
            margin-bottom: 00.25em;
        }

        .purpose-tab, .features-tab {
            color: rgb(83, 83, 83);
        }
    }

    @media (max-width: 500px) {
        .header a {
            font-size: 2.25rem;
        }

        .buttons-container a {
            font-size: 1rem;
            text-align: center;
        }

        .carousel {
            max-width: 350px;
        }
    }
</style>