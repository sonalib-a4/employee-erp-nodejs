import { Employee, EmployeeInstance } from "../interfaces/employees-interface";
import fs from "fs/promises";
import path from "path";
import crypto from 'crypto';

    // /employees - this is index function
    export const getAll = async () => {
        let emp: EmployeeInstance[] = [];
        try {
            const jsonData = await readJsonFile();
            return jsonData.filter((data) => data !== null);
        } catch (e) {
            throw e;
        }
    }
  export const find = async (id: number): Promise<EmployeeInstance> => {
    try {
          const jsonData = await readJsonFile();
          return jsonData.filter((data) => data.id === id)[0];
      } catch (e) {
          throw e;
      }
  }


  export const readJsonFile = async () => {
    const jsonFile = path.join(__dirname, "../../employeesDB.json");
    try {
          const jsonData = await fs.readFile(jsonFile);
          return JSON.parse(jsonData.toString()) as EmployeeInstance[];
      } catch (e) {
          throw e;
      }
  }

  export const create = async (newEmployeeData: Employee): Promise<Employee> => {
    try {
          const data = await readJsonFile();
          const id: number =  data.length + 1 //parseInt(generateUniqueID(), 10);
          const newEmployee = { id, ...newEmployeeData };
          data.push(newEmployee);
          writeToJsonFile(data);
          return newEmployee;
      } catch (e) {
          throw e;
      }
  };

  export const update = async (id: number, employeeData: EmployeeInstance): Promise<EmployeeInstance> => {
    try {
          const data = await readJsonFile();
          const updateEmployee = { ...employeeData };
          const index = data.findIndex((data) => data.id === id)
            if (index) {
                data[index] = { ...data[index], ...updateEmployee }
                writeToJsonFile(data);
            }
          return updateEmployee;
      } catch (e) {
          throw e;
      }
  };

  const generateUniqueID = () => {
    return crypto.randomBytes(8).toString('hex')
  }

  export const writeToJsonFile = (data: Employee[]) => {
    const jsonFile = path.join(__dirname, "../../employeesDB.json");
    return fs.writeFile(jsonFile, JSON.stringify(data))
  }

  export const deleteEmp = async (id: number): Promise<EmployeeInstance> => {
    try {
          const jsonData = await readJsonFile();
          const emp = jsonData.filter((data) => data.id === id)[0];
          if (emp) {
              writeToJsonFile(jsonData.filter((data) => data.id !== id));
          }
          return emp;
      } catch (e) {
          throw e;
      }
  };