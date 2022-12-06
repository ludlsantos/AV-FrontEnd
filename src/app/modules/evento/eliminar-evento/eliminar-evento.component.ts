import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorService } from 'src/app/services/administrador.service';
import { localStorageJwt } from 'src/app/static/local-storage';
import { EventoService } from 'src/app/services/evento.service';
import { ReservaService } from 'src/app/services/reserva.service';


@Component({
  selector: 'app-eliminar-evento',
  templateUrl: './eliminar-evento.component.html',
  styleUrls: ['./eliminar-evento.component.css']
})
export class EliminarEventoComponent implements OnInit {

  validator!: FormGroup;
  pass!: any;
  rePass!: any;
  correo!: any;
  evento!: any;

  constructor(
    private fb: FormBuilder, 
    private adminService: AdministradorService, 
    private router:ActivatedRoute, 
    private route: Router, 
    private eventoService: EventoService,
    private reservaService: ReservaService
    ) { }

  ngOnInit(): void {
    this.FormBuilding();

    
    this.router.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.evento= id;
        }
          else{
              alert("No se cargo el evento")
            }
          });
        }

    
         


  FormBuilding() {
    this.validator = this.fb.group({
      pass: ['', [Validators.required]], 
      rePass:['', [Validators.required]]
    })
  }

  

  eliminarEvento(){
    if(this.validator.invalid){
      alert('Datos invalidos, por favor verifique')
      
    }else{
    this.pass = this.validator.get('pass')?.value;
    this.rePass = this.validator.get('rePass')?.value;
    this.correo = localStorage.getItem(localStorageJwt.LS_CORREO)!;
    const parse = JSON.parse(this.correo)
    if(this.pass == this.rePass){
      this.adminService.getAdminCorreo(parse, this.pass).subscribe(data=> {
        if(data){
          var mensaje = confirm("¿Seguro que desea eliminar este evento de forma definitiva? \n Recuerde que si este evento ya posee reservas con pagos realizados, por politica de la empresa el dinero debe ser reembolsado");
          if(mensaje){
              
                this.eventoService.eliminarEvento(this.evento).subscribe(
                  dataB=>{
                    
                          alert("El evento fué eliminado de forma definitiva")
                          this.route.navigate(['/home'])
                        
                      });
                         
                      
              
              }
            }
               })
           
          
     
     }else{
      alert("Las contraseñas no coinciden");
     }

  }
  }

}
