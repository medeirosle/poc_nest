import Cat from "../interfaces/cat.interface"
import { IsEmail, IsNotEmpty, IsInt, Length } from 'class-validator'

export default class CatDto implements Cat{
    
    @IsNotEmpty()
    @Length(10, 20)
    name: string
    
    @IsNotEmpty()
    @IsInt()
    age: number
    
    @IsNotEmpty()
    breed: string
}