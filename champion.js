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
router.get("/show", (req, res) => {
    pool.query("SELECT * FROM champion", (err, user_rows, fields) => {
        res.status(200)
        res.json(user_rows)
    })
})
router.post("/add", (req, res) => {
    pool.query("INSERT INTO `champion`( `champName`, `champPic`, `champRole`,id) VALUES(?,?,?,?)"
    ,
    [
        req.body.champName,
        req.body.champPic,
        req.body.champRole,
        req.body.id
    ]
    , (err, user_rows, fields) => {
        
        res.status(200)
        res.json(user_rows)
    })
})
module.exports = router;