// src/employee.interface.ts

enum EnumEmployee {
    MANAGER = "manager",
    DEVELOPER = "developer",
    TESTER = "tester",
    INTERN = "intern"
  }


export interface Employee {
  first_name: string;
  last_name: string;
  email: string;
  phone_no: number;
  level: EnumEmployee;
  manager?: string;
  dob?: string;
}

export interface EmployeeInstance extends Employee {
    id: number;
}
  
