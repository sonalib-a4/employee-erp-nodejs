import express from 'express';
import { getEmployeesData, getEmployee, addEmployee, updateEmployee, deleteEmployee } from "../controllers/employees-controller";

const router = express.Router();

router.get("/index", getEmployeesData);
router.get("/:id", getEmployee);
router.post("/", addEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;