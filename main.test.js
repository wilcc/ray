const {
  Ray,
} = require('./main.js')

let ray;

beforeEach(() => {
  ray = Ray();
})

describe('Ray', () => {
  it('returns an object', () => {
    expect(typeof Ray()).toBe('object');
  })
})

describe('Ray.length', () => {
  it(`begins at 0`, () => {
    expect(ray.length).toBe(0);
  })
})

describe('Ray.push', () => {
  it(`is a method`, () => {
    expect(typeof ray.push).toBe('function')
  })

  it(`puts the given value as a value in the returned object`, () => {
    ray.push(3);
    expect(Object.values(ray).includes(3)).toBe(true);
    ray.push(5);
    expect(Object.values(ray).includes(5)).toBe(true);
  })

  it(`increments the length by 1`, () => {
    ray.push(7);
    expect(ray.length).toBe(1);
    ray.push(11);
    expect(ray.length).toBe(2);
    ray.push(11);
    expect(ray.length).toBe(3);
  })

  it(`puts the given value at the first available number key`, () => {
    ray.push(7);
    expect(ray[0]).toBe(7);
    ray.push(11);
    expect(ray[1]).toBe(11);
  })
})

describe('Ray.pop', () => {
  it(`is a method`, () => {
    expect(typeof ray.pop).toBe('function')
  })

  it(`decrements the length by 1`, () => {
    ray[0] = 5;
    ray[1] = 5;
    ray.length = 2;
    ray.pop();
    expect(ray.length).toBe(1)
    ray.pop();
    expect(ray.length).toBe(0)
  })


  it(`removes the value at the highest used number key`, () => {
    ray[0] = 5;
    ray[1] = 7;
    ray.length = 2;
    ray.pop();
    expect(ray[0]).toBe(5)
    expect(ray[1]).toBe(undefined);
    ray.pop();
    expect(ray[0]).toBe(undefined);
  })

  it(`returns the removed value`, () => {
    ray[0] = 15;
    ray[1] = 51;
    ray.length = 2;
    const removed1 = ray.pop();
    expect(removed1).toBe(51)
    const removed2 = ray.pop();
    expect(removed2).toBe(15);
  })
})

describe('Ray.unshift', () => {
  it(`is a method`, () => {
    expect(typeof ray.unshift).toBe('function')
  })

  it(`puts the given value as a value in the returned object`, () => {
    ray.unshift(3);
    expect(Object.values(ray).includes(3)).toBe(true);
    ray.unshift(5);
    expect(Object.values(ray).includes(5)).toBe(true);
  })

  it(`increments the length by 1`, () => {
    ray.unshift(7);
    expect(ray.length).toBe(1);
    ray.unshift(11);
    expect(ray.length).toBe(2);
    ray.unshift(11);
    expect(ray.length).toBe(3);
  })

  it(`puts the given value at index 0`, () => {
    ray.unshift(7);
    expect(ray[0]).toBe(7);
    ray.unshift(11);
    expect(ray[0]).toBe(11);
  })

  it(`pushes all other values to the next index`, () => {
    ray.unshift(7);
    ray.unshift(11);
    ray.unshift(12);
    expect(ray[0]).toBe(12);
    expect(ray[1]).toBe(11);
    expect(ray[2]).toBe(7);
  })
})

