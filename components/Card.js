export default function Card({ hotel }) {
  return (
      <div className="col-md-3">
          <div className="card shadow-sm h-100">
              <img src={`http://localhost:3001/${hotel.image}`} className="card-img-top" alt={`Image de ${hotel.name}`} />
              <div className="card-body">
                  <p className="card-text" style={{ fontSize: '0.7rem', color: 'red' }}>{hotel.location}</p>
                  <h5 className="card-title">{hotel.name}</h5>
                  <p className="card-text">
                      <small className="text-muted">{hotel.price} XOF par nuit</small>
                  </p>
              </div>
          </div>
      </div>
  );
}



//   CE CODE EN BAS EST RECOMMANDER QUAND J4UTILISE LE API


// import React from 'react';

// export default function Card({ hotel }) {
//   return (
//     <div className="col-md-3">
//       <div className="card shadow-sm h-100">
//         <img
//           src={typeof hotel.image === 'string' ? hotel.image : URL.createObjectURL(hotel.image)}
//           alt={hotel.name}
//           className="card-img-top"
//         />
//         <div className="card-body">
//           <p className="card-text" style={{ fontSize: '0.7rem', color: 'red' }}>
//             {hotel.location}
//           </p>
//           <h5 className="card-title">{hotel.name}</h5>
//           <p className="card-text">
//             <small className="text-muted">{hotel.price} XOF par nuit</small>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
