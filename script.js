const addItem = document.querySelector(".add-item");
const removeItem = document.querySelector(".eliminate-item");
const ulList = document.querySelector(".ul-list");



addItem.addEventListener('click', function()
{
    //gets the user input
    function getVal()
    {
        const val = document.querySelector('input').value;
        return val;
    }

    //creates the li element
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(getVal()));
    ulList.appendChild(li);
})