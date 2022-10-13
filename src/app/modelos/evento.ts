import { Mesa } from "./mesa";


export class Evento {

    eventoId?: number;
    nombre!: string;
    descripcion!: string;
    tipo!: string;
    fechaHora!: string;
    imagenPortada!: File;
    duracion!: string;
    callePuerta!: string;
    barrio!: string;
    ciudad!: string;
    nroCupos!: number;
    cantidadMesas!: number;
    cantidadAsientosMesa!: number;
    precioAsiento!: number;
    idioma!: string;
    criterioAsignacion!: string;
    empresaCreadora!: string;
    mesas?: Mesa[];
    estadoEvento!: string;

}
