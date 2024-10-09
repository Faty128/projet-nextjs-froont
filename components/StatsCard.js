export default function StatsCard({ title, count, icon, text }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <div
          className="card-body d-flex justify-content-center align-items-center gx-4"
          style={{ gap: "1rem" }}
        >
          <div>
            <img
              src={icon}
              alt={title}
              className="card-icon mb-2"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          {/* <div>
            <div className="d-flex  align-items-center mb-2">
              <p className="card-text mb-0">{count}</p>
              <h5 className="card-title mb-0 ms-2">{title}</h5>
            </div>
            <p className="card-text mt-0">{text}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
