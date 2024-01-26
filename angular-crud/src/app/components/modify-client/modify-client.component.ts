import {Component, OnInit} from '@angular/core';
import {ClienteServiceService,Cliente} from "../../services/cliente-service.service";
import {Router,ActivatedRoute} from "@angular/router";
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-modify-client',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './modify-client.component.html',
  styleUrl: './modify-client.component.css'
})
export class ModifyClientComponent implements OnInit{
  cliente: Cliente | null = null;
  onSubmit(form: NgForm) {
    this.cliente = form.value;
    console.log(this.cliente);
    this.modifyCliente(this.cliente!);
  }
  constructor(private clienteService: ClienteServiceService,private router:Router, private actionRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id = <string>this.actionRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.clienteService.getCliente(id).subscribe(
        res=>{
          console.log(res)
          this.cliente=<any>res;
        },
        err => console.log(err)
      );
    }
  }
  modifyCliente(cliente:Cliente){
    const id: string = this.actionRoute.snapshot.params['id'];;
    this.clienteService.updateCliente(id,cliente).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/']);
      },
      err => console.log(err)
    );
  }
}
