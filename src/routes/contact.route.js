import express from "express";
import { renderEjs, addInquire, deleteInquire } from "../controllers/contact.controller.js";

const router = express.Router();

router.route("/inquires")
.get(renderEjs)
.post(addInquire)
.delete(deleteInquire)

export default router;