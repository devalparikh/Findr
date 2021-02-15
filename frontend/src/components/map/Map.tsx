import * as React from 'react';
import { useState, useCallback } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Pin from './Pin';
import { iMarker } from '../../containers/main/Main';

interface iMapBox {
    marker: iMarker;
    setMarker: (coordinates: any) => void
}

function MapBox(props: iMapBox) {

    const { marker, setMarker } = props;

    const [state, setState] = React.useState({
        viewport: {
            // Default map coordinates
            latitude: 38.8298,
            longitude: -77.3074,
            zoom: 14
        }
    });

    const ref = React.useRef();

    /* eslint-disable */
    React.useEffect(() => {
        if (ref.current) {
            setState({
                ...state,
                viewport: {
                    ...state.viewport,
                    // @ts-ignore
                    height: "inherit", // parent element height
                    // @ts-ignore
                    width: "inherit"// parent element width
                }
            });
        }
    }, []);
    /* eslint-enable */



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



    return (
        // @ts-ignore
        <div ref={ref} style={{ height: "100%", width: "100%" }}>
            {/* @ts-ignore */}
            <ReactMapGL
                {...state.viewport}
                onViewportChange={viewport => {
                    const { latitude, longitude, zoom } = viewport; // if you just spead viewport it'll cause an infinite resizing of the map, so we skip setting height and width with viewport changes
                    setState({
                        ...state,
                        viewport: {
                            ...state.viewport,
                            latitude: latitude,
                            longitude: longitude,
                            zoom: zoom
                        }
                    });
                }}
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
                        <Pin size={40}  />
                    </Marker>
                }

            </ReactMapGL>
        </div>
    );
}

export default MapBox;
