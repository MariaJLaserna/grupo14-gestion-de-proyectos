import { ProjectModel } from './proyecto.js';

const resolversProyecto = { 
  Query: {
    Proyectos: async (parent, args, context) => { //HU_06-HU_019
      const proyectosAdmon = await ProjectModel.find();
      if (args.rol==="ADMINISTRADOR" || args.rol === "ESTUDIANTE") {   
        return proyectosAdmon;   
      }
      else {
        return null;
      }
    },


    ProyectosByLider: async (parent, args, context) => { //HU_013: PROBAR DESDE EL FRONT
      const proyectosLider = await ProjectModel.find({
        lider: args._id})
        .populate("proyecto")       
      
      if (args.rol==="LIDER") {   
        return proyectosLider ;   
      }
      else {
        return null;
      }
    },



    ProyectoByLider: async (parent, args, context) => { //HU_017: PROBAR DESDE EL FRONT
      const proyectoLider = await ProjectModel.find({
        proyecto: args._id})
              
      
      if (args.rol==="LIDER") {   
        return proyectoLider ;   
      }
      else {
        return null;
      }
    },

  },


  



  Mutation: { //HU_012
    crearProyecto: async (parent, args, context) => {
      const proyectoCreado = await ProjectModel.create({
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      if (args.rol==="LIDER") {   
        return proyectoCreado;   
      }
      else {
        return null;
      }
    },




    editarProyecto: async (parent, args) => { //HU_007-008-009-010
      const proyectoEditado = await ProjectModel.findByIdAndUpdate(

        args._id,
        { ...args.campos },
        { new: true }
      );
      if (args.rol==="ADMINISTRADOR") {   
        return proyectoEditado;   
      }
      else {
        return null;
      }
    },





    crearObjetivo: async (parent, args) => {
      const proyectoConObjetivo = await ProjectModel.findByIdAndUpdate(
        args.idProyecto,
        {
          $addToSet: {
            objetivos: { ...args.campos },
          },
        },
        { new: true }
      );

      return proyectoConObjetivo;
    },




    editarObjetivo: async (parent, args) => {
      const proyectoEditado = await ProjectModel.findByIdAndUpdate(
        args.idProyecto,
        {
          $set: {
            [`objetivos.${args.indexObjetivo}.descripcion`]: args.campos.descripcion,
            [`objetivos.${args.indexObjetivo}.tipo`]: args.campos.tipo,
          },
        },
        { new: true }
      );
      return proyectoEditado;
    },
    eliminarObjetivo: async (parent, args) => {
      const proyectoObjetivo = await ProjectModel.findByIdAndUpdate(
        { _id: args.idProyecto },
        {
          $pull: {
            objetivos: {
              _id: args.idObjetivo,
            },
          },
        },
        { new: true }
      );
      return proyectoObjetivo;
    },
  },
};

export { resolversProyecto };

//pendiente mutación de editar proyecto con las condiciones que piden las historias de usuario