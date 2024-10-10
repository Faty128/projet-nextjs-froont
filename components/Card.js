export default function Card({ hotel }) {
  return (
      <div className="col-md-3">
          <div className="card shadow-sm h-100">
              <img src={`https://simple-crud-app-backend-fotn.onrender.com/${hotel.image}`} className="card-img-top" alt={`Image de ${hotel.name}`} />
              <div className="card-body">
                  <p className="card-text" style={{ fontSize: '0.7rem', color: 'red' }}>{hotel.location}</p>
                  <h5 className="card-title" style={{ fontSize: '1rem'}}>{hotel.name}</h5>
                  <p className="card-text">
                      <small className="text-muted">{hotel.price} XOF par nuit</small>
                  </p>
              </div>
          </div>
      </div>
  );
}
