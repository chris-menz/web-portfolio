<script>
    const about = "I am a self-taught developer who enjoys the challenge of learning new technologies and figuring out how stuff works on my own or in a team. I have experience developing web applications using Go(Golang), Node/Express and Javascript/Svelte. I am looking for entry level jobs to grow my development skills. "
</script>

<main>
    <div class="container">
        <div class="about-header">
            About
        </div>
        <div class="about-container">
            {about}
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
        margin-left: 1.5em;
        max-width: 500px;
    }

    .about-header {
        font-family: Geneva, Verdana, sans-serif;
        font-size: 2.5rem;
        color: rgb(34, 34, 34);
        border-top: 2px solid rgb(43, 43, 43);
        border-bottom: 2px solid rgb(43, 43, 43);
        text-transform: uppercase;
        margin-bottom: 0.375em;
    }

    .about-container {
        font-family: Helvetica, sans-serif;
        font-size: 1.125rem;
        font-weight: lighter;
    }

    @media (max-width: 950px) {
        .container{
            margin-left: 0;
            max-width: none;
            margin-bottom: 2em;
        }
    }
</style>