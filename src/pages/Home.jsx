function Home() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-8 mt-8 mb-8">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1633027804000"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Macbook Air M1</h2>
            <p>Php 70,000</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1653084303665"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Macbook Pro</h2>
            <p>Php 89,000</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1632788573000"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Macbook M1 Pro</h2>
            <p>Php 117,000</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
