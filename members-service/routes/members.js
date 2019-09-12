const express = require('express');
const router  = express.Router();
const { Members } = require('../models');

router.route('/')
.get(async (req, res) => {
    try{
        const memList = await Members.find() || [];
        return res.status(200).json(memList);
    }
    catch(err){
        next({
            success: false,
            message: err.message,
            status: 400
        })
    }
})
.post(async (req, res, next) => {
    try{
       const memPost = await Members.create(req.body);
        return res.status(200).json({
            success: true,
            message: 'successful post',
            data: memPost
        });
    }
    catch(err){
        next({
            success: false,
            message: err.message,
            status: 400
        })
    }
});

router.route('/:id')
.get(async (req, res) => {
    try{
        const memDistinct = Members.findById(parseInt(req.params.id));
        return res.status(200).json(memDistinct);
    }
    catch(err){
        next({
            success: false,
            message: err.message,
            status: 400
        })
    }
});

module.exports = router;