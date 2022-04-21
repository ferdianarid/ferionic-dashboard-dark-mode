import React from 'react'

const TitleComponent = ({ children }) => {
    return (
        <React.Fragment>
            <h1 className="font-bold my-1 text-sm text-indigo-600">{children}</h1>
        </React.Fragment>
    )
}

export default TitleComponent