import { Injectable } from "@nestjs/common";
import {Categories} from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

@Injectable()
export class CategoriesService {
    async findAll() {
        try {
            const categories = await prisma.categories.findMany({});
            console.log(categories);
            return { categories };
        }
        catch (error) {
            console.log(error);
            return 'Error:' + error;
        }
    }
   
    async findOne(category_name: string) {
        try {
            const categories = await prisma.categories.findMany({
                where: {
                    category_name: category_name,
                }
            });
            return categories;
        }
        catch (error) {
            console.log(error);
        }
    }
}