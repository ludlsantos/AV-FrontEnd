
import { Cliente } from "./cliente";

export type Roles = 'Administrador' | 'Cliente';

export class Login {

    rol!: Roles;
    contraseña!: string;
    correoElectronico!: string;
}