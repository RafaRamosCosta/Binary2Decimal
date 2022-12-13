import { BinaryToDecimal } from "./BinaryToDecimal";

const binaryString = '0110'

const binaryToDecimal = new BinaryToDecimal(binaryString);

const decimal = binaryToDecimal.execute();
console.log(decimal);