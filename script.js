'use strict';

document.querySelector('.mainbutton').addEventListener('click', function () {
  const price = Number(document.querySelector('.price').value);
  const quantity = Number(document.querySelector('.quantity').value) || 1;

  const price1 = Number(document.querySelector('.price1').value);
  const quantity1 = Number(document.querySelector('.quantity1').value) || 1;

  const price2 = Number(document.querySelector('.price2').value);
  const quantity2 = Number(document.querySelector('.quantity2').value) || 1;

  const result = (price * quantity * 0.18).toFixed(2);
  const result1 = (price1 * quantity1 * 0.18).toFixed(2);
  const result2 = (price2 * quantity2 * 0.18).toFixed(2);

  const allSum = (Number(result) + Number(result1) + Number(result2)).toFixed(
    2
  );

  document.querySelector('.result').textContent = `${allSum} лв.`;

  document.querySelector('.addgenius').addEventListener('click', function () {
    const resultTotal = (price * quantity * 1.2).toFixed(2);
    const resultTotal1 = (price1 * quantity1 * 1.2).toFixed(2);
    const resultTotal2 = (price2 * quantity2 * 1.2).toFixed(2);
    const total =
      Number(resultTotal) + Number(resultTotal1) + Number(resultTotal2);
    console.log(total);

    let genius = 0;
    if (total <= 11.99) {
      genius = 0.48;
    } else if (total >= 12 && total <= 15.99) {
      genius = 0.72;
    } else if (total >= 16 && total <= 19.99) {
      genius = 0.96;
    } else if (total >= 20 && total <= 29.99) {
      genius = 1.2;
    } else if (total >= 30 && total <= 59.99) {
      genius = 1.68;
    } else {
      genius = 2.4;
    }

    //console.log(typeof genius);
    let priceGen = (Number(allSum) + genius).toFixed(2);
    document.querySelector('.genius').textContent = `Genius:  ${genius} лв.`;
    document.querySelector('.priceGen').textContent = `${priceGen} лв.`;
  });
});

function getResult() {
  return document.querySelector('.result').textContent;
}

function copyToClipboard() {
  let result = getResult();
  navigator.clipboard
    .writeText(result)
    .then(() => console.log('Result copied to clipboard:', result))
    .catch((err) => console.error('Failed to copy result to clipboard:', err));
}

function copyToClipboardGen() {
  let result = document.querySelector('.priceGen').textContent;
  navigator.clipboard
    .writeText(result)
    .then(() => console.log('Result copied to clipboard:', result))
    .catch((err) => console.error('Failed to copy result to clipboard:', err));
}
