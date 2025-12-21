<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';

	function goTo(page: string) {
		goto(page);
	}

    export let language: 'en' | 'hu' = 'en';

    let tileGrid: HTMLDivElement;
    let spaceGrid: HTMLDivElement;
    let bannerOverlay: HTMLDivElement;
    let bannerDiv: HTMLDivElement;
    
    const rows = 4;

    onMount(() => {
        fillBanner();
    });

    function switchLanguage() {
        if (window.location.pathname.startsWith('/hu')) {
            window.location.href = '/';
        } else {
            window.location.href = '/hu';
        }
    }

    function fillBanner() {
        tileGrid.innerHTML = "";
        spaceGrid.innerHTML = "";

        const tileSize = (tileGrid.offsetHeight)/rows; // px
        const cols = Math.ceil(screen.width / tileSize);

        for (let c = 0; c < cols; c++) {
            for (let r = 0; r < rows; r++) {
                createTileAndSpace(c + r);
            }
        }
        
        spaceGrid.style.transform = `translate(${-(0.5 * tileSize)}px)`;
        spaceGrid.style.width = `calc(100% + ${0.5 * tileSize}px)`;

        bannerDiv.style.display = "flex";
        bannerOverlay.style.display = "block";
    }

    function createTileAndSpace(distanceFromOriginTile: number) {
        const tile = document.createElement("div");
        const space = document.createElement("div");

        tile.className = "tile";
        space.className = "space";

        const animSpeed = 9;
        tile.style.setProperty('--i', String((distanceFromOriginTile/animSpeed)));
        space.style.setProperty('--i', String(((distanceFromOriginTile-1)/animSpeed)));

        tileGrid.appendChild(tile);
        spaceGrid.appendChild(space);
    }
</script>

<style>
    .banner{
        --height: max(15vh,80px);
        width: 100vw;
        height: var(--height);
        position:absolute;
        top: 0;
        left: 0;
        user-select:none;
        pointer-events: none;
    }

    #banner {
        background-color: white;
        position: relative;

        display: none; /* flex */
        flex-direction: row;
        align-items: center;
        justify-content: left;
    }

    #banner > * {
        z-index: 1;
    }

    #banner-title {
        margin-left: 2rem;
    }

    #language-button {
        height: calc(var(--height) / 4.5);
        aspect-ratio: 1 / 1;
        margin-left: 0.6rem;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 0.5rem;
        cursor: pointer;
        pointer-events: auto;
    }

    #banner-title h1 {
        margin: 0;
        font-size: calc(var(--height) / 2.5);
        line-height: 1;
        font-weight: 800;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #333333;
    }

    #banner-title h3 {
        margin: 0;
        font-size: calc(var(--height) / 7);
        line-height: 1;
        font-weight: 400;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #666666;
    }
 
    #banner-overlay{
        display: none;
        pointer-events: none;
        box-shadow: inset 0px 0px 20px rgba(0,0,0,0.5);
    }

    #tile-grid, #space-grid {
        --tile-size: calc(var(--height) / 4);
        --tile-flip-duration: 0.5s;
        overflow: hidden;
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: var(--tile-size);
        grid-template-rows: repeat(4, var(--tile-size));
    }


    #tile-grid { 
        background-color: transparent;
    }

    #space-grid {
        z-index: 2;
    }

    :global(.space) {
        background-color: black;
        aspect-ratio: 1 / 1;
        transform: rotateY(90deg);
        animation: SpaceFlip var(--tile-flip-duration) forwards;
        animation-delay: calc(var(--i) * 1s + var(--tile-flip-duration));
        backface-visibility: hidden;
    }

    :global(.tile) {
        background-color: var(--background-color);
        aspect-ratio: 1 / 1;
        animation: TileFlip var(--tile-flip-duration) forwards;
        animation-delay: calc(var(--i) * 1s + var(--tile-flip-duration));
        backface-visibility: hidden;
        box-sizing: border-box;
        z-index: 1;
    }

    @keyframes -global-TileFlip {
        0% {
            background-color:var(--background-color);
        }
        39.9% {
            background-color: var(--background-color);
        }
        40% {
            background-color: transparent;
        }
        100% {
            background-color: transparent;
            border: 0.5px solid #d2d2d265;
            z-index:0;
        }
    }

    @keyframes -global-SpaceFlip {
        0% {
            transform: rotateY(90deg);
        }

        40% {
            transform: rotateY(00deg);
        }

        100% {
            transform: rotateY(90deg);
        }
    }
</style>

<div class="banner" id="banner" bind:this={bannerDiv}>
    <dir id="banner-title">
        <div style="display:flex; flex-direction:row;">
            <h1>zach.hu</h1>
            {#if language === 'en'}
            <button id="language-button" style="background-image: url('https://flagcdn.com/hu.svg')" type="button" on:click={() => fillBanner()} aria-label="nyelvváltás"></button>
            {:else}
            <button id="language-button" style="background-image: url('https://flagcdn.com/en.svg')" type="button" on:click={() => goTo("/en")} aria-label="change language"></button>
            {/if}
        </div>
        <h3>currently studying CSE @ Óbudai Egyetem</h3>
    </dir>
</div>
<div class="banner" id="banner-overlay" bind:this={bannerOverlay}></div>
<div class="banner" id="tile-grid" bind:this={tileGrid}></div>
<div class="banner" id="space-grid" bind:this={spaceGrid}></div>