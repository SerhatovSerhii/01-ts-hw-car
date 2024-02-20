type Engine = 'electric' | 'petrol' | 'diesel';
interface Car {
    brand: string;
    engine: Engine;
    power: number;
}
interface FirefighterCar extends Car {
    waterTank: number;
}

const citroen: Car = {
    brand: 'Citroen Jumpy',
    engine: 'diesel',
    power: 1000,
}

const renault: Car ={
    brand: 'Renault Trafic',
    engine: 'electric',
    power: 1200,
}

const peugeot: Car = {
    brand: 'Peugeot Boxer',
    engine: 'diesel',
    power: 1100,
}

const usa112: FirefighterCar = {
    brand: 'Ford',
    engine: 'petrol',
    power: 1400,
    waterTank: 150,
}

const ukr101: FirefighterCar = {
    brand: 'Bogdan',
    engine: 'petrol',
    power: 1000,
    waterTank: 100,
}

const ger112: FirefighterCar = {
    brand: 'Mercedes',
    engine: 'electric',
    power: 2000,
    waterTank: 200,
}



// 
// git branch -M main
// git remote add origin https://github.com/SerhatovSerhii/01-ts-hw-car.git
// git push -u origin main