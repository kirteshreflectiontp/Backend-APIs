import { Injectable } from "@nestjs/common";
import { Products } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

@Injectable()
export class ProductsService {
    
    async findAll() {
        try {
            const Product = await prisma.products.findMany({});
            console.log(Product);
            return { Product };
        }
        catch (error) {
            console.log(error);
            return 'Error:' + error;
        }
    }
}