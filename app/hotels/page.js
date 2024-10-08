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
            const response = await axios.post('https://simple-crud-app-backend-fotn.onrender.com/api/hotels', formData);
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
                const response = await axios.get('https://simple-crud-app-backend-fotn.onrender.com/api/hotels');
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
            <div className="content_hotel">
                <HeaderHotels onAddHotel={addHotel} />
                <div className="row row-cols-md-3 g-4 p-4">
                    {hotels.map((hotel, index) => (
                        <Card key={index} hotel={hotel} className="card_hotel" />
                    ))}
                </div>
            </div>
        </>
    );
}

