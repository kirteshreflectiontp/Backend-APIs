import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
    async create(createUserDto: User) {
        try {
            const user = await prisma.user.create({
                data: {
                    first_name: createUserDto.first_name,
                    last_name: createUserDto.last_name,
                    email: createUserDto.email,
                    password: createUserDto.password,
                    id: createUserDto.id,
                    title: createUserDto.title, 
                    primarytelephone: createUserDto.primarytelephone,
                    addressline1: createUserDto.addressline1,
                    addressline2: createUserDto.addressline2, 
                    addresstownCity: createUserDto.addresstownCity, 
                    addresspostcode: createUserDto.addresspostcode, 
                    addressstate: createUserDto.addressstate, 
                    addresscountry: createUserDto.addresscountry
                }
            });
            return { user };
        }
        catch (error) {
            console.log(error);
            return 'Error:' + error;
        }

    }
    async findAll() {
        try {
            const user = await prisma.user.findMany({});
            console.log(user);
            return { user };
        }
        catch (error) {
            console.log(error);
            return 'Error:' + error;
        }
    }
    async findOne(email: string, password: string) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: email
                }
            });
            if(user.password === password) {
                return user;
            }
            else{
                return 'Password is not correct';
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}