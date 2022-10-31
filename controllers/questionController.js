import express from "express";
import Question from '../models/Question.js'

import asyncHandler from 'express-async-handler'



    // Create New Users - Post method
export const askQuestion = asyncHandler(async (req, res) => {
    const quest = req.body;
    //Check if user already exist 
    const question = await Question.create({
        ...quest,
      });


    if(question){
        res.status(201).json({
            data: question, 
            success: "true"});
    }else{
        res.status(400).json({message: "An Error Occured"})
    }

   

})