import { useState } from "react"
import { saveProduct } from "../app/app";

function NewProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleSaveProduct = (event) => {
    event.preventDefault();
    let product = {name, price, checked};
    saveProduct(product)
      .then(resp => alert(JSON.stringify(resp.data)))
      .catch(err => console.log(err));
    console.log(event);
  }

  return (
    <div className="row mt-5 p-1">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSaveProduct}>
              <div className="mb-3">
                <label className="form-label">Name :</label>
                <input 
                  onChange={(e) => setName(e.target.value)} 
                  value={name} type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Price :</label>
                <input 
                  onChange={(e) => setPrice(e.target.value)} 
                  value={price} type="number" className="form-control" />
              </div>
              <div className="mb-3 form-check">
                <input 
                  onChange={() => setChecked(!checked)} 
                  checked={checked} type="checkbox" className="form-check-input" />
                <label className="form-check-label">Checked</label>
              </div>
              <button className="btn btn-success">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProduct