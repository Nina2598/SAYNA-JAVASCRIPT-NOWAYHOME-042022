




let btninverse = document.getElementsByClassName('btninverse');

console.log(btninverse);

for (let i =0; i<btninverse.length; i++){
    btninverse[i].addEventListener('mouseover',()=>{
    btninverse[i].style.backgroundColor ='#b11313';
    btninverse[i].style.color = 'white';
    btninverse[i].style.fontWeight = 'bold';
    btninverse[i].style.boxShadow = '5px 5px 30px white';
        });
    btninverse[i].addEventListener('mouseout',()=>{
    btninverse[i].style.backgroundColor='white';
    btninverse[i].style.color = '#b11313';
    btninverse[i].style.boxShadow = 'none';
       });
    }


    let footericon = document.getElementsByClassName('footericon');
    for (let i = 0; i<footericon.length; i++){
        footericon[i].addEventListener('mouseover',()=>{
        footericon[i].style.color = 'white';
            });
        footericon[i].addEventListener('mouseout',()=>{
        footericon[i].style.color = 'black';
             });
        }


let menu = document.querySelectorAll('li');

menu.forEach(function(li){
    li.addEventListener('mouseover', ()=>{
        li.style.textDecoration = 'line-through'
    });
    li.addEventListener('mouseout', ()=>{
        li.style.textDecoration = 'none'
    })
})