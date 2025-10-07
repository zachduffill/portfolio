var tileGrid;
var spaceGrid;
var bannerContent;
var bannerOverlay;

document.addEventListener('DOMContentLoaded', function () {
    tileGrid = document.getElementById("tile-grid");
    spaceGrid = document.getElementById("space-grid");
    bannerContent = document.getElementById("banner-content");
    bannerOverlay = document.getElementById("banner-overlay");

    genGrid();
    window.onresize = recalc;
});

function genGrid() {
    let d = recalc();
    let cols = d.cols;
    let rows = d.rows;
    let tileSize = d.tileSize;

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

        spaceK = ((r + c) / animSpeed) * 0.05;
        titleK = ((r + c+2.3) / animSpeed) * 0.05;

        space.style.setProperty('--i', spaceK);
        spaceGrid.appendChild(space);
        
        tile.style.setProperty('--i', titleK);
        tileGrid.appendChild(tile);
    }

    tilesCreated = true;

    setTimeout(function () {
        if (spaceGrid && spaceGrid.parentNode) {
            spaceGrid.parentNode.removeChild(spaceGrid);
        }
    }, spaceK*1000+500);
}

function recalc()
{
    var w = screen.width; var h = screen.height;
    var DPR = window.devicePixelRatio;
    w = Math.round(DPR * w);
    h = Math.round(DPR * h);

    document.documentElement.style.setProperty("--ivh", `${h}px`)

    let tileSize = h / 50;
    let rows = 4;
    let cols = Math.floor((w * 1.5) / tileSize);

    h = `${rows * (tileSize + 1)}px`;
    w = `${(cols + 1) * tileSize}px`;

    tileGrid.style.height = h;
    spaceGrid.style.height = h;
    tileGrid.style.width = w;
    spaceGrid.style.width = w;

    bannerContent.style.height = h;
    bannerOverlay.style.width = w;
    bannerOverlay.style.height = h;

    return { tileSize: tileSize, rows: rows, cols: cols }
}