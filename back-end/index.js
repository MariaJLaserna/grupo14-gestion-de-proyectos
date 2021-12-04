import {conectarBD} from './db/db.js';
import { UserModel } from './models/user.js';
// import { Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo } from './models/enums';
import { ProjectModel } from './models/project.js';
// import { ObjectId } from 'mongoose';
import { ObjectiveModel } from './models/objective.js';
//import { models } from 'mongoose';

// METODOLOGÍA ONE TO MANY #1
/* const crearProyectoConObjetivos1 = async () => {
  const usuarioInicial = await UserModel.create({
    nombre: 'Daniel',
    apellido: 'Saldarriaga',
    correo: 'dsl@cc.com',
    identificacion: '1234',
    rol: Enum_Rol.administrador,
    estado: Enum_EstadoUsuario.autorizado,
  });

  const proyectoCreado = await ProjectModel.create({
    nombre: 'Proyecto Mision TIC',
    fechaInicio: new Date('2021/12/24'),
    fechaFin: new Date('2022/12/24'),
    presupuesto: 120000,
    lider: usuarioInicial._id,
  });

  const objetivoGeneral = await ObjectiveModel.create({
    descripcion: 'este es el objetivo general',
    tipo: Enum_TipoObjetivo.general,
    proyecto: proyectoCreado._id,
  });

  const objetivoEspecifico1 = await ObjectiveModel.create({
    descripcion: 'este es el objetivo especifico 1',
    tipo: Enum_TipoObjetivo.especifico,
    proyecto: proyectoCreado._id,
  });

  const objetivoEspecifico2 = await ObjectiveModel.create({
    descripcion: 'este es el objetivo especifico 2',
    tipo: Enum_TipoObjetivo.especifico,
    proyecto: proyectoCreado._id,
  });
};
const consultaProyectoConObjetivos1 = async () => {
  const proyecto = await ProjectModel.findOne({ _id: '618d52f71098bc9a121e95d5' });

  console.log('el proyecto que encontré fue', proyecto);

  const objetivos = await ObjectiveModel.find({ project: '618d52f71098bc9a121e95d5' });

  console.log('los objetivos del proyecto son: ', objetivos);

  const proyectoConObjetivos = { ...proyecto, objetivos };

  console.log('el proyecto con objetivos es: ', proyectoConObjetivos);
};

// METODOLOGIA ONE TO MANY #2
const crearProyectoConObjetivos2 = async () => {
  const usuarioInicial = await UserModel.create({
    nombre: 'Daniel',
    apellido: 'Saldarriaga',
    correo: 'dsl@cc.com',
    identificacion: '1234',
    rol: Enum_Rol.administrador,
    estado: Enum_EstadoUsuario.autorizado,
  });

  const objetivoGeneral = await ObjectiveModel.create({
    descripcion: 'este es el objetivo general',
    tipo: Enum_TipoObjetivo.general,
  });

  const objetivoEspecifico1 = await ObjectiveModel.create({
    descripcion: 'este es el objetivo especifico 1',
    tipo: Enum_TipoObjetivo.especifico,
  });

  const objetivoEspecifico2 = await ObjectiveModel.create({
    descripcion: 'este es el objetivo especifico 2',
    tipo: Enum_TipoObjetivo.especifico,
  });

  const proyectoCreado = await ProjectModel.create({
    nombre: 'Proyecto Mision TIC',
    fechaInicio: new Date('2021/12/24'),
    fechaFin: new Date('2022/12/24'),
    presupuesto: 120000,
    lider: usuarioInicial._id,
    objetivos: [objetivoGeneral._id, objetivoEspecifico1._id, objetivoEspecifico2._id],
  });
};
const consultaProyectoConObjetivos2 = async () => {
  const proyecto = await ProjectModel.find({ id: '618d578f431abaa895d7696d' }).populate(
    'objetivos'
  );
}; */

// METODOLOGIA ONE TO MANY #3

const crearProyectoConObjetivos3 = async () => {
  const usuarioInicial = await UserModel.create({
    nombre: 'Usuario1',
    apellido: 'Apellido Us1',
    correo: 'usuario1@gmail.com',
    identificacion: '1258',
    rol: Enum_Rol.administrador,
    estado: Enum_EstadoUsuario.autorizado,
  });

  const proyectoCreado = await ProjectModel.create({
    nombre: 'Proyecto Grupo 14',
    fechaInicio: new Date('2021/12/24'),
    fechaFin: new Date('2022/12/24'),
    presupuesto: 120000,
    lider: usuarioInicial._id,
    objetivos: [
      { descripcion: 'Este es el objetivo general', tipo: Enum_TipoObjetivo.general },
      { descripcion: 'Este es el objetivo especifico 1', tipo: Enum_TipoObjetivo.especifico },
      { descripcion: 'Este es el objetivo especifico 2', tipo: Enum_TipoObjetivo.especifico },
    ],
  });
};
const consultaProyectoConObjetivos3 = async () => {
  const proyectoCreado = await ProjectModel.find({ id: '618d5b22e4e2a99bddab693e' });
  console.log('proyecto', proyectoCreado);
};

