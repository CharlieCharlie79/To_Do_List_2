
const addItem = document.querySelector(".add-item");
const ulList = document.querySelector(".ul-list");

//add item
addItem.addEventListener('click', function()
{
    //gets the user input
    function getVal()
    {
        const val = document.querySelector('input').value;
        return val;
    }

    //creates the li element
    function createLi()
    {
        var li = document.createElement('li');
        //lets give him an id
        li.setAttribute('id', 'liItem');
        li.appendChild(document.createTextNode(getVal()));
        ulList.appendChild(li);

      

        var button =document.createElement('button');
        //give him an id
        button.setAttribute('id', 'deleteButton');
        button.innerHTML ="Delete";
        li.append(button);

        //add a function to the button to delete child
        button.onclick = function ()
        {
            ulList.removeChild(li);
        }
    }
   
   //Checks if input is empty
    if(!getVal())
    {
        alert("You need to put a task!")
        return false;
    }
    else
    {
        createLi();   
        const val = document.querySelector('input').value ="";
    }

})


   


