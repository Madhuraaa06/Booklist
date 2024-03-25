const express = require('express');
const router = express.Router();
const List = require("../models/List")
var fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require('express-validator');

router.post("/addbook", fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 5 }),
    body('description', 'Five characters needed').isLength({ min: 5 }),
    body('genre', 'three characters needed').isLength({ min: 3})
],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let book; // Declare book outside the try block

        try {
            book = await List.create({
                title: req.body.title,
                description: req.body.description,
                genre: req.body.genre,
                rating: req.body.rating,
                user: req.user.id
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }

        res.json(book);
    });


router.get("/getbooks", fetchuser, async (req, res) => {

    const books = await List.find({ user: req.user.id });
    res.json(books)

})

router.put("/editbook/:id", fetchuser, async (req, res) => {

    try {
        const { title, description, genre } = req.body;

        const new_book = {};

        if (title) { new_book.title = title }
        if (description) { new_book.description = description }
        if (genre) { new_book.genre = genre }

        let book1 = await List.findById(req.params.id);
        if (!book1) {
            return res.status(400).send("Not found")
        }

        if (book1.user.toString() !== req.user.id) {
            return res.status(400).send("You cannot do that!")
        }
        book1 = await List.findByIdAndUpdate(req.params.id, { $set: new_book }, { new: true })
        res.json(book1)



    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });

    }


})
router.delete("/deletebook/:id", fetchuser, async (req, res) => {

    try {
        let book1 = await List.findById(req.params.id);
        if (!book1) {
            return res.status(404).send("Not found")
        }

        if (book1.user.toString() !== req.user.id) {
            return res.status(401).send("You cannot do that!")
        }

        book1 = await List.findByIdAndDelete(req.params.id)
        res.send("Deleted!!")
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });

    }

})



module.exports = router;