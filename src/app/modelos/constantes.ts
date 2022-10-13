import { EventoService } from "../services/evento.service";
import { Evento } from "./evento";


export const miApiUrl = 'https://localhost:44319/';
const apiBase = 'API_1_0/';

export const apiUrlClientes = apiBase +  'Clientes/';
export const apiUrlAdministradores = apiBase + 'Administradores/';
export const apiUrlLogin = apiBase + 'Logines/';
export const apiUrlClientesPorCorreo = apiBase + 'ClientesPorCorreo/';
export const apiUrlGetClienteCorreo = apiBase + 'GetClienteCorreo/';
export const apiUrlGetAdminCorreo = apiBase + 'GetAdmincorreo/';
export const apiUrlEventos = apiBase + 'Eventos/';
export const apiUrlIdenidad = apiBase + 'Identidades/login/';

export const apiUrlEventosId = apiUrlEventos + 'id';
export const apiUrlReservas = apiBase + 'Reservas/';
export const apiUrlCorreoReservas = apiBase + 'EventoModificado/';
export const apiUrlReservasId = apiUrlReservas + 'id';
export const apiUrlCancelarReserva = apiBase + 'CancelarReserva/';