const faker = require('faker');

function fakerTest(){
  console.log(`======================================
Welcome to the Repository of Ridiculus
======================================`);
  for(let i = 1; i <= 10; i++){
    console.log(`${i}. ${faker.commerce.productAdjective()} ${faker.commerce.productAdjective()}  ${faker.commerce.product()} -- $${faker.commerce.price()}`);
  }
}

fakerTest();
