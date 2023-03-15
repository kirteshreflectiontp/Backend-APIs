import { Controller, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "@prisma/client";
import { Get, Param, Post } from "@nestjs/common/decorators";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Get(':email&:password')
    findOne(@Param('email') email: string, @Param('password') password: string) {
        return this.userService.findOne(email, password);
    }
    @Get('list')
    findAll(@Body() filterCriteria: any) {
        return this.userService.findAll();
    }
    @Post('register')
    create(@Body() createUserDto: User) {
        return this.userService.create(createUserDto);
    }
}