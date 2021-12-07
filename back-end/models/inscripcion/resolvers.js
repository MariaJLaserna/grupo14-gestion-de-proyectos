import { InscriptionModel } from './inscripcion.js';
import { ProjectModel } from '../proyecto/proyecto.js';

const resolverInscripciones = { 
  // Inscripcion: {
  //   proyecto: async (parent, args, context) => {
  //     return await ProjectModel.findOne({ _id: parent.proyecto });
  //   },
  //   estudiante: async (parent, args, context) => {
  //     return await UserModel.findOne({ _id: parent.estudiante });
  //   },
  // },
 
  Query: { //HU_015
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscriptionModel.findById({
        estado: 'PENDIENTE',
      });

      if (args.rol === "LIDER") {
        return inscripciones;
      }
      else {
        return null;
      }

    },
  },

  Mutation: {
    crearInscripcion: async (parent, args) => { //HU_020
      const inscripcionCreada = await InscriptionModel.create({
        //estado: args.estado, Daniel, lo sacó de los tipos y de los resolvers para trabajarlo desde el front
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });

      if (args.rol === "ESTUDIANTE") {
        return inscripcionCreada;
      }
      else {
        return null;
      }
    },





    aprobarInscripcion: async (parent, args) => { //HU_016
      const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(args.id, {
        estado: 'ACEPTADO',
        fechaIngreso: Date.now(),
      },
        { new: true }
      );
      if (args.rol === "LIDER") {
        return inscripcionAprobada;
      }
      else {
        return null;
      }
    },
  },
};

export { resolverInscripciones };
