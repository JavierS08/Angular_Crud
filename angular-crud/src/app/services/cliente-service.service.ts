import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  url='http://localhost:3000/api';
  constructor(private http: HttpClient) { }


  getClientes(){
    return this.http.get(this.url+'/clientes');
  }
  getCliente(id: string){
    return this.http.get(this.url+'/clientes/'+id);
  }
  addCliente(cliente: Cliente){
    return this.http.post(this.url+'/clientes', cliente);
  }
  deleteCliente(id: string){
    return this.http.delete(this.url+'/clientes/'+id);
  }
  updateCliente(id: string, cliente: Cliente){
    return this.http.put(this.url+'/clientes/'+id, cliente);
  }

}

export interface Cliente{
  codigo?: string;
  nombre: string;
  ciudad: string;
  facturacion: number;
}
