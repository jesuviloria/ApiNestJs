/* eslint-disable prettier/prettier */
import { UserStatus } from "../user.entity"
export class createdUserDto{
    nombre: string
    apellido: string
    edad: number
    correo: string
}

export class updatedUserDto{
    correo?: string
    estado?: UserStatus
}