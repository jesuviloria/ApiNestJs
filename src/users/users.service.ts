/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User, UserStatus } from './user.entity'
import { v4 } from 'uuid'
import { updatedUserDto } from './dto/user.dto';

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

    getUserById(id: string): User {
        return this.users.find(user => user.id === id)
    }
    updatedUser(id: string, updatedFields: updatedUserDto): User {
        const user = this.getUserById(id)
        const newUser = Object.assign(user, updatedFields)
        this.users = this.users.map((user) => (user.id === id ? newUser : user))
        return newUser
    }
    deletedUser(id: string) {
        this.users = this.users.filter(user => user.id !== id)
    }
    
}