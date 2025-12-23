<script lang="ts">
    import './layout.css';
    import favicon from '$lib/assets/favicon.svg';

    import "@fortawesome/fontawesome-svg-core/styles.css";
    import "$lib/fontawesome";

    import Banner from '$lib/Banner.svelte';

    export let data;
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<Banner language={data.language}/>
<slot />
