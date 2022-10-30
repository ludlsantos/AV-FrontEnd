
import { Asiento } from "./asiento";
import { Cliente } from "./cliente";
import { ComprobanteDePago } from "./comprobanteDePago";
import { Evento } from "./evento";

export class Reserva {


    idReserva?: number;
    cliente!: Cliente;
    evento!: Evento;
    estadoReserva?: string;
    comprobanteDePago?: ComprobanteDePago;
    asientos?: Asiento[];
    nombreEmpresa!: string;
    telefono!: number;
    correoElectronico!: string;
    cantidadReservas!: number;
    fechaReserva?: Date;
    descripcionEstado!: string;
    ruta?: string;
    reservasSinAsignar?: number; 
    
   

}