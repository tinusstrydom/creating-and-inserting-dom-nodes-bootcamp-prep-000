//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var element = document.createElement('div');
element.innerHTML = "Hello, Dom!";
element.style.background = '#f9f9f9';
element.style.textAlign = 'center';
document.body.appendchild(element);

//add ul list with 3 li's
var ul = document.createElement('ul');
for(let i = 0;i < 3,i++){
  let li = document.createElement('li');
  li.innerHTML = (i+1).toString();
  ul.appendchild(li);
}
element.appendchild(ul);

ul.style.textAlign = 'center';
//remove child
ul.removeChild(ul.querySelector('li:nth-child(2)'));
//remove ul
ul.remove();
