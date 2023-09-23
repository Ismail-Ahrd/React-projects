import { faCheckCircle, faCircle, faEdit, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect } from "react"
import { AppContext, checkProduct, deleteProduct, getProducts } from "../app/app";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const [state, setState] = useContext(AppContext);
  
  useEffect(() => {
    handleGetProducts(state.keyword, state.currentPage, state.pageSize);
  }, []);

  const handleGetProducts = (keyword, page, size) => {
    getProducts(keyword, page, size)
    .then(resp => {
      const totalElements = resp.headers['x-total-count'];
      let totalPages =Math.floor(totalElements/size);
      if (totalElements % size !=0) ++totalPages;
      setState({...state, products: resp.data, keyword, pageSize: size, currentPage: page, totalPages});
    })
    .catch(err => {
      console.log(err);
    })
  }

  const handleCheckProduct = (product) => {
    checkProduct(product).then(() => {
      const newProducts = state.products.map(p => {
        if(p.id == product.id){
          p.checked=!p.checked;
        }
        return p
      });
      setState({...state, products:newProducts});
    })
    .catch(err => console.log(err.message))
    
  };

  const handleDeleteProduct = (product) => {
    deleteProduct(product)
      .then(() => {
        const newProducts = state.products.filter(p => p.id!=product.id);
        setState({...state, products:newProducts});
      })
      .catch(err => console.log(err))
  };

  const handleGotoPage = (index) => {
    getProducts(state.keyword, index, state.pageSize)
      .then(resp => {
        console.log(resp.data);
        setState({...state, products: resp.data, currentPage: index})
      })
      .catch(err => console.log(err));
  };

  const handleSerachProduct = (event) => {
    event.preventDefault();
    handleGetProducts(state.keyword, 1, state.pageSize);
  }

  return (
    <div className='container p-4 '>
      <div className="row">
        <div className="col-md- ofsset-6">
          <div className='card'>
            <div className="card-header">
              <h3>Products</h3>
            </div>
            <div className="card-body">
              <form onSubmit={() => handleSerachProduct(event)} >
                <div className="row">
                  <div className="col-auto">
                    <input 
                      onChange={(e) => setState({...state, keyword: e.target.value})} 
                      className="form-control" type="text" />
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-success">
                      <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className='card-body'>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th><th>Name</th><th>Price</th><th>Checked</th><th></th><th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    state.products.map(product => (
                        <tr key={product.id}>
                          <td>{product.id}</td>
                          <td>{product.name}</td>
                          <td>{product.price}</td>
                          <td>
                            <button 
                              onClick={()=>handleCheckProduct(product)} 
                              className="btn btn-outline-success">
                              <FontAwesomeIcon 
                                icon={product.checked?faCheckCircle:faCircle}>
                              </FontAwesomeIcon>
                            </button>
                          </td>
                          <td>
                            <button 
                              onClick={() => handleDeleteProduct(product)} 
                              className="btn btn-outline-danger">
                              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </button>
                          </td>
                          <td>
                            <button 
                              onClick={() => navigate(`/editProduct/${product.id}`)}
                              className="btn btn-outline-success">
                              <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                            </button>
                          </td>
                        </tr>
                        )
                    )
                  }
                </tbody>
              </table>
              <ul className="nav nav-pills">
                {
                  (new Array(state.totalPages).fill(0)).map((v, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => handleGotoPage(index+1)} 
                        className={state.currentPage==index+1?"btn btn-info me-2":"btn btn-outline-info me-2"}>
                          {index + 1}
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Products