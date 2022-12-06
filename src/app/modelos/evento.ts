
import { Mesa } from "./mesa";


export class Evento {

    eventoId?: number;
    nombre!: string;
    descripcion!: string;
    tipo!: string;
    fechaHora?: string;
    imagenPortada!: string;
    archivo?: string;
    duracion!: string;
    callePuerta!: string;
    barrio!: string;
    ciudad!: string;
    nroCupos!: number;
    cantidadMesas?: number;
    cantidadAsientosMesa?: number;
    moneda!: string;
    precioAsiento!: number;
    idioma!: string;
    criterioAsignacion!: string;
    tipoAsignacion!: string;
    empresaCreadora!: string;
    mesas?: Array<Mesa>;
    estadoEvento?: string;
}

