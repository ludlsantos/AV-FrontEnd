import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComprobanteDePago } from 'src/app/modelos/comprobanteDePago';
import { ClienteService } from 'src/app/services/cliente.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { ComprobanteService} from '../../services/comprobante.service';
import { Reserva } from 'src/app/modelos/reserva';

@Component({
  selector: 'app-comprobanteDePago',
  templateUrl: './comprobanteDePago.component.html',
  styleUrls: ['./comprobanteDePago.component.css']
})
export class ComprobanteDePagoComponent implements OnInit {

 

  public previsualizacion!: string;
  public archivos: Array<any>=[]
  public loading!: boolean
  public nombreArchivo = ""
  public archivo = ""
  idReserva!: any;
  reserva!: Reserva;


  constructor(
    private comprobante: ComprobanteService,
    private reservaService: ReservaService, 
    private router: ActivatedRoute, 
    private route: Router
    ) { }

  ngOnInit(): void {

  }

          
  

  capturarFile(event: any): any {
    console.log(event.target.files);
  }





  clearImage(): any {
    this.previsualizacion = '';
    this.archivo= '';
  }

  uploadFile(files:any) {
 
    const fileToUpload = files[0] as File;
    var formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    const reader = new FileReader();
    reader.readAsDataURL(fileToUpload); // read file as data url
    reader.onload = (event: any) => { // called once readAsDataURL is completed
  
      this.archivo = event.target.result
      this.nombreArchivo = fileToUpload.name
      this.archivos.push(this.archivo)

  

 

      
    };
  }

  subirArchivo(): any {

    if (this.archivos.length === 0) {
      alert ("Debe adjuntar un archivo")
      this.loading = false;
  }
  else {
    try {
      this.loading = true;

      var comprobanteDePago: ComprobanteDePago = {

        archivo: this.archivo,
        nombre: this.nombreArchivo
        
        

      }
    
        this.router.params.subscribe(
          e=>{
            let id=e['id'];
        if(id){
          this.idReserva = id;
        }else{
          alert("Ocurrió un error")
        }
     
    this.reservaService.getReserva(this.idReserva).subscribe(reserva => {
      this.reserva = reserva;
    
      this.comprobante.postComprobante(comprobanteDePago).subscribe(res => {
        if(res){
          this.loading = false;
          var reservaNueva: Reserva = {
            idReserva: this.reserva.idReserva,
            cliente: this.reserva.cliente!,
            evento: this.reserva.evento!,
            fechaReserva: this.reserva.fechaReserva,
            estadoReserva: this.reserva.estadoReserva,
            comprobanteDePago: res,
            nombreEmpresa: this.reserva.nombreEmpresa,
            telefono: this.reserva.telefono,
            correoElectronico: this.reserva.correoElectronico,
            cantidadReservas: this.reserva.cantidadReservas,
            descripcionEstado: this.reserva.descripcionEstado,
            ruta: this.reserva.ruta
          }

          this.reservaService.putReserva(this.idReserva, reservaNueva).subscribe(resp =>{
            if(resp){
            console.log('Respuesta del servidor', res);
            alert('Su comprobante de pago ha sido guardado con éxito');
            }
          });
  
        }
        });
      });
    });
      
    } catch (e) {
      this.loading = false;
      alert('No se pudo guardar su comprobante de pago, por favor intente nuevamente');

    }
  }
}

    } 
  
