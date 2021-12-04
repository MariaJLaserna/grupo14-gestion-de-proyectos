// import { connect } from "mongoose";
import mongoose from 'mongoose';

const conectarBD = async () => {
  return await mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
    });
};

// NOMBRE CLUSTER ProyectoGrupo14
// Usuario Admin
// Password AdminGrupo14

export default {conectarBD};

// const url = "mongodb://mintic:MinticEquipo14@gestionproyectosmisiont-shard-00-00.b7eel.mongodb.net:27017,gestionproyectosmisiont-shard-00-01.b7eel.mongodb.net:27017,gestionproyectosmisiont-shard-00-02.b7eel.mongodb.net:27017/GestionProyectos?ssl=true&replicaSet=atlas-be29yz-shard-0&authSource=admin&retryWrites=true&w=majority";

// const conectarDB = async () =>{
//     return await connect(
//         url
//         ,{ useNewUrlParser: true,useUnifiedTopology: true }).then(() => {
//             console.log('Conexion exitosa');
//         }).catch(e => {
//             console.error("Error conectando a la bd", e)
//         });
// }

// export default conectarBD;
