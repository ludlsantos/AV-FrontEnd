import { Time } from "@angular/common";


export class Evento {

    EventoId?: number;
    Nombre!: string;
    Descripcion!: string;
    Tipo!: string;
    Fecha!: Date;
    Hora!: string;
    Duracion!: number;
    callePuerta!: string;
    barrio!: string;
    ciudad!: string;
    NroCupos!: number;
    CantidadMesas!: number;
    CantidadAsientosMesa!: number;
    PrecioAsiento!: number;
    Idioma!: string;
    CriterioAsignacion!: string;
    EmpresaCreadora!: string;
    ImagenPortada!: File;
}

