//llamdo de cloundynary
const cloundynary = require('cloudinary').v2;
//autenticacion en cloundynary
cloundynary.config({
    cloud_name: process.env.cloud_name,
    api_key : process.env.api_key,
    api_secret: process.env.api_secret

    
})

const imgHost = async(img)=>{
    const result = await cloundynary.uploader.upload(img);
    var imgHosting = result.url;
    return imgHosting;
}
module.exports = {imgHost}