import { Controller, Body } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Get } from "@nestjs/common/decorators";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Get('all')
    findAll(@Body() filterCriteria: any) {
        return this.productsService.findAll();
    }
}