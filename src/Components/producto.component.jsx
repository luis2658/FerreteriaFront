import React, {Component} from "react";
import ProductoDataService from "../Services/producto.service";

class Producto extends Component {
    constructor(props){
        super(props);
        this.state = {  
            currentProducto:{
                id: null,
                nombre: "",
                descripcion:"",
                categoria:"",
                precio:0,            
                stock:0,                
            },
            message : ""
        }

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeDescripcion = this.onChangeDescripcion.bind(this);
        this.onChangeCategoria = this.onChangeCategoria.bind(this);
        this.onChangePrecio = this.onChangePrecio.bind(this);
        this.onChangeStock = this.onChangeStock.bind(this);
        this.updateProducto = this.updateProducto.bind(this);
        this.deleteProducto = this.deleteProducto.bind(this);
        this.getProducto = this.getProducto.bind(this);
        
    }

    componentDidMount(){       
        this.getProducto(this.props.match.params.id);
    }    

    onChangeId(e){
        const id = e.target.value;

        this.setState(function(prevState) {
            return {
              currentProducto: {
                ...prevState.currentProducto,
                id: id
              }
            };
          });
    }

    onChangeNombre(e){
        const nombre = e.target.value;

        this.setState(function(prevState) {
            return {
              currentProducto: {
                ...prevState.currentProducto,
                nombre: nombre
              }
            };
          });
    }    
    onChangeDescripcion(e){
        const descripcion = e.target.value;

        this.setState(function(prevState) {
            return {
              currentProducto: {
                ...prevState.currentProducto,
                descripcion: descripcion
              }
            };
          });
    }    
    onChangeCategoria(e){        

        const categoria = e.target.value;

        this.setState(function(prevState) {
            return {
              currentProducto: {
                ...prevState.currentProducto,
                categoria: categoria
              }
            };
          });
    }    
    onChangePrecio(e){
        const precio = e.target.value;

        this.setState(function(prevState) {
            return {
              currentProducto: {
                ...prevState.currentProducto,
                precio: precio
              }
            };
          });
    }    
    onChangeStock(e){
        const stock = e.target.value;

        this.setState(function(prevState) {
            return {
              currentProducto: {
                ...prevState.currentProducto,
                stock: stock
              }
            };
          });
    }    

    updateProducto(){
        ProductoDataService.update(
            this.state.currentProducto.id,
            this.state.currentProducto)
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "El producto Ha sido Modificado"
                });
            })
            .catch(e => {
                console.log(e);
            });       

    }

    deleteProducto(){
        ProductoDataService.delete(
            this.state.currentProducto.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/productos')
            })
            .catch(e => {
                console.log(e);
            }); 
    }

    getProducto(id) {
        ProductoDataService.getById(id)
          .then(response => {
            this.setState({
              currentProducto: response.data
            });
            console.log(this.state.currentProducto);
          })
          .catch(e => {
            console.log(e);
          });
    }


    
    
    render() { 
        const { currentProducto } = this.state;
        
        return ( 
        <div>
            {
                currentProducto? 
                (
                    <div className="edit-form">
                        <h4>
                            Producto
                        </h4>
                        <form>                        
                            <div className="form-group">
                                <label htmlFor="title">id</label>
                                <input
                                    type="text"     
                                    disabled                               
                                    className="form-control"
                                    id="title"
                                    required
                                    value={currentProducto.id}
                                    onChange={this.onChangeId}
                                    name="title"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    required
                                    value={currentProducto.nombre}
                                    onChange={this.onChangeNombre}
                                    name="description"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Descripcion</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    required
                                    value={currentProducto.descripcion}
                                    onChange={this.onChangeDescripcion}
                                    name="description"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Categoria</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    required
                                    value={currentProducto.categoria}
                                    onChange={this.onChangeCategoria}
                                    name="description"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Precio</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    required
                                    value={currentProducto.precio}
                                    onChange={this.onChangePrecio}
                                    name="description"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Stock</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    required
                                    value={currentProducto.stock}
                                    onChange={this.onChangeStock}
                                    name="description"
                                />
                            </div>
                        </form>

                        <button 
                            onClick={this.deleteProducto} 
                            type="submit"
                            className="badge badge-danger">
                            Eliminar
                        </button>

                        <button 
                            onClick={this.updateProducto} 
                            type="submit"
                            className="badge badge-success">
                            Actualizar
                        </button>
                        <p>{this.state.message}</p>
                    </div>

                )
                :
                (
                    <div>
                        <br />
                        <p>Elija un Producto...</p>
                    </div>
                )
            }
        </div> 
        );
    }
}
 
export default Producto;