import { Cliente } from "./cliente";
import { Evento } from "./evento";

export class Reserva {
	
	reservaId?: string;
    cliente!: Cliente;
    evento!: Evento;
    estadoReserva!: string;
    comprobantePago!: File;
    asiento!: number;
}