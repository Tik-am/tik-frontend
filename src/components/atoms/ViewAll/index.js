import React from 'react'

import {
    Paper
} from '../../'

import './style.scss'

const ViewAll = ({
    onClick,
    text
}) => {
    return (
        <Paper  
            className='ViewAllMain' 
            onClick={onClick}
        >
            <Paper  className='ViewAllButton'>
                {text}
            </Paper>
        </Paper>
    )
}

export default ViewAll

