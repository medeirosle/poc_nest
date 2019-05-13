import { Sequelize } from 'sequelize-typescript'
import { Cat } from '../../../cats/entities/cat.entity';


export const dataBaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'nest'
            })

            sequelize.addModels([Cat])
            await sequelize.sync()
            return sequelize
        }
    }
]