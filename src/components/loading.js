import React from 'react'
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
           <div class="loader">Loading...<Spinner animation="border" role="status">
        </Spinner></div>
        </div>
    )
}

export default Loading