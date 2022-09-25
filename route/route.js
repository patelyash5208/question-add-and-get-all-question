const express = require('express');
const router = express.Router();
const Question = require('../model/model');

router.post('/post' , async (req,res) => {
    try {
        const { question } = req.body
        const { options } = req.body

        const onequestion = await Question.create({
            question,
            options
        })
        return res.status(201).json(onequestion)
    }
    catch(error) {
        return res.status(400).json({"error":error})
    }
})

router.get('/getall', async (req,res) => {
    try{
        const data = await Question.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({'error':error})
    }
})

router.get('/all/:date', async (req,res) => {
    try{
        const data = await Question.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({'error':error})
    }
})

module.exports = router;