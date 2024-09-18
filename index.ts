
//const numberArray: number[] = [1, 2, 3, 4, 5];
//console.log(numberArray);

//const favoriteFruits: string[] = ['Apple', 'Banana', 'Cherry'];
//console.log(favoriteFruits);

//const mixedArray: (number | string | boolean)[] = [1, 'Two', true];
//console.log(mixedArray);

//const personTuple: [string, string, number] = ['John', 'Doe', 30];
//console.log(personTuple);

//const favoriteColors: [string, string, string] = ['Red', 'Green', 'Blue'];
//console.log(favoriteColors); 

//function infiniteLoop(): never {
//    while (true) {}
//}

//function throwError(message: string): never {
//   throw new Error(message);
//}

const favoriteBook: { title: string, author: string, year: number } = {
    title: '1984',
    author: 'George Orwell',
    year: 1949
};
console.log(favoriteBook);

const personalInfo: { firstName: string, lastName: string, age: number } = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25
};
console.log(personalInfo);

//function printObject(obj: object): void {
//    console.log(obj);
//}

printObject(favoriteBook);

let favoriteColor: any = 'Blue';
console.log(favoriteColor);

let mixedList: any[] = ['String', 123, { key: 'value' }];
console.log(mixedList);

//function processAny(input: any): void {
//    console.log(input);
//}

processAny(favoriteColor);


type Person = {
    name: string;
    age: number;
};

const person: Person = {
    name: 'Alice',
    age: 28
};
console.log(person);

type Product = {
    name: string;
    price: number;
    inStock: boolean;
};

const product: Product = {
    name: 'Laptop',
    price: 1500,
    inStock: true
};
console.log(product);


type User = {
    id: number;
    username: string;
    email: string;
};

const user: User = {
    id: 1,
    username: 'user123',
    email: 'user123@example.com'
};
console.log(user);


type Account = {
    id: number;
    balance: number;
};

const account: Account = {
    id: 101,
    balance: 5000
};
console.log(account);
