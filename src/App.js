/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import data from './data';

export default function App() {
    const cardFunction = data.map((element) => <Cards element={element} />);

    return (
        <div className="container">
            <Header />
            <section className="card-section">{cardFunction}</section>
        </div>
    );
}
