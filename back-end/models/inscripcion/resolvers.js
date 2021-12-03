import { InscriptionModel } from './inscripcion.js';

const resolverInscripciones = { //HU_015
  Query: {
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
        estado: args.estado,
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
