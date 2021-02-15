import * as React from 'react';
import { useState, useRef, useCallback } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Pin from './Pin';
import { iMarker } from '../../containers/main/Main';
// @ts-ignore
import Geocoder from 'react-map-gl-geocoder'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import './Map.css';


interface iMapBox {
    marker: iMarker;
    setMarker: (coordinates: any) => void
}

function MapBox(props: iMapBox) {

    const { marker, setMarker } = props;

    const [viewport, setViewport] = useState({
        latitude: 38.8298,
        longitude: -77.3074,
        zoom: 14
    });
    const ref = useRef();
    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
    );

    // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
    const handleGeocoderViewportChange = useCallback((newViewport) => {
        const geocoderDefaultOverrides = { transitionDuration: 1000 };
        setMarker({
            longitude: newViewport.longitude,
            latitude: newViewport.latitude
        });

        return handleViewportChange({
            ...newViewport,
            ...geocoderDefaultOverrides
        });
    }, [handleViewportChange]);



    const [events, logEvents] = useState({});

    const onMarkerDragStart = useCallback(event => {
        logEvents(_events => ({ ..._events, onDragStart: event.lngLat }));
    }, []);

    const onMarkerDrag = useCallback(event => {
        logEvents(_events => ({ ..._events, onDrag: event.lngLat }));
        // setMarker({
        //     longitude: event.lngLat[0],
        //     latitude: event.lngLat[1]
        // });
    }, []);

    const onMarkerDragEnd = useCallback(event => {
        logEvents(_events => ({ ..._events, onDragEnd: event.lngLat }));
        setMarker({
            longitude: event.lngLat[0],
            latitude: event.lngLat[1]
        });
    }, []);

    // Moves pin to center of current map location
    const resetPin = () => {
        setMarker({
            longitude: viewport.longitude,
            latitude: viewport.latitude
        });
    }




    return (
        <div style={{ height: "100%", width: "100%" }}>
            {/* @ts-ignore */}
            <ReactMapGL
                // @ts-ignore
                ref={ref}
                {...viewport}
                width="100%"
                height="100%"
                onViewportChange={handleViewportChange}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
                // mapStyle={'mapbox://styles/mapbox/dark-v9'}
                mapStyle={'mapbox://styles/mapbox/streets-v11'}
            >
                {
                    marker &&
                    <Marker
                        longitude={marker.longitude}
                        latitude={marker.latitude}
                        offsetTop={-20}
                        offsetLeft={-10}
                        draggable
                        onDragStart={onMarkerDragStart}
                        onDrag={onMarkerDrag}
                        onDragEnd={onMarkerDragEnd}
                    >
                        <Pin size={40} />
                    </Marker>
                }

                <Geocoder
                    mapRef={ref}
                    onViewportChange={handleGeocoderViewportChange}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
                    position="top-right"
                    marker={false}
                />

                <button
                    className="submit-button"
                    style={{ width: "100px", position: "fixed", bottom: "40px", right: "10px" }}
                    onClick={resetPin}
                >
                    Reset  &nbsp; <Pin size={15} color="white" />
                </button>

            </ReactMapGL>
        </div>
    );
}

export default MapBox;

