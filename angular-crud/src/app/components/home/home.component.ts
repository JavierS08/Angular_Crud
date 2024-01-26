import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Cliente, ClienteServiceService} from "../../services/cliente-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ListarClientes: Cliente[] = [];
  constructor(private clienteService: ClienteServiceService,private router:Router) {
  }
  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(){
    this.clienteService.getClientes().subscribe(
      res=>{
        console.log(res)
        this.ListarClientes=<any>res;
      },
      err => console.log(err)
    );
  }

  eliminarCliente(id: string){
    this.clienteService.deleteCliente(id).subscribe(
      res=>{
        console.log(res)
        this.listarClientes();
      },
      err => console.log(err)
    );
  }

  modificarCliente(id: string){
    this.router.navigate(['/modify-client/'+id]);
  }

  addCliente(){
    this.router.navigate(['/add-client']);
  }
}
