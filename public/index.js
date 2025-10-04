var grid;
var overlay;

document.addEventListener('DOMContentLoaded', function () {
    grid = document.getElementById("tile-grid");
    overlay = document.getElementById("banner-overlay");
    genGrid(35);
});

function genGrid(tileSize) {
    let gridsize = grid.getBoundingClientRect();
    let rows = 4;

    grid.style.height = `${rows * (tileSize + 1)}px`;
    overlay.style.height = `${rows * (tileSize + 1)}px`;
    
    let cols = Math.floor(gridsize.width / tileSize);
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    grid.innerHTML = ''; 

    let animSpeed = cols/30;

    for (let i = 0; i < rows * cols; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';

        let d = i / cols
        let r = Math.floor(d);
        let c = ((d - r) * cols)
        //console.log(`row ${r}, col ${c}`)
        tile.style.setProperty('--i', (r + c) / animSpeed);

        if (r == 1) {
            
            tile.appendChild(document.createTextNode("Tare"));
        }

        grid.appendChild(tile);
    }
}
