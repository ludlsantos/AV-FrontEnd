import { Mesa } from "./mesa";


export class Evento {

    eventoId?: number;
    nombre!: string;
    descripcion!: string;
    tipo!: string;
    fecha!: string;
    imagenPortada!: File;
    hora!: string;
    duracion!: number;
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

}
