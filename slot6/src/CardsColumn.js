import React from 'react';

const CardsColumn = () => {
  return (
    <div className="container mt-4">
      <h4 className="mb-4">Cards Columns</h4>
      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <div className="card border border-primary p-2">
            <img src="/images/car.png" className="card-img-top" alt="Car" />
            <div className="card-body bg-primary text-white">
              Some text inside the first card
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border border-warning p-2">
            <img src="/images/car.png" className="card-img-top" alt="Car" />
            <div className="card-body bg-warning text-dark">
              Some text inside the first card
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border border-danger p-2">
            <img src="/images/car.png" className="card-img-top" alt="Car" />
            <div className="card-body bg-danger text-white">
              Some text inside the first card
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsColumn;
