<script>
    import SurfProject from "./surfProject.svelte";
</script>

<main>
    <div class="container">
        <div class="projects-header">
            Projects
        </div>
        <div class="projects">
            <SurfProject />
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
    }

    .projects-header {
        font-family: Geneva, Verdana, sans-serif;
        font-size: 2.5rem;
        color: rgb(41, 41, 41);
        border-bottom: 2px solid rgb(43, 43, 43);
        border-top: 2px solid rgb(43, 43, 43);
        text-transform: uppercase;
        margin-bottom: 0.25em;
    }
</style>