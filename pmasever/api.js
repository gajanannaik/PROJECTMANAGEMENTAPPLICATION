const express = require('express')
const mongoose = require('mongoose');
const Empdetail = require('./model/employeeList');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db.config').url
const PORT = process.env.PORT || 3500;

const app = express()
app.use(cors());

const allowedOrigins = [
      'http://localhost:4401',
  ];
  const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Origin not allowed by CORS'));
      }
    }
  }
  app.options('*', cors(corsOptions));




mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to the database!");
})
    .catch(err => {
        console.log("error while connecting to the database", err);
        process.exit();
    })
app.use(bodyParser.json());
//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})
app.get('/empdetails', (req, res, next) => {
    res.json({ message: 'welcome to myapp' })
})
app.post('/add', (req, res, next) => {
    const empName = req.body.empName;
    const empId = req.body.empId;
    const empEmail = req.body.empEmail;
    const DeadLine = req.body.DeadLine;
    const task = req.body.task;
    const note = req.body.note;

    empdetail = new Empdetail({
        empId: empId,
        empName: empName,
        empEmail: empEmail,
        DeadLine: DeadLine,
        task: task,
        note: note,
    })
    empdetail.save()
        .then(data => {
            res.json(data)
        }).catch(err => console.log('eror while inserting', err))
})

app.delete('/id', (req, res, next) => {
    let empId = req.params.id
    Empdetail
})

//Manager Updating employee task and deadline
app.put('/updateTask/:id', (req, res, next) => {
    
    Empdetail.findOneAndUpdate({id:req.params.id})
    .then(empdetail=>{
        empdetail.task= req.body.task
        //empdetail.DeadLine=req.body.DeadLine
        empdetail.save()

    .then((empdetail)=>{
            res.send({message:'post sucessfull',empdetail:empdetail});
    })
        })
})

//Employee updating notes and progress
app.put('/updateNotes/:id', (req, res, next) => {
    
    Empdetail.findOneAndUpdate({id:req.params.id})
    .then(empdetail=>{
        empdetail.note= req.body.note
      //  empdetail.Progress= req.body.Progress
        empdetail.save()

    .then((empdetail)=>{
            res.send({message:'post sucessfull',empdetail:empdetail});
    })
        })
})




app.get('/ById/:id', (req, res, next) => {
    const id = req.params.id
    Empdetail.findById(id)
        .then(data => {
            res.send(data);
        }).catch(err => { console.log("cannot find by id", +id, err) })
})

app.get('/find',cors(corsOptions),(req,res,next)=>{
     Empdetail.find()
     .then(data=>{
         res.send(data);
     }).catch(err=>{console.log("error occurred while getiing")})

})
