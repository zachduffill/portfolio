<script>
    function switchLanguage() {
        if (window.location.pathname.startsWith('/hu')) {
            window.location.href = '/';
        } else {
            window.location.href = '/hu';
        }
    }
</script>

<style>
    .banner{
        width: 100vw;
        height: 10vh;
        position:absolute;
        top: 0;
        left: 0;
        user-select:none;
        pointer-events: none;
    }

    #banner {
        background-color: white;
    }

    #banner-overlay{
        pointer-events: none;
        box-shadow: inset 0px 0px 20px rgba(0,0,0,0.6);
    }

    #tile-grid, #space-grid {
        overflow: hidden;
    }

</style>

<div class="banner" id="banner">
</div>
<div class="banner" id="banner-overlay"></div>
<div class="banner" id="tile-grid"></div>
<div class="banner" id="space-grid"></div>