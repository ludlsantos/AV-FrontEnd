
import { Asiento } from "./asiento";

import { Cliente } from "./cliente";
import { Evento } from "./evento";

export class Reserva {


    idReserva?: number;
    cliente!: Cliente;
    evento!: Evento;
    estadoReserva!: string;
    comprobantePago?: string;
    asiento?: Asiento;
    nombres!: string;
    apellidos!: string;
    telefono!: number;
    correoElectronico!: string;
    cantidadReservas!: number;
    tipoDocumento!: number;
    documento!: number;
   
   

	
	reservaId?: string;
    cliente!: Cliente;
    evento!: Evento;
    estadoReserva!: string;
    comprobantePago!: File;
    asiento!: number;

}