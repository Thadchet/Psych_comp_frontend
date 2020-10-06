import React, { useEffect, useState } from 'react';

const DeletePage = props => {

    useEffect(() => {
        console.log(props)
    }, [props])

    return (
        <div>
            Hello DeletePage
        </div>
    )
}

export default DeletePage;