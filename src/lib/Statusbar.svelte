<script>
    import Card from '$lib/Card.svelte';

    export let language;
</script>

<style>
    .statusbar {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin: 1rem;
        font-size: 1rem;
    }

    :global(#status) {
        flex-grow: 1;
        font-family: 'Courier New', Courier, monospace;
        color: #556B2F;
    }

    :global(#links) {
        float: right;
        display: flex;
        gap: 1rem;
        padding: 0.5rem 1rem;
    }
    :global(#links) * {
        margin: auto;
    }

    /* Mobile */
    @media (max-width: 767px) 
    { 
        .statusbar {
            flex-direction: column;
        }

        :global(#links) * {
            font-size: 1.5rem;
        }
    }
</style>

<div class="statusbar">
    <Card id="intro">
        <span>
            i'm zach, a programmer from the uk living in budapest.
        </span>
    </Card>
    <Card id="status">
        <span>
            &gt; if i can find the time to finish any of my projects, you'll see them here, eventually...
        </span>
    </Card>
    <Card id="links">
        <script src="https://kit.fontawesome.com/deff952479.js" crossorigin="anonymous"></script>
        <a href="https://www.github.com/zachduffill" aria-label="github"><i class="fab fa-github" style="color: black;"></i></a>
        <a href="https://www.linkedin.com/in/zachduffill" aria-label="linkedin"><i class="fab fa-linkedin" style="color: #0072b1;"></i></a>
        <a href="mailto:zach.duffill@gmail.com" aria-label="email"><i class="fas fa-envelope" style="color: gray;"></i></a>
</Card>
</div>