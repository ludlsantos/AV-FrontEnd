
import { DeclarationListEmitMode } from "@angular/compiler";
import { Asiento } from "./asiento";
import { Cliente } from "./cliente";
import { ComprobanteDePago } from "./comprobanteDePago";
import { Evento } from "./evento";

export class Reserva {


    idReserva?: number;
    cliente!: Cliente;
    evento!: Evento;
    estadoReserva!: string;
    comprobantePago?: ComprobanteDePago;
    asientos?: Asiento[];
    nombreEmpresa!: string;
    telefono!: number;
    correoElectronico!: string;
    cantidadReservas!: number;
    fechaReserva!: Date;
    descripcionEstado!: string;

   

}