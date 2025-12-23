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
</style>

<Statusbar language={language}/>
<img src="https://web.archive.org/web/20091025145432im_/http://geocities.com/Area51/Nova/1466/underconstruction.gif" alt="">