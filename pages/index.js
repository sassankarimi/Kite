import React, { Fragment, useEffect, useState } from 'react';

//components
import Home from '../components/home';

const Index = () => {
    const [showChild, setShowChild] = useState(false)

    useEffect(() => {
        setShowChild(true)
    }, [])

    return (
        <Fragment>
            <Home />
        </Fragment>

    )
}

export default Index;