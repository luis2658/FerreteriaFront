import http from "../http-common";

class ProductoDataService{
    getAll(){
        return http.get("/api/producto/");        
    }
    getById(id){
        return http.get(`/api/producto/${id}/id`);
    }    
    getByName(name){
        return http.get(`/api/producto/${name}/nombre`);
    }
    update(id, data) {
        return http.put(`/api/producto/${id}`, data);
      }
    create(data) {        
        return http.post("/api/producto/",data);
    }
    delete(id){
        return http.delete(`/api/producto/${id}`);
    }
}

export default new ProductoDataService();