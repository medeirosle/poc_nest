import { Injectable, Inject } from "@nestjs/common";
import { Cat } from "../entities/cat.entity";
import CatDto from "../dto/cat.dto";

@Injectable()
export default class CatsService {    

    private cats: Cat[] = []

    async findAll(): Promise<Cat[]> {
        return await this.cats;
    }        

    async create(createCatDto: CatDto): Promise<void> {                

        const cat: Cat = new Cat(); 
        cat.name = createCatDto.name
        cat.age = createCatDto.age
        cat.breed = createCatDto.breed                

        this.cats.push(cat)
    }    
}