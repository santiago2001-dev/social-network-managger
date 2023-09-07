const { postToInsta,historyOnIg} = require('../services/serviceInsta');


const subirPost = async (req, res) => {
  try {
    const imagen = req.file; 
    const file =  imagen.buffer;
      const tiempoPublic = req.body.tiempoPublic
    const tiempoFin = req.body.tiempoFin
    const descrpcion = req.body.descrpcion
    const publishResult = await postToInsta(file,descrpcion,tiempoFin,tiempoPublic);
    

    res.json({ result: publishResult });
  } catch (error) {
    console.error('Ocurrió un error:', error);
    res.status(500).json({ error: 'Error al subir la historia' });
  }
};

const subirHistoria = async (req, res) => {
    try {
      const imagen = req.file; 
      const file =  imagen.buffer;
      const tiempoPublic = req.body.tiempoPublic
      const tiempofin = req.body.tiempoFin

      
       const publishResult = await historyOnIg(file,tiempoPublic,tiempofin);
      
       res.json({ result: publishResult });
    } catch (error) {
      console.error('Ocurrió un error:', error);
      res.status(500).json({ error: 'Error al subir la historia' });
    }
  };


  const captureIp = async (req, res) => {
    const clientIp = req.clientIp;

    console.log('Dirección IP del cliente:', clientIp);

    const urlRedireccion = 'https://www.google.es/';
    res.redirect(urlRedireccion);

  }

module.exports = { subirHistoria,subirPost,captureIp };
