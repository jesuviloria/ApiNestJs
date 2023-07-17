/* eslint-disable prettier/prettier */
export enum UserStatus {
    SOLTERO = 'SOLTERO',
    DIVORSIADO = 'DIVORSIADO(A)',
    VIUDO = 'VIUDO(A)',
    CASADO = 'CASADO(A)'
}

export class User {
    id: string;
    nombre: string;
    apellido: string;
    edad: number;
    correo: string;
    estado: UserStatus;
}
