import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComprobanteDePago } from 'src/app/modelos/comprobanteDePago';
import { ClienteService } from 'src/app/services/cliente.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { ComprobanteService} from '../../services/comprobante.service';
import { Location } from '@angular/common';

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


  constructor(
    private comprobante: ComprobanteService,
    private reservaService: ReservaService, 
    private clienteService: ClienteService,
    private router: ActivatedRoute, 
    private route: Router,
    ) { }

  ngOnInit(): void {

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

  capturarFile(event: any): any {
    console.log(event.target.files);
  }




  // extraerBase64 = async ($event: any) => new Promise((resolve, _reject) => {
  //   try {
  //     const unsafeImg = window.URL.createObjectURL($event);
  //     const imagen = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
  //     const reader = new FileReader();
  //     reader.readAsDataURL($event);
  //     reader.onload = () => {
  //       resolve({
  //         base: reader.result
  //       });
  //     };
  //     reader.onerror = _error => {
  //       resolve({
  //         base: null
  //       });
  //     };
  //     return null;

  //   } catch (e) {
  //     return null;
  //   }
  // })



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
    
     
      this.comprobante.postComprobante(comprobanteDePago)
        .subscribe(res => {
          this.loading = false;
          console.log('Respuesta del servidor', res);
          alert('Su comprobante de pago ha sido guardado con éxito');

      
         
        })
      
      
    } catch (e) {
      this.loading = false;
      alert('No se pudo guardar su comprobante de pago, por favor intente nuevamente');

    }
  }
}

/* 
  subirArchivo(): any {
    try {
      this.loading = true;
      const formularioDeDatos = new FormData();
      this.archivos.forEach((archivo: string | Blob) => {
        formularioDeDatos.append('file', archivo)
        console.log(archivo);

      })
 
      this.comprobante.postComprobante(formularioDeDatos)
        .subscribe(res => {
          this.loading = false;
          console.log('Respuesta del servidor', res);

        }, () => {
          this.loading = false;
          alert('No se pudo adjuntar comprobante de pago');
        })
    } catch (e) {
      this.loading = false;
      console.log('ERROR', e);

    } */
  }
