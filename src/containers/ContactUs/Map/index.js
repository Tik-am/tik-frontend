import React from 'react';
import {
    Map,
    Marker,
    GoogleApiWrapper,
} from 'google-maps-react';

import styles from './darkmodeStyle';

import logo from 'assets/svg/mapIcon.svg';

const MapContainer = ({
  google,
  darkMode,
}) => (
    <Map
        google={google}
        zoom={17}
        key={darkMode}
        initialCenter={{
            lat: 40.198360,
            lng: 44.490183
        }}
        style={{
            height: '432px'
        }}
        styles={darkMode ? styles : []}
    >
        <Marker
            name={'Current location'}
            icon={{ url: logo }}
        >
        </Marker>
    </Map>
);

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD5jdlw9IJu4WwdByxI5LRVkSwhyYVBT4E'
})(MapContainer);
