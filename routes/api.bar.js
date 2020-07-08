const express = require("express");
const router = new express.Router();


router.post("/", (req, res) => {
    console.log(req.body);
    res.send("bon app")
})


module.exports = router;