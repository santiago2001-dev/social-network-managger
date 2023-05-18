const { postToInsta,historyOnIg} = require('../services/serviceInsta');

const subirPost = async (req, res) => {
  try {
    const publishResult = await postToInsta();

    res.json({ result: publishResult });
  } catch (error) {
    console.error('Ocurrió un error:', error);
    res.status(500).json({ error: 'Error al subir la historia' });
  }
};

const subirHistoria = async (req, res) => {
    try {
      const publishResult = await historyOnIg();
      
      res.json({ result: publishResult });
    } catch (error) {
      console.error('Ocurrió un error:', error);
      res.status(500).json({ error: 'Error al subir la historia' });
    }
  };

module.exports = { subirHistoria,subirPost };
