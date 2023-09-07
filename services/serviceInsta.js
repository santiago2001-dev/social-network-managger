const { IgApiClient } = require('instagram-private-api');
const { readFile } = require('fs');
const { promisify } = require('util');

const login = async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  return ig;
};









const historyOnIg = async (imagen,tiempoFin,tiempoPublic) => {

  const intervalID = setInterval(async () => {
    await subirHistoria(imagen);
  }, tiempoPublic);

  setTimeout(() => {
    clearInterval(intervalID);
    console.log('La función se ha detenido ');
  }, tiempoFin);
  
    
 };




 const postToInsta = async (file,descrpcion,tiempoFin,tiempoPublic) => {

  const intervalID = setInterval(async () => {
    await subirPost(file,descrpcion);
  }, tiempoPublic);

  setTimeout(() => {
    clearInterval(intervalID);
    console.log('La función se ha detenido ');
  }, tiempoFin);
  
    
 
 }

const subirHistoria = async (imagen) => {
  const ig = await login();
  
  
  const publishResult = await ig.publish.story({
    file :imagen,
})

return publishResult;
};





const subirPost = async (file,descrpcion) => {
  const ig = await login();


    const publishResult = await ig.publish.photo({
     file: file,
     caption: descrpcion,
   });

   return publishResult;
};

module.exports = { postToInsta,historyOnIg };
 