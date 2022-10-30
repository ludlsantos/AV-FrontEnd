import { Asiento } from "./asiento";

export class Mesa{
    idMesa?: number;
    nroMesa?: number;
    cantidadAsientos!: number;
    lugaresDisponibles!: number;
    eventoId?: number;
    asientos?: Array<Asiento>;


}