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
exports.deleteEmp = exports.writeToJsonFile = exports.update = exports.create = exports.readJsonFile = exports.find = exports.getAll = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
// /employees - this is index function
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    let emp = [];
    try {
        const jsonData = yield (0, exports.readJsonFile)();
        return jsonData.filter((data) => data !== null);
    }
    catch (e) {
        throw e;
    }
});
exports.getAll = getAll;
const find = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jsonData = yield (0, exports.readJsonFile)();
        return jsonData.filter((data) => data.id === id)[0];
    }
    catch (e) {
        throw e;
    }
});
exports.find = find;
const readJsonFile = () => __awaiter(void 0, void 0, void 0, function* () {
    const jsonFile = path_1.default.join(__dirname, "../../employeesDB.json");
    try {
        const jsonData = yield promises_1.default.readFile(jsonFile);
        return JSON.parse(jsonData.toString());
    }
    catch (e) {
        throw e;
    }
});
exports.readJsonFile = readJsonFile;
const create = (newEmployeeData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, exports.readJsonFile)();
        const id = data.length + 1; //parseInt(generateUniqueID(), 10);
        const newEmployee = Object.assign({ id }, newEmployeeData);
        data.push(newEmployee);
        (0, exports.writeToJsonFile)(data);
        return newEmployee;
    }
    catch (e) {
        throw e;
    }
});
exports.create = create;
const update = (id, newEmployeeData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, exports.readJsonFile)();
        const updateEmployee = Object.assign({}, newEmployeeData);
        const index = data.findIndex((data) => data.id === id);
        if (index) {
            data[index] = Object.assign(Object.assign({}, data[index]), updateEmployee);
            (0, exports.writeToJsonFile)(data);
        }
        return updateEmployee;
    }
    catch (e) {
        throw e;
    }
});
exports.update = update;
const generateUniqueID = () => {
    return crypto_1.default.randomBytes(8).toString('hex');
};
const writeToJsonFile = (data) => {
    const jsonFile = path_1.default.join(__dirname, "../../employeesDB.json");
    return promises_1.default.writeFile(jsonFile, JSON.stringify(data));
};
exports.writeToJsonFile = writeToJsonFile;
const deleteEmp = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result_1 = yield (0, exports.readJsonFile)();
        const emp = result_1.filter((data) => data.id === id)[0];
        if (emp) {
            (0, exports.writeToJsonFile)(result_1.filter((data_2) => data_2.id !== id));
        }
        return emp;
    }
    catch (e) {
        throw e;
    }
});
exports.deleteEmp = deleteEmp;
