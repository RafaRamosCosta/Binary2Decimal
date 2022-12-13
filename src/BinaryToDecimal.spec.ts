import { BinaryToDecimal } from "./BinaryToDecimal";

jest.mock("./BinaryToDecimal");

describe("BinaryToDecimal", () => {
  afterEach(() => jest.clearAllMocks());

  it("should return true if the value passed is a valid binary", () => {
    const binaryToDecimal = new BinaryToDecimal("0110,11");
    const spy = jest
      .spyOn(binaryToDecimal, "validateBinary")
      .mockImplementationOnce(() => true);

    const isValid = binaryToDecimal.validateBinary(["0", "1", "1", "0"]);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(isValid).toBe(true);
  });

  it("should return false if the value passed is not a binary", () => {
    const binaryToDecimalError = new BinaryToDecimal("1234");
    const spy = jest
      .spyOn(binaryToDecimalError, "validateBinary")
      .mockImplementationOnce(() => false);

    binaryToDecimalError.validateBinary(["1", "2", "3", "4"]);
    expect(spy).toHaveBeenCalled();
  });

  it("should return true if the binary number has a comma", () => {
    const binaryToDecimal = new BinaryToDecimal("0110,11");
    const spy = jest
      .spyOn(binaryToDecimal, "checkIfHasComma")
      .mockImplementationOnce(() => true);

    const binaryHasComma = binaryToDecimal.checkIfHasComma();

    expect(spy).toHaveBeenCalled();
    expect(binaryHasComma).toBe(true);
  });

  it("should return false if the binary number has no comma", () => {
    const binaryToDecimal = new BinaryToDecimal("01101");
    const spy = jest
      .spyOn(binaryToDecimal, "checkIfHasComma")
      .mockImplementationOnce(() => false);

    const binaryHasComma = binaryToDecimal.checkIfHasComma();

    expect(binaryHasComma).toBe(false);
    expect(spy).toHaveBeenCalled();
  });

  it("should return the quantity of decimal places", () => {
    const binaryToDecimal = new BinaryToDecimal("0110,11");
    const spy = jest
      .spyOn(binaryToDecimal, "countNumbersAfterComma")
      .mockImplementationOnce(() => 2);

    expect(binaryToDecimal.countNumbersAfterComma()).toEqual(2);
    expect(spy).toHaveBeenCalled();
  });

  it("should return 0 if the binary doesn't have decimal places", () => {
    const binaryToDecimal = new BinaryToDecimal("011011");
    const spy = jest
      .spyOn(binaryToDecimal, "countNumbersAfterComma")
      .mockImplementationOnce(() => 0);

    expect(binaryToDecimal.countNumbersAfterComma()).toEqual(0);
    expect(spy).toHaveBeenCalled();
  });

  it("should parse the string binary array to a number binary array", () => {
    const binaryToDecimal = new BinaryToDecimal("011010");
    const spy = jest
      .spyOn(binaryToDecimal, "splitBinary")
      .mockImplementationOnce(() => [0, 1, 1, 0, 1, 0]);

    expect(binaryToDecimal.splitBinary()).toEqual([0, 1, 1, 0, 1, 0]);
    expect(spy).toHaveBeenCalled();
  });

  it("should throw an error if the binary isn't valid", () => {
    const binaryToDecimalError = new BinaryToDecimal("1234");
    const spy = jest
      .spyOn(binaryToDecimalError, "splitBinary")
      .mockImplementationOnce(() => {
        throw new Error("Invalid binary number!");
      });
    expect(() => binaryToDecimalError.splitBinary()).toThrowError(
      "Invalid binary number!"
    );
    expect(spy).toHaveBeenCalled();
  });

  it("should return the converted decimal number", () => {
    const binaryToDecimal = new BinaryToDecimal("0110");
    const spy = jest
      .spyOn(binaryToDecimal, "convert")
      .mockImplementation(() => 6);
    expect(binaryToDecimal.convert()).toEqual(6);
    expect(spy).toHaveBeenCalled();
  });

  it("should throw an Error if the binary isn't valid", () => {
    const binaryToDecimalError = new BinaryToDecimal("1234");
    const spy = jest
      .spyOn(binaryToDecimalError, "convert")
      .mockImplementationOnce(() => {
        throw new Error("Invalid binary number!");
      });
    expect(() => binaryToDecimalError.convert()).toThrowError(
      "Invalid binary number!"
    );
  });
});
