var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'cse'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();

const express = require('express');
const app = express();

app.use(express.json());

require('./db.js');
const userModels = require('./userModels.js');

// GET - Fetch all users (not just one user by ID)
app.get("/users", async (req, res) => {
    try {
        const result = await userModels.find();
        res.json(result); 
    } catch (err) {
        console.log(err);
        res.status(500).send("Error in Fetch");
    }
});

// GET - Fetch single user by ID
app.get("/users/:userid", async (req, res) => {
    try {
        const result = await userModels.findById(req.params.userid);
        if (!result) {
            return res.status(404).send("User not found");
        }
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error in fetch by ID");
    }
});


// POST - Add user
app.post("/users", async (req, res) => {
    try {
        const instance = new userModels(req.body);
        await instance.save();
        res.send("User Added");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error in Add");
    }
});

// PUT - Update user by ID
app.put("/users/:userid", async (req, res) => {
    try {
        const updatedUser = await userModels.findByIdAndUpdate(req.params.userid, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).send("User not found");
        }
        res.send("User Updated");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error in Update");
    }
});

// DELETE - Delete user by ID
app.delete("/users/:userid", async (req, res) => {
    try {
        const deletedUser = await userModels.findByIdAndDelete(req.params.userid);
        if (!deletedUser) {
            return res.status(404).send("User not found");
        }
        res.send("User Deleted");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error in Delete");
    }
});

connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();

app.get("/emp",(req,res)=>{
    connection.query('SELECT * from emp',
    function(error,result,fields){
        if(error)throw error;
        res.send()
    }
    )
})
app.post("/emp",(req,res)=>{})


app.listen(9900, () => {
    console.log("Server running on port 9900");
});
