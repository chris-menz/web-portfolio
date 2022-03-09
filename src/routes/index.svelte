<script>
    import Header from "$lib/header.svelte";
    import Projects from "$lib/projects.svelte";
    import Skills from "$lib/skills.svelte";
    import About from "$lib/about.svelte";
</script>

<main>
    <Header />
    <div class="container">
        <div class="proj-container">
            <Projects />
        </div>
        <div class="skills-container">
            <Skills />
        </div>
        <div class="about-container">
            <About />
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
        grid-template-columns: 1fr 1fr;
        margin-left: 425px;
        margin-top: 15px;
    }

    .proj-container {
        grid-row: 1;
        grid-column: 1/3;
    }

    .skills-container {
        grid-row: 2;
        grid-column: 1;
    }

    .about-container {
        grid-row: 2;
        grid-column: 2;
    }

    @media (max-width: 950px) {
        .container {
            margin-left: auto;
            margin-right: auto;
            padding: 0 1em;
            margin-top: 210px;
        }
        .skills-container {
            grid-column: 1/3;
        }

        .about-container{
            grid-column: 1/3;
            grid-row: 3;
        }
    }
</style>