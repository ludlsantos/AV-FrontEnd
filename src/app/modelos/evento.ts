import { Time } from "@angular/common";


export class Evento {

    eventoId?: number;
    nombre!: string;
    descripcion!: string;
    tipo!: string;
    fecha!: Date;
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
    imagenPortada!: File;
}
