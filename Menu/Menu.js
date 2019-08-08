/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
 


//write a function that creates the component and takes an array as an argument
function menuMaker(menuList) {
  //create the elements
  menuDiv = document.createElement('div');
  menuUl = document.createElement('ul');
  
  //add structure
  menuDiv.appendChild(menuUl);
  
  //add classes
  menuDiv.classList.add("menu");

  //loop over the array
  menuList.forEach(element => {
    //create an li every single time it loops
    const li = document.createElement('li');
    //set each li's textContent to each element
    li.textContent = element;
    //append the li's to the ul
    menuUl.appendChild(li);
  });
  
  const menuButton = document.querySelector('.menu-button');

  //event listener
  menuButton.addEventListener("click", () => {
    menuDiv.classList.toggle("menu--open");
    console.log('clicked')
  })

  return menuDiv;
}

window.addEventListener('load', () => {
  //select header
  const menu = document.querySelector('.header');
  //call this function while appending the return menu to the dom
  menu.appendChild(menuMaker(menuItems));

}) 
