import * as readline from 'readline';

interface CurrencyConverter {
    convert(dollars: number): number;
}

class FixedCurrencyConverter implements CurrencyConverter {
    private exchangeRate: number;

    constructor(exchangeRate: number) {
        this.exchangeRate = exchangeRate;
    }

    convert(dollars: number): number {
        return dollars * this.exchangeRate;
    }
}

interface InputOutput {
    readInput(message: string): Promise<number>;
    printOutput(message: string): void;
}

class ConsoleInputOutput implements InputOutput {
    private rl: readline.Interface;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    readInput(message: string): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            this.rl.question(message, (answer: string) => {
                const amount = parseFloat(answer);
                if (isNaN(amount)) {
                    reject(new Error('Dato invalido. Por favor ingrese un numero'));
                } else {
                    resolve(amount);
                }
                this.rl.close();
            });
        });
    }

    printOutput(message: string): void {
        console.log(message);
    }
}

// Aplicación principal
class CurrencyConverterApp {
    private converter: CurrencyConverter;
    private io: InputOutput;

    constructor(converter: CurrencyConverter, io: InputOutput) {
        this.converter = converter;
        this.io = io;
    }

    async run(): Promise<void> {
        this.io.printOutput('Laboratorio 1 :V !');
        this.io.printOutput('Este programa te da el cambio de dolares a euros');

        try {
            const dollars = await this.io.readInput('Ingrese el monto en dolares: $');
            const euros = this.converter.convert(dollars);
            this.io.printOutput(`Resultado final: €${euros.toFixed(2)}`);
        } catch (error) {
            this.io.printOutput(error.message);
        }
    }
}

const exchangeRate = 0.85;
const converter = new FixedCurrencyConverter(exchangeRate);
const io = new ConsoleInputOutput();
const app = new CurrencyConverterApp(converter, io);
app.run();

//npm install -g typescript
//Después de instalar TypeScript, compila el archivo TypeScript ejecutando 
//el siguiente comando en la terminal en el directorio de tu proyecto:
//tsc currencyConverter.ts
//node currencyConverter.js