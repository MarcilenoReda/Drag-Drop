let btn=document.getElementById('btn');
let input=document.getElementById('input');
let boxs=document.querySelectorAll('.box');
let drag = null

btn.onclick=function(){
    if(input.value!=''){
        boxs[0].innerHTML+= `<p class="item" draggable="true">${input.value}</p>`
        input.value = '';
 }
    dragitem();
}
function dragitem() {
    let item = document.querySelectorAll('.item');
    item.forEach(item=>{
        item.addEventListener('dragstart' , function () {
          drag = item;
          item.style.opacity='0.5';
          
        })
        item.addEventListener('dragend' , function () {
          drag = null;
          item.style.opacity='1';
         
        })

        boxs.forEach(box=>{
            box.addEventListener('dragover' , function (e) {
              box.style.background = '#0966af';
              e.preventDefault()
              box.style.color = '#fff';
            })
            box.addEventListener('dragleave' , function () {
                box.style.background = '#fff';
                box.style.color = '#000';
            })
            box.addEventListener('drop' , function () {
               box.append(drag);
               box.style.color = '#000';
               box.style.background = '#fff';
            })
        })
    })
}
