const express = require("express");
const router = express.Router();
const connection = require("../db");


// Create a user
router.post("/createuser", (req, res) => {
    const data = req.body;



    const sql = "INSERT INTO user SET ?";
    connection.query(sql, [data], (err, result) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            console.log(`Inserted ${result.affectedRows} row(s)`);
            res.sendStatus(200);
        }
    });
});


// Update user information
router.put("/updateuser/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;


    const sql = "UPDATE user SET ? WHERE id = ?";
    const values = [data, id];


    connection.query(sql, values, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(400).send(err);
        }
        res.status(200).json({ message: "User updated successfully!" });
    });
});


// Delete a user by ID
router.delete("/deleteuser/:id", (req, res) => {
    const id = req.params.id;


    const deleteSql = "DELETE FROM user WHERE id = ?";
    connection.query(deleteSql, [id], (error, results, fields) => {
        if (error) {
            res.status(500).send(`Error deleting user database: ${error}`);
            return;
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: "No user with that id!" });
        }
        res.status(200).json({ message: "User deleted successfully!" });
    });
});

router.get("/getAll", async (req, res) => {
    try {

        let query = "SELECT * FROM user";
        const queryParams = [];
        connection.query(query, queryParams, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results);
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
});


// ... (Other CRUD operations)


module.exports = router;
