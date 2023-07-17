/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User, UserStatus } from './user.entity'
import { v4 } from 'uuid'

@Injectable()
export class UsersService {

    private users: User[] = [
        {
            id: '1',
            nombre: 'Jesus',
            apellido: 'Viloria',
            edad: 23,
            correo: 'jesudvm12@gmail.com',
            estado: UserStatus.SOLTERO
        }
    ]

    getAllUsers() {
        return this.users
    }
    createdUser(nombre: string, apellido: string, edad: number, correo: string) {
        const user = {
            id: v4(),
            nombre,
            apellido,
            edad,
            correo,
            estado: UserStatus.CASADO
        }
        this.users.push(user)

        return user
    }
    updatedUser() {}
    deletedUser(id: string) {
        this.users = this.users.filter(user => user.id !== id)
    }
    
}