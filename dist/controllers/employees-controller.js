"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.addEmployee = exports.getEmployee = exports.getEmployeesData = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const employee_1 = require("../models/employee");
// /employees - index function
const getEmployeesData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield (0, employee_1.getAll)();
        if (!employees) {
            return res.status(404).json({ "error": "No data found" });
        }
        return res.status(200).json(employees);
    }
    catch (e) {
        return res.status(500).send(e.message);
    }
});
exports.getEmployeesData = getEmployeesData;
// employees/:id
const getEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    try {
        const employee = yield (0, employee_1.find)(id);
        if (employee === undefined || employee === null || Object.keys(employee).length === 0) {
            return res.status(404).json({ "error": "No data found" });
        }
        return res.status(200).json(employee);
    }
    catch (e) {
        return res.status(500).send(e.message);
    }
});
exports.getEmployee = getEmployee;
// POST - employees
const addEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield (0, employee_1.create)(req.body);
        return res.status(201).json(employee);
    }
    catch (e) {
        return res.status(500).send(e.message);
    }
});
exports.addEmployee = addEmployee;
// PUT - employees
const updateEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    try {
        const employee = yield (0, employee_1.update)(id, req.body);
        return res.status(201).json(employee);
    }
    catch (e) {
        return res.status(500).send(e.message);
    }
});
exports.updateEmployee = updateEmployee;
//   Delete - employees
const deleteEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    try {
        const employee = yield (0, employee_1.deleteEmp)(id);
        return res.status(201).json(employee);
    }
    catch (e) {
        return res.status(500).send(e.message);
    }
});
exports.deleteEmployee = deleteEmployee;
