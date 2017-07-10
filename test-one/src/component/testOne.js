import Logger from '../helpers/logger';

export default class TestOne {
  constructor() {
   // instantiate Logger
    this.logger = new Logger();
  }

  printNumberOrWords(number) {

   if(number%15 === 0) {
     return 'BossHog';
   } else if(number%3 === 0) {
     return 'Boss';
   } else if(number%5 === 0) {
     return 'Hog';
   } else {
     return number;
   }
  }
}
