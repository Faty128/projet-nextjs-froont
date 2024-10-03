"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderHotels from "../../components/HeaderHotels";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";

export default function Hotels() {
    const initialHotels = [/* ...vos données initiales... */];
    const [hotels, setHotels] = useState(initialHotels);

    // Fonction pour ajouter un nouvel hôtel
    const addHotel = async (formData) => {
        try {
            const response = await axios.post('http://localhost:3001/api/hotels', formData);
            console.log("Nouvel hôtel ajouté :", response.data);
            setHotels([...hotels, response.data]);
        } catch (error) {
            console.error("Erreur lors de l'ajout de l'hôtel :", error);
        }
    };

    // Charger les hôtels depuis l'API
    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/hotels');
                setHotels(response.data);
            } catch (error) {
                console.error("Erreur lors du chargement des hôtels :", error);
                // Optionnel : ajouter un message d'erreur à afficher
            }
        };

        fetchHotels();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container-fluid mt-5">
                <HeaderHotels onAddHotel={addHotel} />
                <div className="row row-cols-md-3 g-4">
                    {hotels.map((hotel, index) => (
                        <Card key={index} hotel={hotel} className="card_hotel" />
                    ))}
                </div>
            </div>
        </>
    );
}

