import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from '../entities/user'

export const MyDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "tutorial",
    password: "privatepassword",
    database: "iam",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})


const userRepository = MyDataSource.getRepository(User)


MyDataSource.initialize().then(async () => {

    const user = new User()
    user.id = 1
    user.firstName = "Alex"
    user.lastName = "Picard"
    user.email = "alex.picard@efrei.net"
    user.passwordHash = "aaa"
    await MyDataSource.manager.save(user)

}).catch(error => console.log(error))
