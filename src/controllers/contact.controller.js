import express from "express"
import { Contact } from "../models/contact.model.js";

// Inquiries GET Route
const renderEjs = async (req, res) => {
    try {
        const inquireData = await Contact.find();
        res.render("index.ejs", { data: inquireData }); // removed .ejs extension
    } catch (error) {
        console.error("Render Error:", error);
        res.status(500).send("Error rendering page");
    }
}

// Inquiries POST Route
const addInquire = async (req, res) => {
    try{
    const {email, contactData} = req.body;
    console.log(req.body);

    const newInquire = await Contact.create({
        email,
        contactData
    })

    const id = newInquire._id;
    const getNewInquire = await Contact.findById(id);
    res.status(201).json({
        statusCode: 201,
        success: true,
        message:"inquire sent successfully",
        data: getNewInquire
    })
} catch (error){
    res.status(500).json({
        statusCode: error.code,
        sucess: false,
        message: "Internal Server Error",
        data: error
    })
}
}

// Inquire DELETE Route
const deleteInquire = async (req, res) => {
    try {
        const { inquireId } = req.body;
        const deletedInquire = await Contact.findByIdAndDelete(inquireId);
        res.status(200).json({
            statusCode: 200,
            success: true,
            message: "Inquire Deleted Successfully",
            data: deletedInquire
        })
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Error Deleting Inquire"
        })
    }
}

export{ renderEjs, addInquire, deleteInquire}