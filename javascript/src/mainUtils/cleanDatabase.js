import models from "../models/index"

const cleanDatabase = async()=>{
  const modelsToDestroy = Object.keys(models).filter(
    (model) => model !== 'sequelize' && model !== 'Sequelize'
  );

  return await Promise.all(
    modelsToDestroy.map(async (model) => {
      return models[model].destroy({ where: {}, force: true });
    })
  );
}

export default cleanDatabase;
