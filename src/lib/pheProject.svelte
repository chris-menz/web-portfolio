<script>
    import IconGithub from "~icons/bi/github"
    import IconOutlineArticle from "~icons/ic/outline-article"
    import { slide } from "svelte/transition";

    let showPurpose = false;
    let showFeatures = true;

    const purpose = "Surfers want to surf good waves. To know if and when the waves will be good, they need to check the surf conditions, which provides information regarding wave height, power, shape, and overall quality." 
    const purpose2 =  "One way that surfers can gain a better understanding of what conditions create good waves at their local surf spots is by logging their surf sessions. This entails keeping track of what the conditions were and how good the waves were. Surfers can then reference these sessions while viewing conditions forecasts and get a general idea of what kind of waves those forecasted conditions will create."
    
    const iconStyle="color: white; font-size: 1.25rem; margin-left: -8px; margin-right: 5px"

  
</script>

<main>
    <div class="container">
        
        <div class="header">
            <a href="https://github.com/chris-menz/phe-express-server">Project Homeless Employment</a>
        </div>
        <div class="subheader">
            A web application to help unhoused individuals find employment
        </div>

        <div class="sub-subheader-container">
            <div class="sub-subheader">
                Role: Software Lead (Team of 5), DevOps, Backend Devlopment
            </div>
            <div class="sub-subheader">
                Timeline: June 2022 - Present
            </div>
        </div>


         <div class="buttons-container">
                
                
                <a class="code-button" href="https://github.com/chris-menz/phe-frontend">
                    <IconGithub style={iconStyle}></IconGithub>
                    <div style="margin-left: 5px;">Front-End Repo</div>
                </a>

                <a class="code-button" href="https://github.com/chris-menz/phe-express-server">
                    <IconGithub style={iconStyle}></IconGithub>
                    <div style="margin-left: 5px;">Back-End Repo</div>
                </a>
                
            </div>


        
        <div class="body-container">
           
            <div class="description">
                Project Homeless Employment is a platform that will help unhoused individuals find jobs. Candidates will be able to sign up, create a profile, browse and apply for jobs, and view resources that will guide them to landing a job. Employers will be able to create job listings, as well as find candidates directly via a page with an endless scroll of candidates in their area.
            </div>
            <div class="tech-container">
                <div class="tech-header">
                    Technologies
                </div>
                <div class="tech-subheader">
                    Front-End
                </div>
                <div class="tech-list">
                    <div class="list-item">JavaScript</div>
                    <div class="list-item">React</div>
                    <div class="list-item">Bootstrap</div>
                </div>
                <div class="tech-subheader">
                    Back-End
                </div>
                <div class="tech-list">
                    <div class="list-item">Node/TypeScript</div>
                    <div class="list-item">Express</div>
                    <div class="list-item">MongoDB</div>
                    <div class="list-item">Nginx</div>
                    <div class="list-item">DigitalOcean</div>
                </div>
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
        margin-bottom: 0.75em;
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
    }
</style>