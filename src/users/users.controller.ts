/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { createdUserDto } from './dto/user.dto'

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}
    
    @Get()
    getAllUsers(){
        return this.usersService.getAllUsers()
    }

    @Post()
    createdUser(@Body() newUser: createdUserDto){
        return this.usersService.createdUser(newUser.nombre, newUser.apellido, newUser.edad, newUser.correo)
    }

}
