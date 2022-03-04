const addItem = document.querySelector(".add-item");
const ulList = document.querySelector(".ul-list");



// adds item
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
        li.setAttribute('id', "liItem");
        li.appendChild(document.createTextNode(getVal()));
        ulList.appendChild(li);

        //lets add the incon
        document.querySelector('.ul-list').innerHTML += ` 
        <button class="delete"> 
        <i class= "fa-solid fa-trash-can" onclick="deleteButton()"> </i> 
        </button>`;
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
    }

})

function deleteButton()
{ 
    /*
   let ulvar = document.getElementById('ul-id');
   ulvar.removeChild(ulvar.lastElementChild);*/


   
   //var listItems = document.getElementsByTagName('li');
   var listItems =document.querySelectorAll("li");
   for(var i = 0; i < listItems.length; i++)
   {
       listItems[i].onclick = function()
       {
           this.parentNode.removeChild(this);
       }
   }
   
   console.log('Item removed');
}

//remove  item
//If I click on the trash icon I active the delete function
/*
deleteButton.addEventListener('click', function()
{
    ulList.onclick = function(event)
    {
        var target = event.target;
        console.log(target.innerText);
        
        //Removes item
        target.remove(target.selectedIndex);
    }
})
*/


