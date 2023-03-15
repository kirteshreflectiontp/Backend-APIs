import { Controller, Body } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { Get, Param} from "@nestjs/common/decorators";

@Controller('categories')
export class CategoriesController {
    constructor(private readonly CategoriesService: CategoriesService){}
    
    @Get('list')
    findAll(@Body() filterCriteria: any) {
        return this.CategoriesService.findAll();
    }

    @Get(':category_name')
    findOne(@Param('category_name') category_name: string) {
        return this.CategoriesService.findOne(category_name);
    }
   
}
