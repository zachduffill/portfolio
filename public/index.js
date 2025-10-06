var tileGrid;
var spaceGrid;
var bannerContent;
var bannerOverlay;
var main;

var deerCont;

document.addEventListener('DOMContentLoaded', function () {
    tileGrid = document.getElementById("tile-grid");
    spaceGrid = document.getElementById("space-grid");
    bannerContent = document.getElementById("banner-content");
    bannerOverlay = document.getElementById("banner-overlay");
    genGrid(screen.height / 38);

    deerCont = document.getElementById("deer-container");
});

function genGrid(tileSize) {
    let gridsize = spaceGrid.getBoundingClientRect();

    let rows = 4;
    let cols = Math.floor(screen.width*1.5 / tileSize);

    let h = `${rows * (tileSize + 1)}px`;
    let w = `${(cols + 1) * tileSize}px`;

    tileGrid.style.height = h;
    spaceGrid.style.height = h;
    tileGrid.style.width = w;
    spaceGrid.style.width = w;

    bannerContent.style.height = h;
    bannerOverlay.style.width = w;
    bannerOverlay.style.height = h;

    spaceGrid.style.transform = `translate(${-(0.5 * tileSize)}px)`;
    
    tileGrid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    spaceGrid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    tileGrid.innerHTML = '';
    spaceGrid.innerHTML = '';

    let animSpeed = 0.51;

    let spaceK;
    let titleK;
    for (let i = 0; i < rows * cols; i++) {
        const space = document.createElement('div');
        space.className = 'space';

        const tile = document.createElement('div');
        tile.className = 'tile';
    
        let d = i / cols
        let r = Math.floor(d);
        let c = Math.round((d - r) * cols)
        //console.log(`row ${r}, col ${c}`)

        spaceK = ((r + c) / animSpeed) * 0.05;
        titleK = ((r + c+2.3) / animSpeed) * 0.05;

        space.style.setProperty('--i', spaceK);
        spaceGrid.appendChild(space);
        
        tile.style.setProperty('--i', titleK);
        tileGrid.appendChild(tile);
    }

    setTimeout(function () {
        if (spaceGrid && spaceGrid.parentNode) {
            spaceGrid.parentNode.removeChild(spaceGrid);
        }
    }, spaceK*1000+500);
}

function OnResize() {

}