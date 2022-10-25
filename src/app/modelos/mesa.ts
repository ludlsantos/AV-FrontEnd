import { Asiento } from "./asiento";

export class Mesa{
    nroMesa?: number;
    cantidadAsientos!: number;
    lugaresDisponibles!: number;
    eventoId?: number;
    asientos?: Array<Asiento>;


}