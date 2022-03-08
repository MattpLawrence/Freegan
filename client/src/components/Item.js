import React from "react";


function Item() {
  return (
    <div>
      <div class="row">

        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              {/* Add image as the src, and potentially description as alt text */}

              <img src="" alt="item"/>

              <span class="card-title">Item Name</span>
            </div>
            <div class="card-content">
              <p>Item description </p>
              <p>Quantity: Item quantity</p>
              {/*Could also add item category */}
            </div>
            <div class="card-action">
              <a href="#">Claim this item</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
