
/* import { Cliente } from "./cliente"; */

export type Roles = 'Administrador' | 'Cliente';

export class Login {

    rol!: string;
    correoElectronico!: string;
    contraseña!: string;
    
}