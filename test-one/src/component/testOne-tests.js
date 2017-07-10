import Logger from "../helpers/logger";
import TestOne from './testOne';
import sinon from "sinon";
import { expect } from "chai";

describe("testOne", () => {
  describe("constructor", () => {
    it('should be created with one property:logger', () => {
      let testOne = new TestOne();
      expect(testOne).to.have.property('logger');
    });
  });
  describe("printNumbers", () => {
   let testOne = new TestOne();
   it('should return boss value for each multiple of 3', () => {
        let multipleOfThree = [3,6,9,12];
        multipleOfThree.forEach((number) => {
          let returnedValue = testOne.printNumberOrWords(number);
          expect(returnedValue).to.eql('Boss');
        })
    });
    it('should return Hog value for each multiple of 5', () => {


         let multipleOfFive= [10,20,25];
          multipleOfFive.forEach((number) => {
          let returnedValue = testOne.printNumberOrWords(number);
          expect(returnedValue).to.eql('Hog');
         })
     });
     it('should return BossHog value for each multiple of 3 or 5', () => {


          let multipleOfThree_Five= [15,30,45,60];
           multipleOfThree_Five.forEach((number) => {
           let returnedValue = testOne.printNumberOrWords(number);
           expect(returnedValue).to.eql('BossHog');
          })
      });
  });


});
