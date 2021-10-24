const express = require('express')
const mysql = require('mysql')


const router = express.Router()

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    database: "esprit"
})

function getConnection(){
    return pool
}

//get user 



router.post("/Login", (req, res) => {
    pool.query("SELECT * FROM user where login = ? and password = ? ",
    [req.body.login,
        req.body.password], (err, user_rows, fields) => {
        res.status(200)
        console.log(user_rows)
        res.json(user_rows[0])
    })
})


router.get("/show", (req, res) => {
    pool.query("SELECT * FROM user ",
   (err, user_rows, fields) => {
        res.status(200)
        res.json(user_rows)
    })
})
   
module.exports = router;
