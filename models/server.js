const cors = require('cors');
const express = require('express');
const requestIp = require('request-ip');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.twitterPath =  '/api/twitter';
        this.instagramPath = '/api/instagram';
   
        

        //llmado de el metodo que contiene los mideelwares
        this.middelwares();

        //llamado de el archivo router
        this.routes();

    }

    middelwares(){
        this.app.use(cors());

       //uso de archivos json 
        this.app.use((express.json({limit: '50mb'})));
        this.app.use(express.urlencoded({limit: '50mb'}));
        this.app.use(requestIp.mw());


    }

    routes(){
        //this.app.use(this.twitterPath,require('../routes/tiwtterRouting.js '));
        this.app.use(this.instagramPath,require('../routes/instagramRouting'));
   
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`servidor corriendo en :${this.port}`)

            
        })

    }

}


module.exports = Server;