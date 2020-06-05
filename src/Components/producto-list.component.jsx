import React, { Component} from "react";
import ProductoDataService from "../Services/producto.service";
import { Link } from "react-router-dom";

class ProductoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            productos: [],
            currentProducto: null,
            currentIndex : -1,
            searchNombre: ""
     
        }

        this.onChangeSearchNombre = this.onChangeSearchNombre.bind(this);
        this.getProductos = this.getProductos.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveProducto = this.setActiveProducto.bind(this);
        this.searchNombre = this.searchNombre.bind(this);
        
    }

    componentDidMount(){
        this.getProductos();
    }

    onChangeSearchNombre(e){
        const searchNombre = e.target.value;
        this.setState({
            searchNombre: searchNombre
        });
    }
  

    getProductos(){
        ProductoDataService.getAll()
        .then(response => {
            this.setState({
                productos: response.data
            })
            console.log(response);
        })
        .catch(e =>{
            console.log(e);
        })
    }

    refreshList(){
        this.getProductos();
        this.setState({
            currentProducto: null,
            currentIndex:-1
        })
    }    

    setActiveProducto(producto, index){
        this.setState({
            currentProducto: producto,
            currentIndex: index
        })
    }
    searchNombre(){
        ProductoDataService.getByName(this.state.searchNombre)
        .then(response => {
            this.setState({
              productos: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
        
    }   

    render() { 
        const { productos, currentIndex, currentProducto, searchNombre } = this.state;
        return (         
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar por nombre"
                    value={searchNombre}
                    onChange={this.onChangeSearchNombre}
                    />
                    <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={this.searchNombre}
                    >
                        Buscar
                    </button>
                    </div>
                </div>                
            </div>
            <div className="col-md-6">
                <h4>Lista de Productos</h4>

                <ul className="list-group">
                    {productos &&
                    productos.map((producto, index) => (
                        <li
                        className={
                            "list-group-item " +
                            (index === currentIndex ? "active" : "")
                        }
                        onClick={() => this.setActiveProducto(producto, index)}
                        key={index}
                        >
                        {producto.nombre}
                        </li>
                    ))}
                </ul>            
            </div>
            <div className="col-md-6">
            {currentProducto ? (
                <div>
                    <br/>
                    <h4>Producto</h4>
                    <div>
                        <label>
                        <strong>Id:</strong>
                        </label>{" "}
                        {currentProducto.id}
                    </div>
                    <div>
                        <label>
                        <strong>Nombre:</strong>
                        </label>{" "}
                        {currentProducto.nombre}
                    </div>                
                    <div>
                        <label>
                        <strong>Descripcion:</strong>
                        </label>{" "}
                        {currentProducto.descripcion}
                    </div>                
                    <div>
                        <label>
                        <strong>Categoria:</strong>
                        </label>{" "}
                        {currentProducto.categoria}
                    </div>                
                    <div>
                        <label>
                        <strong>Precio:</strong>
                        </label>{" "}
                        {currentProducto.precio}
                    </div>                
                    <div>
                        <label>
                        <strong>Stock:</strong>
                        </label>{" "}
                        {currentProducto.stock}
                    </div>                

                    <Link
                        to={"/productos/" + currentProducto.id}
                        className="badge badge-warning"
                    >
                        Modificar
                    </Link>
                </div>
            ) : (
                <div>
                <br />
                <p>Seleccione algun producto</p>
                </div>
            )}
            </div>
        </div>
        );
    }
}
 
export default ProductoList;