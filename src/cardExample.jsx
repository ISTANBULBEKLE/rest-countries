import React from "react";

const Card = () => {
  return (
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="..." class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">Belgium</h2>
            <p class="card-text">
              <small class="text-muted">Native Name:</small>
            </p>
            <p class="card-text">
              <small class="text-muted">Population:</small>
            </p>
            <p class="card-text">
              <small class="text-muted">Region:</small>
            </p>
            <p class="card-text">
              <small class="text-muted">Capitol:</small>
            </p>
            <p class="card-text">
              <small class="text-muted">Top Level Domain:</small>
            </p>
            <p class="card-text">
              <small class="text-muted">Currencies:</small>
            </p>
            <p class="card-text">
              <small class="text-muted">Languages:</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
