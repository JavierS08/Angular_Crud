import { Component } from '@angular/core';
import {ClienteServiceService,Cliente} from "../../services/cliente-service.service";
import {Router} from "@angular/router";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})

export class AddClientComponent {

  ListarClientes: Cliente[] = [];
  cliente: Cliente | null = null;
  constructor(private clienteService: ClienteServiceService,private router:Router) { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    this.cliente = form.value;
    console.log(this.cliente);
    this.createCliente(this.cliente!)
  }

  createCliente(cliente:Cliente){
    this.clienteService.addCliente(cliente).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/']);
      },
      err => console.log(err)
    );
  }

}
