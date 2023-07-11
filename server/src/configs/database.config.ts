import { connect, ConnectOptions } from 'mongoose';

export const dbConnect = () => {
    connect(process.env.CONNECTION_STRING!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "user_details_database"
    } as ConnectOptions).then(
        () => console.log("MongoDb Database connect successfully"),
        (error) => console.log('Database connection error', error)
    )
}