import express from "express";

const router = express.Router();

router.route("/queries")
.get(renderEjs)
.post(addQuerie)
.delete(deleteQueire)

export default router;