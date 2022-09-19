import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/modelos/cliente';
import { Reserva } from 'src/app/modelos/reserva';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { localStorageJwt } from 'src/app/static/local-storage';
import { ClienteService } from 'src/app/services/cliente.service';
import { Evento } from 'src/app/modelos/evento';
import { EventoService } from 'src/app/services/evento.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { Asiento } from 'src/app/modelos/asiento';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {

  fgValidator!: FormGroup;
  correo!: any;
  cliente:Cliente = new Cliente;
  evento:Evento = new Evento;
  idEvento!: any;
  asiento!: Asiento;

  constructor(private http: HttpClient,private reservaService: ReservaService , private eventoService: EventoService, private clienteService: ClienteService ,private fb: FormBuilder, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.FormBuilding();

  }



  obtenerid(){
    this.router.params.subscribe(e=>{
      let id=e['id'];
      if(id){
        this.eventoService.getEvento(id).subscribe(dataA =>{
          this.evento = dataA;
        });
      }
        else{
            alert("No se cargo el evento")
          }
        });
    }

  FormBuilding(){
    this.fgValidator = this.fb.group({
      tipoDocumento: ['', [Validators.required]],
      nroDocumento: ['', [Validators.required, Validators.minLength(7)]],
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      cantidadReservas: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]]

     });
  }


  Reservar(){
    if (this.fgValidator.invalid){
      alert('Datos invalidos, porfavor verifique')
    }else
    {
      this.correo = localStorage.getItem(localStorageJwt.LS_CORREO)!;
      const parse = JSON.parse(this.correo);
      this.clienteService.getClienteCorreo(parse).subscribe(data => {
        this.cliente = data;
          this.router.params.subscribe(e=>{
            let id=e['id'];
            if(id){
              this.eventoService.getEvento(id).subscribe(dataA =>{
              this.evento = dataA;
         
             

          const reserva: Reserva = {
            cliente: this.cliente,
            evento: this.evento,
            estadoReserva: "Pendiente de pago",
            comprobantePago: "null",
            asiento:this.asiento,
            nombres: this.fgValidator.get('nombre')?.value,
            apellidos: this.fgValidator.get('apellido')?.value,
            telefono: this.fgValidator.get('telefono')?.value,
            correoElectronico: this.fgValidator.get('email')?.value, 
            cantidadReservas: this.fgValidator.get('cantidadReservas')?.value,
            tipoDocumento: this.fgValidator.get('tipoDocumento')?.value,
            documento: this.fgValidator.get('nroDocumento')?.value
            }
          this.reservaService.guardarReserva(reserva).subscribe(data => {
            alert('Reserva exitosa! Revise su casilla de correo electrónico, en la misma, encontrará los pasos a seguir para hacer efectiva su reserva');
            this.route.navigate(['/home']);
            this.fgValidator.reset();
          });
        });
      }
      else{
          alert("No se cargo el evento")
        }
        });
        
      });
      

    
    
      
    }
  }

}
