const { IgApiClient,StickerBuilder } = require('instagram-private-api');
const { readFile } = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);

const login = async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  return ig;
};

const postToInsta = async () => {
  const ig = await login();
  const path = './ex.jpg';
  const publishResult = await ig.publish.photo({
    file: await readFileAsync(path),
    caption: 'Really nice photo from the internet!',
  });

  return publishResult;
};

const historyOnIg = async () => {
    const ig = await login();

    const path = './ex.jpg';
    const publishResult = await ig.publish.story({
        file :await readFileAsync(path),

        // stickerConfig: new StickerBuilder().add(
        //     StickerBuilder.question({
        //       question: 'My Question',
        //     }).scale(0.5),
        //   )
        //   .build()

    })
    
    return publishResult;
};


module.exports = { postToInsta,historyOnIg };
