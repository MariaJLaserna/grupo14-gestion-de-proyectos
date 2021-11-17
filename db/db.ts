import { connect } from 'mongoose';

const conectarBD = async () => {
  return await connect(
    'mongodb+srv://admin:AdminGrupo14@proyectogrupo14.m93zt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
    });
};

export default conectarBD;

// NOMBRE CLUSTER ProyectoGrupo14
// Usuario Admin
// Password AdminGrupo14