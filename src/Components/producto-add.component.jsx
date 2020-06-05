import React, { Component} from "react";
import ProductoDataService from "../Services/producto.service";

class ProductoAdd extends Component {
    constructor(props){
        super(props);
        this.state = {  
            id: null,
            nombre: "",
            descripcion:"",
            categoria:"",
            precio:0,            
            stock:0,

            registrado: false
        }
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeDescripcion = this.onChangeDescripcion.bind(this);
        this.onChangeCategoria = this.onChangeCategoria.bind(this);
        this.onChangePrecio = this.onChangePrecio.bind(this);
        this.onChangeStock = this.onChangeStock.bind(this);
        this.saveProducto = this.saveProducto.bind(this);  
        this.newProducto = this.newProducto.bind(this);                            
        
    }

    onChangeId(e){
        this.setState({
            id: e.target.value
        })
    }

    onChangeNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }    
    onChangeDescripcion(e){
        this.setState({
            descripcion: e.target.value
        })
    }    
    onChangeCategoria(e){
        this.setState({
            categoria: e.target.value
        })
    }    
    onChangePrecio(e){
        this.setState({
            precio: e.target.value
        })
    }    
    onChangeStock(e){
        this.setState({
            stock: e.target.value
        })
    }    


    saveProducto(){
        var data = {            
            
                id: this.state.id,
                nombre: this.state.nombre,
                descripcion:this.state.descripcion,
                categoria:this.state.categoria,
                precio:this.state.precio,         
                stock:this.state.stock, 
            
        }

        

        ProductoDataService.create(data)
        .then(response => {
            this.setState({
                id: response.data.id,
                nombre: response.data.nombre,
                descripcion:response.data.descripcion,
                categoria:response.data.categoria,
                precio:response.data.precio,
                stock:response.data.stock,

                registrado: true
            });
            console.log(response.data);
        })
        .catch(e=>{
            console.log(e);
        });
    }

    newProducto(){
        this.setState({
            id: null,
            nombre: "",
            descripcion: "",
            categoria: "",
            precio: 0,
            stock:0,

            registrado: false
        })
    }

    render() { 
        return (
            <div className="submit-form">
            {
                this.state.registrado?
                (
                    <div>
                        <h4>Se registro el producto con Éxito!</h4>
                        <button className="btn btn-success" onClick={this.newProducto}>
                            Agregar Nuevo Producto
                        </button>
                    </div>
                )
                :
                (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">id</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.id}
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
                                value={this.state.nombre}
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
                                value={this.state.descripcion}
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
                                value={this.state.categoria}
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
                                value={this.state.precio}
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
                                value={this.state.stock}
                                onChange={this.onChangeStock}
                                name="description"
                            />
                        </div>

                        <button onClick={this.saveProducto} className="btn btn-success">
                            Agregar
                        </button>
                    </div>

                )
            }
            </div>
        );
    }
}
 
export default ProductoAdd;
