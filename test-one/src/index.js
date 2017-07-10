import TestOne from './component/testOne';
import Logger from './helpers/logger';
let testOne = new TestOne();
let logger = new Logger();
for (var i = 0; i < 100; i++) {
 logger.log(testOne.printNumberOrWords(i+1));
}
