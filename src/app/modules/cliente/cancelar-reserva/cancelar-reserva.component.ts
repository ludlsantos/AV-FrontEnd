import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { localStorageJwt } from 'src/app/static/local-storage';

@Component({
  selector: 'app-cancelar-reserva',
  templateUrl: './cancelar-reserva.component.html',
  styleUrls: ['./cancelar-reserva.component.css']
})
export class CancelarReservaComponent implements OnInit {

validator!: FormGroup;
pass!: any;
rePass!: any;
correo!: any;
idReserva!: any;

  constructor(private fb: FormBuilder, private reservaService: ReservaService, private clienteService: ClienteService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.FormBuilding();

    this.router.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.idReserva = id;
        }else{
          alert("Ocurrió un error")
        }
      });
  }

  FormBuilding() {
    this.validator = this.fb.group({
      pass: ['', [Validators.required]], 
      rePass:['', [Validators.required]]
    })
  }

cancelarReserva(){
  this.pass = this.validator.get('pass')?.value;
  this.rePass = this.validator.get('rePass')?.value;
  this.correo = localStorage.getItem(localStorageJwt.LS_CORREO)!;
  const parse = JSON.parse(this.correo)
  if(this.pass == this.rePass){
    var mensaje = confirm("¿Seguro que desea cancelar su reserva?");
    if(mensaje){
    this.clienteService.getClienteCorreoyPass(parse, this.pass).subscribe(data =>{
      this.reservaService.cancelarReserva(this.idReserva).subscribe(dataA =>{
        alert("La reserva fué cancelada correctamente");
        this.route.navigate(['/home'])
      });
    });
  }else{
    this.route.navigate(['/home'])
  }
  }else{
    alert("Las contraseñas no coinciden");
  }
}

}
