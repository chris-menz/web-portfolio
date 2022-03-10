<script>
    import IconLocation from "~icons/carbon/location"
    import IconPhone from "~icons/bi/phone"
    import IconMail24Regular from "~icons/fluent/mail-24-regular"
    import IconLinkedinFill from "~icons/eva/linkedin-fill"
    import { slide } from "svelte/transition";

    const iconStyle = "font-size: 1.25rem; color: rgb(245, 239, 239);"

    let isOpen = false;

    const toggle = () => isOpen = !isOpen
</script>

<main>
    <div class="container">
        <div class="name">
            Chris Menz
        </div>
        <div class="title">
            Software Developer
        </div>

        <div class="big-screen-container">
            <div class="location-container">
                <IconLocation style="font-size: 1.625rem; color: rgb(245, 239, 239);"></IconLocation>
                <div class="location">
                    Boston, MA
                </div>
            </div>
        
            <div class="contact-container">
                <div class="contact-header">
                    Contact
                </div>
                <div class="contact-list">
                    <div class="contact-item">
                        <IconPhone style={iconStyle}></IconPhone>
                        <div class="contact-content">857-928-9350</div>
                    </div>
                    <div class="contact-item">
                        <IconMail24Regular style={iconStyle}></IconMail24Regular>
                        <div class="contact-content">chrismenzdev@gmail.com</div> 
                    </div>
                    <div class="contact-item">
                        <IconLinkedinFill style={iconStyle}></IconLinkedinFill>
                        <div class="contact-content" style="margin-top: 1.8px;" ><a href="https://www.linkedin.com/in/chris-menz-793b5a230">Chris Menz</a></div> 
                    </div>        
                </div>
            
            </div>

            <div class="resume">
                <a href="https://docs.google.com/document/d/1LjfRuWXTn4_iiy54Co-J7jkPSaNJEL-EoujEuFOFNjU/edit?usp=sharing">Resume</a>
            </div>
        </div>

        <div class="small-screen-container">
            <button class="toggle-button"  on:click={() => toggle()}>
                {isOpen ? "Show Less" : "More Info"}
            </button>

            {#if isOpen}

                <div transition:slide="{{ duration: 500}}">
                
                    <div class="location-container">
                        <IconLocation style="font-size: 1.625rem; color: rgb(245, 239, 239);"></IconLocation>
                        <div class="location">
                            Boston, MA
                        </div>
                    </div>
        
                    <div class="contact-container">
                        <div class="contact-header">
                            Contact
                        </div>
                        <div class="contact-list">
                            <div class="contact-item">
                                <IconPhone style={iconStyle}></IconPhone>
                                <div class="contact-content">857-928-9350</div>
                            </div>
                            <div class="contact-item">
                                <IconMail24Regular style={iconStyle}></IconMail24Regular>
                                <div class="contact-content">chrismenzdev@gmail.com</div> 
                            </div>
                            <div class="contact-item">
                                <IconLinkedinFill style={iconStyle}></IconLinkedinFill>
                                <div class="contact-content" style="margin-top: 1.8px;" ><a href="https://www.linkedin.com/in/chris-menz-793b5a230">Chris Menz</a></div> 
                            </div>        
                        </div>
                        
                    </div>

                    <div class="resume">
                        <a href="https://docs.google.com/document/d/1LjfRuWXTn4_iiy54Co-J7jkPSaNJEL-EoujEuFOFNjU/edit?usp=sharing">Resume</a>
                    </div>
                </div>
            {/if}
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
        background: rgb(4, 0, 212);
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 400px;
        display: flex;
        flex-direction: column;
        color: white;
        z-index: 1;
    }

    .big-screen-container {
        display: flex;
        flex-direction: column;
    }

    .small-screen-container {
        display: none;
    }

    .name, .title {
        align-self: center;
    }

    .name {
        font-family: 'Lucida Sans', Verdana, sans-serif;
        font-size: 3rem;
        margin-top: 1.5em;
        margin-bottom: 0.125em;
    }

    .title {
        font-family: Helvetica, sans-serif;
        font-size: 1.875rem;
        margin-bottom: 1.125em;
        font-weight: lighter;
        color: rgb(245, 239, 239);
    }

    .location-container {
        display: flex;
        flex-direction: row;
        align-self: flex-start;
        margin-left: 8%;
        margin-bottom: 1.1875em;
    }

    .location {
        font-family: Helvetica, sans-serif;
        font-weight: lighter;
        font-size: 1.625rem;
        padding-left: 00.1875em;
        color: rgb(245, 239, 239);
    }

    .contact-container {
        display: flex;
        flex-direction: column;
        font-family: Helvetica, sans-serif;
        font-weight: lighter;
        margin-left: 8%;
        margin-bottom: 1.25em;
    }

    .contact-list {
        display: flex;
        flex-direction: column;
        font-size: 1.25rem;
    }


    .contact-item, .contact-item a, .contact-item a:visited {
        display: flex;
        flex-direction: row;
        margin-bottom: 0.1875em;
        color: rgb(245, 239, 239);
    }

    /* .contact-list a, .resume a {
        text-decoration: none;
    } */

    .contact-list a:hover, .resume a:hover, .contact-list a:visited:hover, .resume a:visited:hover {
        color: rgb(182, 182, 182);
        transition-duration: 250ms;
    }

    .contact-content {
        padding-left: 00.3125em;
    }

    .contact-header {
        font-size: 1.625rem;
        margin-bottom: 00.25em;
        font-family: 'Lucida Sans', Verdana, sans-serif;
    }

    .resume {
        font-family: Helvetica, sans-serif;
        font-weight: lighter;
        margin-left: 8%;
    }

    .resume a, .resume a:visited {
        font-size: 1.625rem;
        color: white;
        font-family: 'Lucida Sans', Verdana, sans-serif;
    }

    @media (max-width: 950px) {
        .container {
            right: 0;
            bottom: auto;
            width: 100%;
            height: 180px;
        }

        .name {
            margin-top: 0.5em;
        }

        .title {
            margin-bottom: 0.5em;
        }

        .big-screen-container {
            display: none;
        }

        .small-screen-container {
            display: flex;
            flex-direction: column;
            background: rgb(4, 0, 212);
        }

        .toggle-button {
            margin: auto;
            width: 150px;
            font-size: 1.325rem;
            background: none;
            border: none;
            text-decoration: underline;
            border-radius: 5px;
            margin-bottom: 1em;
            cursor: pointer;
            color: rgb(245, 239, 239);
        }

        .resume {
            margin-bottom: 1.5em;
        }

        .location-container, .contact-container, .resume {
            margin-left: 5%;
        }
    }
</style>