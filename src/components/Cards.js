/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function Card(props) {
    const { element } = props;

    const {
        title,
        location,
        googleMapsUrl,
        startDate,
        endDate,
        description,
        imageUrl,
    } = element;

    return (
        <div className="card">
            <img src={imageUrl} alt="destination-img" />
            <div className="info-container">
                <div className="destination-location">
                    <span>
                        <i className="fa-solid fa-location-dot" /> {location}
                    </span>
                    {'  '}
                    <a href={googleMapsUrl} target="_blank" rel="noreferrer">
                        View on Google Maps
                    </a>
                </div>
                <h2 className="destination-title">{title}</h2>
                <p className="destination-date">
                    {startDate}
                    {' - '}
                    {endDate}
                </p>
                <p className="destination-description">{description}</p>{' '}
            </div>
        </div>
    );
}
