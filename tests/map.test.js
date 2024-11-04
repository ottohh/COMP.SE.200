import map from "../src/map";


describe('map', () => {

    test('should apply iteratee to each element in the array', () => {
      const array = [1, 2, 3];
      const iteratee = (x) => x * 2;
      expect(map(array, iteratee)).toEqual([2, 4, 6]);
    });
  
    test('should pass index and array to the iteratee function', () => {
      const array = ['a', 'b', 'c'];
      const iteratee = jest.fn((value, index, arr) => value + index);
      
      map(array, iteratee);
      
      expect(iteratee).toHaveBeenNthCalledWith(1, 'a', 0, array);
      expect(iteratee).toHaveBeenNthCalledWith(2, 'b', 1, array);
      expect(iteratee).toHaveBeenNthCalledWith(3, 'c', 2, array);
    });
  
    test('should return an empty array when input is an empty array', () => {
      const array = [];
      const iteratee = (x) => x * 2;
      expect(map(array, iteratee)).toEqual([]);
    });
  
    test('should handle null or undefined input by returning an empty array', () => {
      const iteratee = (x) => x * 2;
      expect(map(null, iteratee)).toEqual([]);
      expect(map(undefined, iteratee)).toEqual([]);
    });
  
    test('should handle complex objects within the array', () => {
      const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const iteratee = (obj) => obj.id;
      expect(map(array, iteratee)).toEqual([1, 2, 3]);
    });
  
    test('should work with iteratee functions that return various types', () => {
      const array = [1, 2, 3];
      const iteratee = (x) => x % 2 === 0 ? 'even' : 'odd';
      expect(map(array, iteratee)).toEqual(['odd', 'even', 'odd']);
    });
    
  });