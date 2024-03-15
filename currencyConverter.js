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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var FixedCurrencyConverter = /** @class */ (function () {
    function FixedCurrencyConverter(exchangeRate) {
        this.exchangeRate = exchangeRate;
    }
    FixedCurrencyConverter.prototype.convert = function (dollars) {
        return dollars * this.exchangeRate;
    };
    return FixedCurrencyConverter;
}());
var ConsoleInputOutput = /** @class */ (function () {
    function ConsoleInputOutput() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    ConsoleInputOutput.prototype.readInput = function (message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.rl.question(message, function (answer) {
                var amount = parseFloat(answer);
                if (isNaN(amount)) {
                    reject(new Error('Dato invalido. Por favor ingrese un numero'));
                }
                else {
                    resolve(amount);
                }
                _this.rl.close();
            });
        });
    };
    ConsoleInputOutput.prototype.printOutput = function (message) {
        console.log(message);
    };
    return ConsoleInputOutput;
}());
// Aplicación principal
var CurrencyConverterApp = /** @class */ (function () {
    function CurrencyConverterApp(converter, io) {
        this.converter = converter;
        this.io = io;
    }
    CurrencyConverterApp.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dollars, euros, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.io.printOutput('Laboratorio 1 :V !');
                        this.io.printOutput('Este programa te da el cambio de dolares a euros');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.io.readInput('Ingrese el monto en dolares: $')];
                    case 2:
                        dollars = _a.sent();
                        euros = this.converter.convert(dollars);
                        this.io.printOutput("Resultado final: \u20AC".concat(euros.toFixed(2)));
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.io.printOutput(error_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return CurrencyConverterApp;
}());
var exchangeRate = 0.85;
var converter = new FixedCurrencyConverter(exchangeRate);
var io = new ConsoleInputOutput();
var app = new CurrencyConverterApp(converter, io);
app.run();
//npm install -g typescript
//Después de instalar TypeScript, compila el archivo TypeScript ejecutando 
//el siguiente comando en la terminal en el directorio de tu proyecto:
//tsc currencyConverter.ts
//node currencyConverter.js
