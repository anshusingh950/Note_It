import React from 'react'
export default function Card(props) {
    
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h3 className="card-text">{props.desc}</h3>
                    <p>Date:{props.dt}</p>

                </div>
            </div>
        </div>
    )
}
