import { Login } from "./login";

export class Cliente {

    clienteId?: number;
    tipoDocumento!: string;
    nroDocumento!: string;
    nombre!: string;
    apellidos!: string;
    telefono!: number;
    profesionCargo!: string;
    idiomaPreferencia!: string;
    nombreEmpresa!: string;
    login!: Login;
}
