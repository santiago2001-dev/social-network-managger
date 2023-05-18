const { postToInsta,historyOnIg,createImg} = require('../services/serviceInsta');
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const subirPost = async (req, res) => {
  try {
    const publishResult = await postToInsta();

    res.json({ result: publishResult });
  } catch (error) {
    console.error('Ocurrió un error:', error);
    res.status(500).json({ error: 'Error al subir el post' });
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






  
  const axios = require('axios');

  const generateImage = async (req,res) => {
    const apiKey = process.env.apiia; // Reemplaza con tu clave de API de DeepAI
    const url = 'https://api.deepai.org/api/text2img';
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
  
    const requestData = {
      text: 'Una descripción para la imagen',
    };
  
    try {
      const response = await axios.post(url, requestData, {
        headers: { 'api-key': apiKey },
      });
  
      const imageUrl = response.data.output_url;
      res.json(imageUrl);
      console.log(imageUrl);
      return imageUrl;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  
 
  
module.exports = { subirHistoria,subirPost,generateImage };
