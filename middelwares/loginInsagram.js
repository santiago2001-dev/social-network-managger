const { IgApiClient } = require('instagram-private-api');

const ig = new IgApiClient();
 const login =async()=> {
    // basic login-procedure
    ig.state.generateDevice(process.env.IG_USERNAME);
    await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  }

module.exports = {
   login
}