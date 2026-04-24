const categoryBoxes = document.querySelectorAll('.task-1-inner-box');
console.log(`Number of categories: ${categoryBoxes.length}`);

categoryBoxes.forEach(box => {
  const title = box.querySelector('h2').textContent;
  const elementsCount = box.querySelectorAll('ul li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});