import React from 'react';
import ReactDOM from 'react-dom';

import mapboxgl from 'mapbox-gl';
import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZmluZHJwbGF0Zm9ybWFwcCIsImEiOiJja2s1dHFmdXIwZTlrMm5tbWgwdnBsem1qIn0.q4IDYBY5WNTCyB6VdQXmVg';

interface iProps {

}

interface iState {
    lng: any,
    lat: any,
    zoom: any
}

class MapBox extends React.Component<iProps, iState> {

    constructor(props: any) {
        super(props);
        // @ts-ignore
        this.mapContainer = React.createRef();

        this.state = {
            lng: -77.3074,
            lat: 38.8298,
            zoom: 15
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            // @ts-ignore
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            // @ts-ignore
            center: [this.state.lng, this.state.lat],
            // @ts-ignore
            zoom: this.state.zoom
        });
        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
        // https://docs.mapbox.com/mapbox-gl-js/example/add-a-marker/
        var marker = new mapboxgl.Marker()
            .setLngLat([-77.3074, 38.8298])
            .addTo(map);
    }

    render() {


        return (
            <div>

                <div
                    // @ts-ignore
                    ref={el => this.mapContainer = el}
                    className="mapContainer" />
            </div>
        )
    }
}

export default MapBox;
