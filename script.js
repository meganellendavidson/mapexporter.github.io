// let the editor know that `L` is defined by some code
// included in another file (in this case, `index.html`)
// Note: the code will still work without this line, but without it you
// will see an error in the editor
/* global L */

/* MAP SETUP
*/

var url = "https://basemaps.linz.govt.nz:/v1/tiles/aerial/EPSG:3857/{z}/{x}/{y}.webp?api=c01ezdy758gbx0spff58rjt6emd";

var attr = '<a href="//www.linz.govt.nz/data/linz-data/linz-basemaps/data-attribution">LINZ CC BY 4.0 © Imagery Basemap contributors</a>';

var tiles = L.tileLayer(url, {

   attribution: attr

});

var map = L.map("mapid")

   .addLayer(tiles)

   .setView([-40.5, 173], 6);

map.zoomControl.remove();
