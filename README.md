# Ray

An array re-implementation challenge.

```bash
npm install
npm test
```

### Tips

* This is a difficult assignment, but really, really cool to be able to do. Don't get too down on yourself, and DO give yourself a pat on the back no matter how far you get with it.
* Check MDN's documentation, it's very clear and helpful, and covers every single array method. (Particularly good for the stretch goals.) Here's [the documentation for `pop`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push).

### General Guidelines

* Don't make an array at any point in this project. We're going to roll our own, here!
* That said, you'll need square brackets, because variable and property names can't otherwise start with a number. You can't do any of the below:

```javascript
const 1st = `nope, variable names can't start with a number`;
someObj.2nd = 'nor can property names';
someObj.0 = `and so they certainly can't entirely be a number!`
```

But you can do this:

```javascript
someObj[0] = 'first thing';
someObj[1] = 'second thing';
```

* So if you can use indices as property names as long as you use square brackets (which is what arrays are actually doing!), what is the object whose properties/indices we're changing? Well... how can we refer to the whole object within an object's method? You'll find that answer on the internet or in your heart. 


### Tasks

Tasks can be completed in any order, but here's our recommendation:

1. Length is the easiest. What should it start at? Not easy to test at this point, but you'll want to test it later!
2. Push is the next easiest. You'll want to 1) take in a value, 2) set that value at the index you haven't used yet, 3) bump up your length property.
3. Pop has a different kind of challenge, as you'll be removing a value instead of adding one. You'll have to: 1. remove the value at the end (making sure you're deleting the key as well!), 2. decrement the length, 3. return the value you removed. Oh, but you DID save that value, right?
4. Unshift and shift are entirely different. Sure, you're adding and removing, but you'll have to adjust the indices of the other values. If you add at index 0 with `unshift`, you'll need to push what WAS at index 0 to index 1, what was at index 1 to index 2, and so on. Loops to the rescue! `shift` is similar, but also... different. You'll need to remove from index 0 (saving it to return!), and then move everything DOWN one index.


### Stretch Goals

That was all hard enough, but if you finish, there are many, MANY array methods worth implementing. We have no tests for these, so you'll have to try them out manually! Here are the ones we'd recommend trying out, in rough order of difficulty:

* `include` and `indexOf`
* `reverse`
* `slice`
* `map`
* `filter`
* `forEach`
* `concat`
* `find` and `findIndex`
* `every` and `some`
