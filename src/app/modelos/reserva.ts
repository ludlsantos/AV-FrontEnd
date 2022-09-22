
import { Asiento } from "./asiento";

import { Cliente } from "./cliente";
import { Evento } from "./evento";

export class Reserva {


    idReserva?: number;
    cliente!: Cliente;
    evento!: Evento;
    estadoReserva!: string;
    comprobantePago?: string;
    asientos?: Asiento[];
    nombreEmpresa!: string;
    telefono!: number;
    correoElectronico!: string;
    cantidadReservas!: number;
   

	
	reservaId?: string;
    cliente!: Cliente;
    evento!: Evento;
    estadoReserva!: string;
    comprobantePago!: File;
    asiento!: number;

}