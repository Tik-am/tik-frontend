import React from 'react'

// import './style.scss';

import {
    Paper,
} from '../../'

import './style.scss'

const Event = ({
    width,
    height,
    src,
    alt
}) => {
    return (
        <Paper 
            className='EventBackgroundImg'
            style={{
                width: width,
                height: height,
                backgroundImage: `url(${src})` ,
            }}
        />
    );
}
export default Event;
