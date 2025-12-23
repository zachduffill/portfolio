<script>
    import Card from '$lib/Card.svelte';
    import Statusbar from '$lib/Statusbar.svelte';

    export let data;
    $: language = data.language;
</script>

<style>
    img {
        display: block;
        margin: 5rem auto;
    }

    /* @media (max-width: 767px) {
        img {
            display: none;
        }
    } */
</style>

<Statusbar language={language}/>
<img src="https://blob.gifcities.org/gifcities/4XPS4EDI363KMKGGXAFUWOI4VISPE5AE.gif" alt="">