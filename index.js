
const items=document.getElementById('item-container');
const addBtn=document.getElementById('btn');
const cat=document.getElementById('select');
const link=document.getElementById('text');


addBtn.addEventListener('click',(e)=>{
    const itemDiv=document.createElement('div');
    const imgTag=document.createElement('img');
    const button=document.createElement('button');
    itemDiv.append(imgTag);
    itemDiv.append(button);
    imgTag.src=link.value;
    button.classList="delete-btn";
    itemDiv.classList=`store-item ${cat.value}`;
    // itemDiv.classList=cat.value;
    button.value ="Delete"
    items.appendChild(itemDiv);
    console.log(itemDiv);
});
items.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete-btn')){
        e.target.parentNode.remove();
    }
});

const buttons=document.querySelectorAll('.btn');
const storeImages=document.querySelectorAll('.store-item');
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        const filter=e.target.dataset.filter;
        console.log(filter);
        storeImages.forEach((item)=>{
            if(filter=='all'){
                console.log(item);
                item.style.block="block";
            }
            else{
                if(item.classList.contains(filter)){
                    item.style.block='block';
                }else{
                    item.style.display='none';
                }
            }
        })
    })
})

// console.log(filter)