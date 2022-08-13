import React from 'react'
import './frame.css'

const Frame = ({ children }: { children: React.ReactNode }) => {
    return (
        <div id="mframe">
            {children}
        </div>
    )
}

export default Frame