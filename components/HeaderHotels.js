"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HeaderHotels({ onAddHotel }) {
  const [modalShow, setModalShow] = useState(false);
  const [hotelData, setHotelData] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    price: "",
    currency: "XOF",
    image: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setHotelData({ ...hotelData, [name]: value });
  };

  const handleFileChange = (event) => {
    setHotelData({ ...hotelData, image: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", hotelData.name);
    formData.append("location", hotelData.location);
    formData.append("email", hotelData.email);
    formData.append("phone", hotelData.phone);
    formData.append("price", hotelData.price);
    formData.append("currency", hotelData.currency);
    formData.append("image", hotelData.image);

    try {
      await onAddHotel(formData);
      toast.success("Hôtel créé avec succès !");
      setModalShow(false);
      setHotelData({
        name: "",
        location: "",
        email: "",
        phone: "",
        price: "",
        currency: "XOF",
        image: null,
      });
    } catch (error) {
      toast.error("Erreur lors de la création de l'hôtel. Veuillez réessayer.");
      console.error("Erreur lors de l'ajout de l'hôtel :", error);
    }
  };

  return (
    <>
      <header className="d-flex justify-content-between align-items-center mb-4 headerhotel">
        <h1 className="display-6">Liste des Hôtels</h1>
        <button className="button" onClick={() => setModalShow(true)}>
          + Créer un nouvel hôtel
        </button>
      </header>

      <div
        className={`modal ${modalShow ? "" : ""}`}
        style={{ display: modalShow ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-uppercase">
                ← Créer un nouveau hôtel
              </h5>
              <button
                type="button"
                className="close"
                onClick={() => setModalShow(false)}
                aria-label="Close"
              >
                {/* <span aria-hidden="true">&times;</span> */}
              </button>
            </div>
            <div className="row modal-body">
              <form onSubmit={handleSubmit} className="forme d-flex">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="hotelName" className="form-label">
                      Nom de l'hôtel
                    </label>
                    <input
                      type="text"
                      className="form"
                      id="hotelName"
                      name="name"
                      value={hotelData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="hotelLocation" className="form-label">
                      Adresse
                    </label>
                    <input
                      type="text"
                      className="form"
                      id="hotelLocation"
                      name="location"
                      value={hotelData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="hotelEmail" className="form-label">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="form"
                      id="hotelEmail"
                      name="email"
                      value={hotelData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="hotelImage" className="form-label">
                      Ajouter une photo
                    </label>
                    <input
                      type="file"
                      className="form"
                      id="hotelImage"
                      name="image"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mt-1">
                    <label htmlFor="hotelPhone" className="form-label">
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      className="form"
                      id="hotelPhone"
                      name="phone"
                      value={hotelData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="hotelPrice" className="form-label">
                      Prix par nuit
                    </label>
                    <input
                      type="text"
                      className="form"
                      id="hotelPrice"
                      name="price"
                      value={hotelData.price}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="hotelCurrency" className="form-label">
                      Devise
                    </label>
                    <select
                      className="form-select"
                      id="hotelCurrency"
                      name="currency"
                      value={hotelData.currency}
                      onChange={handleChange}
                    >
                      <option value="XOF">XOF</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                    </select>
                  </div>
                  <div className="mt-5">
                    <button type="submit" className="btn3 btn-secondary">
                      Enregistrer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
      {modalShow && (
        <div
          className="modal-backdrop fade show"
          onClick={() => setModalShow(false)}
        ></div>
      )}
    </>
  );
}