const main = async () => {
  await conectarBD();
};

main();

// const crearUsuario = async () =>{
//   await UserModel.create({
//       apellido: 'pérez',
//       correo: 'pepitoperez@gmail.com',
//       identificacion: '22222',
//       nombre: 'pepito',
//       rol: Enum_Rol.administrador,
//     })
//       .then((u) => {
//     console.log('usuario creado', u);
//   })
//   .catch((e) => {
//     console.error('Error creando el usuario', e);
//   });
// }

// const obtenerUsuarios = async ()=>{
//   await UserModel.find()
//   .then((u) => {
//     console.log('usuarios', u);
//   })
//   .catch((e) => {
//     console.error('error obteniendo los usuarios', e);
//   });
// }

// const obtenerUnUsuario = async() =>{
//   await UserModel.findOne({ identificacion: '22222' })
//   .then((u) => {
//     console.log('usuario encontrado', u);
//   })
//   .catch((e) => {
//     console.error(e);
//   });
// }

// const editarUsuario = async () => {
//   await UserModel.findOneAndUpdate(
//       { correo: 'dsl@cc.com' },
//       {
//         nombre: 'Juan',
//         apellido: 'López',
//       }
//     )
//     .then((u) => {
//           console.log('usuario actualizado', u);
//         })
// }

// const eliminarUsuario = async () => {
//   await UserModel.findOneAndDelete({ correo: 'dsl@cc.com' })
//   .then((u) => {
//     console.log('usuario eliminado: ', u);
//   })
//   .catch((e) => {
//     console.error(e);
//   });
// }

// const crearProyecto = async () =>{

// }



// UserModel.insertMany([
//   {
//     name: 'Daniel',
//     email: 'dsl@c.com',
//   },
//   {
//     name: 'Susana',
//     email: 's@c.com',
//   },
// ])
//   .then((c) => {
//     console.log(c);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

// UserModel.create({
//   name: 'Daniel',
//   lastName: 'Saldarriaga',
//   document: '1065377193',
//   email: 'dsl1@c.com',
//   role: Enums.Enum_UserRole.estudiante,
// })
//   .then((u) => {
//     console.log(u);
//   })
//   .catch((e) => {
//     console.error(e);
//   });


// UserModel.findOne({ _id: '6187d906541df1983cd78518' })
//   .populate('leader')
//   .then((p) => {
//     console.log(p);
//   });

// const main = async () => {
//   await connectDB();

// HU_001: Ingresar los datos de registro
//   await UserModel.create({
//     correo:"dsl@c.com",
//     identificacion:"16546",
//     nombre:"nn",
//     apellido:"sad",
//     rol: Enums.Enum_Rol.estudiante
//   }).then((u) =>{
//       console.log('usuarion creado', u);
//   }).catch(e => {
//       console.error('Error usuario creado',e)
//   });
// HU_002: Ingresar mi correo y contraseña para ser validados

// HU_003: Ingresar los datos que deseo actualizar
// HU_004: Ver la información de los usuarios registrados en la plataforma
// HU_005: Cambiar el estado del usuario
// HU_006: Ver la lista de los proyectos registrados en la plataforma
// HU_007: Actualizar el estado del proyecto
// HU_008: Actualizar el estado del  proyecto
// HU_009: Actualizar la fase del  proyecto.
// HU_010: Ver la información de los estudiantes registrados en la plataforma
// HU_011: Cambiar el estado del estudiante de “Pendiente” a “Autorizado”
// HU_012: Crear un nuevo proyecto
// HU_013: Podré listar los proyectos que tengo a cargo
// HU_014: Podré editar la información relacionada al proyecto cuya información necesito actualizar (Solamente puede actualizar: Nombre del proyecto, los objetivos generales, específicos y el presupuesto)
// HU_015: Listar las solicitudes realizadas por los estudiantes.
// HU_016: Aceptar o rechazar sus inscripciones
// HU_017: Listar la información relacionada al proyecto que deseo revisar (Incluyendo los avances).
// HU_018: Actualizar el campo de observaciones del avance seleccionado.
// HU_019: Ver la lista de los proyectos registrados en la plataforma
// HU_020: Generar una solicitud de inscripción al proyecto
// HU_021: Lista de los avances del proyecto registrados
// HU_022: Ingresar la descripción de mi avance en el proyecto
// HU_023: Modificar la descripción del avance

  
// };

// main();
