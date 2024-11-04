import toNumber from "../src/toNumber";

describe('toNumber', () => {

    test('should return the same value if input is a number', () => {
      expect(toNumber(3.2)).toBe(3.2);
      expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
      expect(toNumber(Infinity)).toBe(Infinity);
      expect(toNumber(-Infinity)).toBe(-Infinity);
      expect(toNumber(0)).toBe(0);
    });
  
    test('should convert numeric strings to numbers', () => {
      expect(toNumber('3.2')).toBe(3.2);
      expect(toNumber('42')).toBe(42);
      expect(toNumber('0')).toBe(0);
      expect(toNumber('-5')).toBe(-5);
    });
  
    test('should return NaN for non-numeric strings', () => {
      expect(toNumber('abc')).toBeNaN();
      expect(toNumber('3.2abc')).toBeNaN();
    });
  
    test('should handle binary and octal strings correctly', () => {
      expect(toNumber('0b101')).toBe(5);     // Binary input
      expect(toNumber('0o10')).toBe(8);      // Octal input
      expect(toNumber('0b2')).toBeNaN();     // Invalid binary
      expect(toNumber('0o8')).toBeNaN();     // Invalid octal
    });
  
    test('should handle valid and invalid hexadecimal strings', () => {
      expect(toNumber('0x1A')).toBe(26);     // Valid hex
      expect(toNumber("-0xabcdef")).toBeNaN();// Invalid signed hex. This was added manually
      expect(toNumber('0xG')).toBeNaN();     // Invalid hex
    });
  
    test('should return NaN for symbols', () => {
      expect(toNumber(Symbol('symbol'))).toBeNaN();
    });
  
    test('should handle objects with valueOf method', () => {
      const objWithValueOf = { valueOf: () => 42 };
      expect(toNumber(objWithValueOf)).toBe(42);
    });
   // This was added manually
    test('should handle objects without valueOf method', () => {
      const obj = {valueOf: "ds" }; 
      expect(toNumber(obj)).toBeNaN();
    });
  
    test('should convert null to 0', () => {
      expect(toNumber(null)).toBe(0);
    });
  
    test('should return NaN for undefined', () => {
      expect(toNumber(undefined)).toBeNaN();
    });
  
    test('should return NaN for NaN input', () => {
      expect(toNumber(NaN)).toBeNaN();
    });
  
  });