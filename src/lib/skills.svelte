<main>
    <div class="container">
        <div class="skills-header">
            Skills
        </div>
        <div class="skills">
            <div class="skill-item">JavaScript/TypeScript</div>
            <div class="skill-item">Go</div>
            <div class="skill-item">Svelte</div>
            <div class="skill-item">Node</div>
            <div class="skill-item">Express</div>
            <div class="skill-item">CSS/HTML</div>
            <div class="skill-item">Creating Rest APIs</div>
            <div class="skill-item">SQL Databases</div>
            <div class="skill-item">Redis</div>
            <div class="skill-item">Docker</div>
            <div class="skill-item">Algorithms & Data Structures</div>
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
        display: flex;
        flex-direction: column;
        margin-top: 1.5em;
        max-width: 500px;
    }

    .skills-header {
        font-family: Geneva, Verdana, sans-serif;
        font-size: 2.5rem;
        color: rgb(34, 34, 34);
        border-top: 2px solid rgb(43, 43, 43);
        border-bottom: 2px solid rgb(43, 43, 43);
        text-transform: uppercase;
        margin-bottom: 0.375em;
    }

    .skill-item {
        padding-bottom: 0.25em;
        font-family: Helvetica, sans-serif;
        font-weight: lighter;
        font-size: 1.25em;
    }

    @media (max-width: 950px) {
        .container{
            max-width: none;
        }
    }
</style>