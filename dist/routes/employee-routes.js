"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employees_controller_1 = require("../controllers/employees-controller");
const router = express_1.default.Router();
router.get("/index", employees_controller_1.getEmployeesData);
router.get("/:id", employees_controller_1.getEmployee);
router.post("/", employees_controller_1.addEmployee);
router.put("/:id", employees_controller_1.updateEmployee);
router.delete("/:id", employees_controller_1.deleteEmployee);
exports.default = router;
