import { Login } from "./login";

export class Cliente {

    clienteId?: number;
    tipoDocumento!: string;
    nroDocumento!: number;
    nombre!: string;
    apellidos!: string;
    telefono!: number;
    profesionCargo!: string;
    idiomaPreferencia!: string;
    nombreEmpresa!: string;
    fotoPerfil!: File;
    login!: Login;
}
