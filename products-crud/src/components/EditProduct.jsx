import { useEffect, useState } from "react"
import { getProduct, updateProduct } from "../app/app";
import { useParams } from "react-router-dom";

function EditProduct() {
  //const navigate = useNavigate();
  const {id} = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    handleGetProductById(id);
  }, []);

  const handleGetProductById = (id) => {
    getProduct(id)
      .then(resp => {
        setName(resp.data.name);
        setPrice(resp.data.price);
        setChecked(resp.data.checked);
      })
      .catch(err => console.log(err));
  }

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    let product = {id, name, price, checked};
    updateProduct(product)
      .then(resp => alert(JSON.stringify(resp.data)))
      .catch(err => console.log(err));
    console.log(event);
  }

  return (
    <div className="row mt-5 p-1">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleUpdateProduct}>
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

export default EditProduct