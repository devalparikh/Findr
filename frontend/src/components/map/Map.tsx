import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function MapBox() {
    const [state, setState] = React.useState({
        viewport: {
            latitude: 38.8298,
            longitude: -77.3074,
            zoom: 8
        }
    });

    const ref = React.useRef();

    React.useEffect(() => {
        if (ref.current) {
            setState({
                ...state,
                viewport: {
                    ...state.viewport,
                    // @ts-ignore
                    height: ref.current.offsetHeight, // parent element height
                    // @ts-ignore
                    width: ref.current.offsetWidth // parent element width
                }
            });
        }
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
            />
        </div>
    );
}

export default MapBox;