describe('Ray.shift', () => {
  it(`is a method`, () => {
    expect(typeof ray.shift).toBe('function')
  })

  it(`decrements the length by 1`, () => {
    ray[0] = 5;
    ray[1] = 'hello';
    ray[2] = false;
    ray.length = 3;
    ray.shift();
    expect(ray.length).toBe(2);
    ray.shift();
    expect(ray.length).toBe(1);
    ray.shift();
    expect(ray.length).toBe(0);
  })

  it(`removes the value and key at the previous last index`, () => {
    ray[0] = 7;
    ray[1] = 11;
    ray.length = 2;
    ray.shift();
    expect(ray[1]).toBe(undefined);
  })

  it(`pushes all elements but the first to a key one lower`, () => {
    ray[0] = 7;
    ray[1] = 11;
    ray[2] = 12;
    ray.length = 3;
    ray.shift();
    expect(ray[0]).toBe(11);
    expect(ray[1]).toBe(12);
    ray.shift();
    expect(ray[0]).toBe(12);
  })

  it(`returns the removed element`, () => {
    ray[0] = 15;
    ray[1] = 51;
    ray.length = 2;
    const removed1 = ray.shift();
    expect(removed1).toBe(15)
    const removed2 = ray.shift();
    expect(removed2).toBe(51);
  })
})
describe('Ray.include', () => {
  it(`is a method`, () => {
    expect(typeof ray.include).toBe('function')
  })
  it(`tells if the value is included`, () => {
    ray[0] = 5;
    ray[1] = 'hello';
    ray[2] = false;
    ray[3] = 2;
    ray[4] = 3;
    ray.length = 5;
    let value=ray.include('hello');
    expect(value).toBe(true);
    let value1=ray.include('notthere');
    expect(value1).toBe(false);
  })
})
describe('Ray.indexOf', () => {
  it(`is a method`, () => {
    expect(typeof ray.indexOf).toBe('function')
  })
  it(`tells if the value is included`, () => {
    ray[0] = 5;
    ray[1] = 'hello';
    ray[2] = false;
    ray[3] = 2;
    ray[4] = 3;
    ray.length = 5;
    let value=ray.indexOf('hello');
    expect(value).toBe(1);
    let value1=ray.indexOf('notthere');
    expect(value1).toBe(-1);
  })
})

describe('Ray.reverse', () => {
  it(`is a method`, () => {
    expect(typeof ray.reverse).toBe('function')
  })

  it(`reverse the order`, () => {
    ray[0] = 5;
    ray[1] = 'hello';
    ray[2] = false;
    ray[3] = 2;
    ray[4] = 3;
    ray.length = 5;
    ray.reverse()
    expect(ray[0]).toBe(3)
    expect(ray[1]).toBe(2)
    expect(ray[2]).toBe(false)
    expect(ray[3]).toBe('hello')
    expect(ray[4]).toBe(5)
  })
})
  describe('Ray.slice', () => {
    it(`is a method`, () => {
      expect(typeof ray.slice).toBe('function')
    })
    it(`no value given return original`,() => {
      ray[0] = 5;
      ray[1] = 'hello';
      ray[2] = false;
      ray[3] = 2;
      ray[4] = 3;
      ray.length = 5;
      const newRay = ray.slice()
      expect(newRay[0]).toBe(5)
      expect(newRay[1]).toBe('hello')
      expect(newRay[2]).toBe(false)
      expect(newRay[3]).toBe(2)
      expect(newRay[4]).toBe(3)
      expect(newRay.length).toBe(5)
    })
    it(`starts new from value`, () => {
      ray[0] = 5;
      ray[1] = 'hello';
      ray[2] = false;
      ray[3] = 2;
      ray[4] = 3;
      ray.length = 5;
      const newRay = ray.slice(1)
      expect(newRay[0]).toBe('hello')
      expect(newRay[1]).toBe(false)
      expect(newRay[2]).toBe(2)
      expect(newRay[3]).toBe(3)
      expect(newRay.length).toBe(4)
      const newRay2 = newRay.slice(2)
      expect(newRay2[0]).toBe(2)
      expect(newRay2[1]).toBe(3)
      expect(newRay2.length).toBe(2)
    })
    it(`starts new from value and ends at second value`, () => {
      ray[0] = 5;
      ray[1] = 'hello';
      ray[2] = false;
      ray[3] = 2;
      ray[4] = 3;
      ray.length = 5;
      const newRay = ray.slice(1,4)
      expect(newRay[0]).toBe('hello')
      expect(newRay[1]).toBe(false)
      expect(newRay[2]).toBe(2)
      expect(newRay.length).toBe(3)
      const newRay2 = newRay.slice(0,1)
      expect(newRay2[0]).toBe('hello')
      expect(newRay2.length).toBe(1)
    })
})
