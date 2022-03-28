let menu=document.querySelectorAll('menuList');
// menu.onclick((fun)=>{
//     menuList.style.color='pink'
// })
function func() {
    menu.style.color='pink'
}

document.querySelectorAll('menuList').addEventListener('click',func);