const { IgApiClient, StickerBuilder } = require('instagram-private-api');
const axios = require('axios');
const { imgHost } = require('../middelwares/hostimg');
const { Configuration, OpenAIApi } = require('openai');


const openai = new OpenAIApi('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');

const createImg = async () => {
   const  promp  ="gato negro"


    const response = await openai.createImage({
        prompr
        
      });
  
      const imageUrl = response.data.data[0].url;
  return imageUrl;
};

const postToInsta = async () => {
  const ig = await login();
  const image = await generateImg();

  const publishResult = await ig.publish.photo({
    file: image,
    caption: 'Really nice photo from the internet!',
  });

  return publishResult;
};

const historyOnIg = async () => {
  const ig = await login();
  const image = await imgHost(imageUrl);
  const imageBuffer = await axios.get(image, { responseType: 'arraybuffer' });

  const publishResult = await ig.publish.story({
    file: imageBuffer.data,
  });

  return publishResult;
};


const login = async () => {
    const ig = new IgApiClient();
    ig.state.generateDevice(process.env.IG_USERNAME);
    await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
    return ig;
  };



//   const createImg = async () => {
//     const apiKey = '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'; // Replace with your OpenAI API key
//     const url = 'https://api.openai.com/v1/images';
//     const headers = {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${apiKey}`,
//     };
  
//     const requestData = {
//       descriptions: ['gato negro'],
//     };
  
//     try {
//       const response = await axios.post(url, requestData, { headers });
//       const generatedImage = response.data.output;
//       console.log(generatedImage);
//       return generatedImage;
//     } catch (error) {
//       console.error('Error:', error);
//       throw error;
//     }
//   };
  
module.exports = { postToInsta, historyOnIg,createImg };
