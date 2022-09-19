import { EventoService } from "../services/evento.service";
import { Evento } from "./evento";


export const miApiUrl = 'https://localhost:44319/';
const apiBase = 'API_1_0/';

export const apiUrlClientes = apiBase +  'Clientes/';
export const apiUrlAdministradores = apiBase + 'Administradores/';
export const apiUrlLogin = apiBase + 'Logines/';
export const apiUrlClientesPorCorreo = apiBase + 'ClientesPorCorreo/';
export const apiUrlGetClienteCorreo = apiBase + 'GetClienteCorreo/';
export const apiUrlEventos = apiBase + 'Eventos/';
export const apiUrlIdenidad = apiBase + 'Identidades/login/';

