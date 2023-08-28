const productContainers=[...document.querySelectorAll('product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const prevtBtn = [...document.querySelectorAll('.prev-btn')];
productContainers.forEach((item, i) =>{
    let containerDimenison = item.getBoundingClientRect();
    let containerWidth = containerDimenison.width;
    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth;

    })
    prevtBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth;
         
    })
})
