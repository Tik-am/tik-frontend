import React from 'react'

import {
    Paper
} from '../../'

import './style.scss'

const ViewAll = ({
    onClick
}) => {
    return (
        <Paper  
            className='ViewAllMain' 
            onClick={onClick}
        >
            <Paper  className='ViewAllButton'>
                View All
            </Paper>
        </Paper>
    )
}

export default ViewAll

