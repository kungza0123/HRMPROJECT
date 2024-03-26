// const express = require("express");
// const router = express.Router();
// const connection = require("../db");


// // // Create a user
// // router.post("/createuser", (req, res) => {
// //     const data = req.body;



// //     const sql = "INSERT INTO user SET ?";
// //     connection.query(sql, [data], (err, result) => {
// //         if (err) {
// //             console.error(err);
// //             res.sendStatus(500);
// //         } else {
// //             console.log(`Inserted ${result.affectedRows} row(s)`);
// //             res.sendStatus(200);
// //         }
// //     });
// // });


// // // Update user information
// // router.put("/updateuser/:id", (req, res) => {
// //     const id = req.params.id;
// //     const data = req.body;


// //     const sql = "UPDATE user SET ? WHERE id = ?";
// //     const values = [data, id];


// //     connection.query(sql, values, (err, results) => {
// //         if (err) {
// //             console.log(err);
// //             return res.status(400).send(err);
// //         }
// //         res.status(200).json({ message: "User updated successfully!" });
// //     });
// // });


// // // Delete a user by ID
// // router.delete("/deleteuser/:id", (req, res) => {
// //     const id = req.params.id;


// //     const deleteSql = "DELETE FROM user WHERE id = ?";
// //     connection.query(deleteSql, [id], (error, results, fields) => {
// //         if (error) {
// //             res.status(500).send(`Error deleting user database: ${error}`);
// //             return;
// //         }
// //         if (results.affectedRows === 0) {
// //             return res.status(404).json({ message: "No user with that id!" });
// //         }
// //         res.status(200).json({ message: "User deleted successfully!" });
// //     });
// // });

// // router.get("/getAll", async (req, res) => {
// //     try {

// //         let query = "SELECT * FROM user";
// //         const queryParams = [];
// //         connection.query(query, queryParams, (err, results) => {
// //             if (err) {
// //                 console.log(err);
// //                 return res.status(400).send();
// //             }
// //             res.status(200).json(results);
// //         });
// //     } catch (err) {
// //         console.log(err);
// //         return res.status(500).send();
// //     }
// // });


// // // ... (Other CRUD operations)
// router.get("/login", (req, res) => {
//     const { username, password } = req.body;

//     // Query to check if the user exists with the provided credentials
//     const sql = "SELECT * FROM user WHERE USERNAME = ? AND PASSOWRD = ?";

//     const values = [username, password];

//     connection.query(sql, values, (err, results) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send("Internal Server Error");
//         }

//         if (results.length === 0) {
//             // หากไม่พบผู้ใช้ในฐานข้อมูล
//             return res.status(401).send("Invalid username or password");
//         }

//         // หากพบผู้ใช้ในฐานข้อมูล
//         // สามารถส่งข้อมูลอื่น ๆ ที่คุณต้องการให้ Vue.js ทำการตรวจสอบ
//         return res.status(200).send(results[0]);
//     });
// });



// ////login
// // router.get('/login/', async (req, res) => {


// //     let sql = "SELECT * FROM user WHERE USERNAME = '" + req.query.USERNAME + "' AND PASSOWRD = '" + req.query.PASSOWRD + "'";

// //     let query = db.query(sql, (err, results) => {
// //         if (err) throw err;
// //         res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
// //     });
// // });
// router.get('/getAll', async (req, res) => {
//     try {

//         let query = "SELECT * FROM user";
//         const queryParams = [];
//         connection.query(query, queryParams, (err, results) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(400).send();
//             }
//             res.status(200).json(results);
//         });
//     } catch (err) {
//         console.log(err);
//         return res.status(500).send();
//     }
// });
// module.exports = router;
const express = require("express");
const router = express.Router();
const connection = require("../db");
router.post("/login", (req, res) => {
    // ตรวจสอบการเข้าสู่ระบบและส่งคืนผลลัพธ์ให้กับผู้ใช้
});
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    const sql = "SELECT * FROM user WHERE USERNAME = ? AND PASSWORD = ?";

    const values = [username, password];

    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Internal Server Error");
        }

        if (results.length === 0) {
            // หากไม่พบผู้ใช้ในฐานข้อมูล
            return res.status(401).send("Invalid username or password");
        }

        // หากพบผู้ใช้ในฐานข้อมูล
        return res.status(200).send(results[0]);
    });
});

router.get('/getAll', async (req, res) => {
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

module.exports = router;
