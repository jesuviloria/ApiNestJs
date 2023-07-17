/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { createdUserDto, updatedUserDto } from './dto/user.dto'

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

    @Delete(':id')
    deletedUser(@Param('id') id: string){
        this.usersService.deletedUser(id)
    }

    @Patch(':id')
    updatedUser(@Param('id') id: string, @Body() updatedFileds: updatedUserDto){
        return this.usersService.updatedUser(id, updatedFileds)
    }

}
