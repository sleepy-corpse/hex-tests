import { strict as assert} from 'assert';
import functionSum from '../src/function.js';

assert.equal(functionSum(), 0);
assert.equal(functionSum(112, 1, 3), 116);
assert.equal(functionSum(0, 0, 0), 0);