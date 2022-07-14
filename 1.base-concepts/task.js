"use strict";

function solveEquation(a, b, c) {
  let arr;
  arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (Number.isNaN(+percent)) {
    return `Параметр \"Процентная ставка\" содержит неправильное значение \"${percent}\"`;
  }

  if (Number.isNaN(+contribution)) {
    return `Параметр \"Начальный взнос\" содержит неправильное значение \"${contribution}\"`;
  }

  if (Number.isNaN(+amount)) {
    return `Параметр \"Общая стоимость\" содержит неправильное значение \"${amount}\"`;
  }

  let credit = amount - contribution;
  let today = new Date();
  let rate = percent / 12 / 100;
  let months = ((date.getMonth() - today.getMonth()) + ((date.getFullYear() - today.getFullYear()) * 12));
  let monthlyPayment = credit * (rate + (rate / (((1 + rate) ** months) - 1)));

  totalAmount = (monthlyPayment * months).toFixed(2);

  console.log(+totalAmount);
  return +totalAmount;
}
