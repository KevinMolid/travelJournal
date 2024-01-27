import React from "react"

function Card(props) {
    return (
        <article className="card">
            <img className="card--main-img" src={props.imageUrl}/>
            <div className="card--content">
                <header className="card--header">
                    <i className="card--pin-icon fa-solid fa-location-dot"></i>
                    <span className="card--location">{props.location}</span>
                    <a href={props.googleMapsURL} target="_blank" className="card--google-maps-url">View on Google Maps</a>
                </header>
                <h1 className="card--title">{props.title}</h1>
                <p className="card--dates">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </article>
    )
}

export default Card