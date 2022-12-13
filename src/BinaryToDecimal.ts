/**
 * This class displays methods that converts a binary number into a decimal number!
 * 
 * ---
 * @author RafaRamosCosta
 */
export class BinaryToDecimal {
  constructor(private binaryString: string) {}

/** validateBinary
 * This method checks if the binary string is valid!
 * 
 * @param binaryArray: string[] 
 * ---
 * @returns boolean -> true if the binary string is valid and false otherwise
 * ---
 * @author RafaRamosCosta
 */
  validateBinary(binaryArray: string[]): boolean {
    const binaryChars = ["0", "1", ","];
    return binaryArray.every((char) => binaryChars.includes(char));
  }

  /**
   * This method checks if the binary string has comma!
   * 
   * ---
   * @returns boolean -> true if the binary string has comma and false otherwise
   * 
   * ---
   * @author RafaRamosCosta
   */
  checkIfHasComma(): boolean {
    return this.binaryString.includes(",");
  }

  /**
   * This method returns the quantity of numbers after the comma!
   * 
   * ---
   * @returns number -> quantity of decimal places
   * 
   * ---
   * @author RafaRamosCosta
   */
  countNumbersAfterComma(): number {
    const binaryHasComma = this.checkIfHasComma();

    if (!binaryHasComma) return 0;

    const strAfterComma = this.binaryString
      .slice(this.binaryString.indexOf(","))
      .replace(",", "")
      .split("");

    return strAfterComma.length;
  }

  /**
   * This method returns a array of the number parsed data from the binary string!
   * 
   * ---
   * @returns parsedBinary: number[]
   * 
   * ---
   * @throws Error if the binary isn't valid
   * 
   * ---
   * @author RafaRamosCosta
   */
  parseBinary(): number[] {
    try {
      this.binaryString = this.binaryString.replace(".", ",");
      const strNumbers = this.binaryString.replace(",", "").split("");

      const isBinary = this.validateBinary(strNumbers);

      if (!isBinary) throw new Error("Invalid binary number!");
      const parsedBinary = strNumbers.map((strNumber) => Number(strNumber));

      return parsedBinary;
    } catch (error) {
      throw error;
    }
  }

  /**
   * This method keeps the logic behind the conversion!
   * 
   * ---
   * @param binaryArray 
   * @param numbersAfterComma 
   * 
   * @returns decimal -> the result of the conversion from binary to decimal
   * 
   * ---
   * @author RafaRamosCosta
   */
  convert(binaryArray: number[], numbersAfterComma: number): number {
    let power = -numbersAfterComma;

    return binaryArray.reduceRight((decimal, val) => {
      decimal += val * 2 ** power;
      power++;
      return decimal;
    }, 0);
  }

  /**
   * This method calls the methods that are responsible for converting the binary into a decimal!
   * 
   * ---
   * @returns the return of the convert method
   * 
   * ---
   * @author RafaRamosCosta
   */
  execute(): number {
    const binaryArray = this.parseBinary();

    const numbersAfterComma = this.countNumbersAfterComma();

    return this.convert(binaryArray, numbersAfterComma);
  }
}
