export class BinaryToDecimal {
  constructor(private binaryString: string) {}


  validateBinary(binaryArray: string[]): boolean {
    const binaryChars = ["0", "1", ","];
    return binaryArray.every((char) => binaryChars.includes(char));
  }


  checkIfHasComma(): boolean {
    return this.binaryString.includes(",");
  }


  countNumbersAfterComma(): number {
    const binaryHasComma = this.checkIfHasComma();

    if (!binaryHasComma) return 0;

    const strAfterComma = this.binaryString
      .slice(this.binaryString.indexOf(","))
      .replace(",", "")
      .split("");

    // perguntar para o levi
    return strAfterComma.length;
  }

  splitBinary(): number[] {
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

  toDecimal(binaryArray: number[], numbersAfterComma: number): number {
    let power = -numbersAfterComma;

    return binaryArray.reduceRight((decimal, val) => {
      decimal += val * 2 ** power;
      power++;
      return decimal;
    }, 0);
  }

  convert(): number {
    const binaryArray = this.splitBinary();

    const numbersAfterComma = this.countNumbersAfterComma();

    return this.toDecimal(binaryArray, numbersAfterComma);
  }
}
