import dotenv from 'dotenv';

import express, {Request, Response} from 'express';
import { Employee, EmployeeInstance } from "../interfaces/employees-interface";
dotenv.config();

import { getAll, find, create, update, deleteEmp } from '../models/employee';

// /employees - index function
export const getEmployeesData = async (req: Request, res: Response) => {
    try {
      const employees: any = await getAll();
      if (!employees) {
        return res.status(404).json({ "error": "No data found" });
      }
      return res.status(200).json(employees);
    } catch (e: any) {
      return res.status(500).send(e.message);
    }
}

// employees/:id
export const getEmployee = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    try {
      const employee: Employee = await find(id);
      if (employee === undefined || employee === null || Object.keys(employee).length === 0) {
        return res.status(404).json({ "error": "No data found" });
      }
      return res.status(200).json(employee);
    } catch (e: any) {
      return res.status(500).send(e.message);
    }
}

// POST - employees
export const addEmployee = async (req: Request, res: Response) => {
    try {
        const employee = await create(req.body);
        return res.status(201).json(employee);
    } catch (e: any) {
        return res.status(500).send(e.message);
    }
  }

// PUT - employees
export const updateEmployee = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    try {
        const employee = await update(id, req.body);
        return res.status(201).json(employee);
    } catch (e: any) {
        return res.status(500).send(e.message);
    }
  }

//   Delete - employees
export const deleteEmployee = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    try {
        const employee = await deleteEmp(id);
        return res.status(201).json(employee);
    } catch (e: any) {
        return res.status(500).send(e.message);
    }
  }



