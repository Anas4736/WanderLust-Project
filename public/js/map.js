locationiq.key = mapToken;

var layerStyles = {
    "Streets": "streets/vector",
    "Dark": "dark/vector",
    "Light": "light/vector"
};

// Use coordinates if available, otherwise default to New Delhi
var mapCenter = coordinates && Array.isArray(coordinates) && coordinates.length === 2
    ? coordinates
    : [77.209, 28.6139];

var map = new maplibregl.Map({
    container: 'map',
    style: locationiq.getLayer("Streets"),
    zoom: 12,
    center: mapCenter // [lon, lat]
});

map.addControl(new locationiqLayerControl({
    key: locationiq.key,
    layerStyles: layerStyles
}), 'top-left');

// Add marker only if coordinates are available
if (coordinates && Array.isArray(coordinates) && coordinates.length === 2) {
    new maplibregl.Marker().setLngLat(coordinates).addTo(map);
}

if (coordinates && Array.isArray(coordinates) && coordinates.length === 2) {
    const marker = new maplibregl.Marker()
        .setLngLat(coordinates)
        .setPopup(
            new maplibregl.Popup({ offset: 25 })
                .setHTML(`<h6>${popupText}</h6>`)
        )
        .addTo(map);

    // Open the popup by default (optional)
    marker.togglePopup();
}