import get from "../src/get";

describe('get', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
  
    test('should retrieve value at a given path with array notation', () => {
      expect(get(object, 'a[0].b.c')).toBe(3);
    });
  
    test('should retrieve value at a given path with array path as an array', () => {
      expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
    });
  
    test('should return default value if path does not exist', () => {
      expect(get(object, 'a.b.c', 'default')).toBe('default');
    });
  
    test('should return undefined if path does not exist and no default value is provided', () => {
      expect(get(object, 'a.b.c')).toBeUndefined();
    });
  
    test('should return default value for null or undefined object', () => {
      expect(get(null, 'a.b.c', 'default')).toBe('default');
      expect(get(undefined, 'a.b.c', 'default')).toBe('default');
    });
  
  
    test('should handle non-string, non-array path by returning default', () => {
      expect(get(object, 123, 'default')).toBe('default');
    });
});