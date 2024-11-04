import isEmpty from "../src/isEmpty";


describe('isEmpty', () => {
  
    test('should return true for null or undefined', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });
  
    test('should return true for boolean values', () => {
      expect(isEmpty(true)).toBe(true);
      expect(isEmpty(false)).toBe(true);
    });
  
    test('should return true for numbers', () => {
      expect(isEmpty(0)).toBe(true);
      expect(isEmpty(1)).toBe(true);
      expect(isEmpty(-1)).toBe(true);
    });
  
    test('should return true for empty arrays, strings, and objects', () => {
      expect(isEmpty([])).toBe(true);
      expect(isEmpty('')).toBe(true);
      expect(isEmpty({})).toBe(true);
    });
  
    test('should return false for non-empty arrays', () => {
      expect(isEmpty([1, 2, 3])).toBe(false);
    });
  
    test('should return false for non-empty strings', () => {
      expect(isEmpty('abc')).toBe(false);
    });
  
    test('should return false for non-empty objects', () => {
      expect(isEmpty({ a: 1 })).toBe(false);
    });
  
    test('should return true for empty Map and Set', () => {
      expect(isEmpty(new Map())).toBe(true);
      expect(isEmpty(new Set())).toBe(true);
    });
  
    test('should return false for non-empty Map and Set', () => {
      const map = new Map();
      map.set('key', 'value');
      expect(isEmpty(map)).toBe(false);
  
      const set = new Set();
      set.add(1);
      expect(isEmpty(set)).toBe(false);
    });
  
    test('should return true for objects with only inherited properties', () => {
      function Proto() {}
      Proto.prototype.key = 'value';
      const instance = new Proto();
      expect(isEmpty(instance)).toBe(true);
    });
  
    test('should return false for objects with own properties', () => {
      const obj = Object.create(null);
      obj.a = 1;
      expect(isEmpty(obj)).toBe(false);
    });
  
    test('should return true for empty typed arrays and buffers', () => {
      expect(isEmpty(new Uint8Array())).toBe(true);
      expect(isEmpty(Buffer.alloc(0))).toBe(true);  // Buffer test for Node.js
    });
  
    test('should return false for non-empty typed arrays and buffers', () => {
      expect(isEmpty(new Uint8Array([1]))).toBe(false);
      expect(isEmpty(Buffer.from([1]))).toBe(false);  // Buffer test for Node.js
    });
   //Following are manually generated for 100% coverage
   test('Testing prototype objects', () => {
    var prototype = Object.prototype;
    expect(isEmpty(prototype)).toBe(true);
  });
  });