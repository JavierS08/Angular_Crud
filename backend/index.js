require('./config/conexion');
const conexion=require("./config/conexion");
const express = require('express');
const cors = require('cors');

const port = (process.env.port || 3000);
//express
const app= express();

//cors
corsOptions={
    origin:'*',
    optionsSuccessStatus:200
}

app.use(cors(corsOptions));




//admitir
app.use(express.json())

//config
app.set('port',port);


// iniciar express
app.listen(app.get('port'),(err)=>{
    if(err){
        console.log('error al iniciar el servidor: '+err)
    }
    else{
        console.log('servidor iniciado en el puerto: '+port)
    }
})


app.get('/api/clientes',(req,res)=>{
    conexion.query('select * from clientes',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log(err);
        }
    })
})

app.get('/api/clientes/:id',(req,res)=>{
    const {id}=req.params;
    conexion.query('select * from clientes where codigo=?',[id],(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log(err);
        }
    })
})

app.post('/api/clientes',(req,res)=>{
    const {nombre,ciudad,facturacion}=req.body;
    const query=`insert into clientes(nombre,ciudad,facturacion) values('${nombre}','${ciudad}','${facturacion}')`;
    conexion.query(query,(err,rows,fields)=>{
        if(!err){
            res.json({status:'cliente guardado'});
        }
        else{
            console.log(err);
        }
    })
})

app.put('/api/clientes/:id',(req,res)=>{
    const {nombre,ciudad,facturacion}=req.body;
    const {id}=req.params;
    const query=`update clientes set nombre='${nombre}',ciudad='${ciudad}',facturacion='${facturacion}' where codigo=${id}`;
    conexion.query(query,(err,rows,fields)=>{
        if(!err){
            console.log(req.body);
            res.json({status:'cliente actualizado'});
        }
        else{
            console.log(err);
        }
    })
})

app.delete('/api/clientes/:id',(req,res)=>{
    const {id} = req.params
    let sql=`delete from clientes where codigo = '${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status:"equipo eliminado"})
        }
    })
})
