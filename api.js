const express = require('express');
const bodyparser = require('body-parser');
const cors  =require('cors');
const api  = express();
const port =3000;
const router = express.Router();

api.use(cors());
api.use(bodyparser.urlencoded({extended:true}))
api.use(bodyparser.json());

router.get("/",(req,res)=> res.json({
    mensagem:"api online!"
}))

api.use('/',router);
api.listen(port)
console.log("Servidor rodando na porta 3000")
