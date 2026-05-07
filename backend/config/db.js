import mongoose from 'mongoose'

export const connectDB=async () =>{
    await mongoose.connect('mongodb://fooddelivery:anubhav1234@ac-czfahnh-shard-00-00.h2fqfmg.mongodb.net:27017,ac-czfahnh-shard-00-01.h2fqfmg.mongodb.net:27017,ac-czfahnh-shard-00-02.h2fqfmg.mongodb.net:27017/food-del?ssl=true&tls=true&replicaSet=atlas-pdmmsf-shard-0&authSource=admin&appName=Cluster0').then(()=> console.log("Db connected"))
}