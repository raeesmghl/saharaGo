



// menu button 



let menuBtn = document.getElementById('toggle-menu');
let navigation = document.querySelector('.navigation');
let closeBtn = document.getElementById('close-btn');


menuBtn.addEventListener('click', () => {
    navigation.style.display = 'flex';
    menuBtn.style.display = 'none'
    closeBtn.style.display = 'block'
})

closeBtn.addEventListener('click',closeMenu);

function  closeMenu() {
    navigation.style.display = 'none';
    menuBtn.style.display = 'block'
    closeBtn.style.display = 'none'
}














let navItems = document.querySelectorAll('.navigation-items a');

navItems.forEach(item => {

    item.addEventListener('click', () => {

        navItems.forEach((el) => {
            el.classList.remove('active');
        })
        item.classList.add('active')    
    })
});












let loadMore = document.querySelector('.load-more');

let card4 = document.querySelector('.card4');
let card5 = document.querySelector('.card5');
let card6 = document.querySelector('.card6');

loadMore.addEventListener('click',()=>{
    loadMore.style.display = 'none';
    card4.style.display = 'block';
    card5.style.display = 'block';
    card6.style.display = 'block';
})








let questions = document.querySelectorAll('.question');

questions.forEach((ques)=>{
    ques.addEventListener('click',()=>{
        let btn = ques.lastElementChild;
        btn.classList.toggle('ri-arrow-drop-down-line')
        btn.classList.toggle('ri-arrow-drop-up-line');

        if(btn.classList.contains('ri-arrow-drop-up-line')){
            ques.firstElementChild.lastElementChild.style.display = 'block';
        }else{
            ques.firstElementChild.lastElementChild.style.display = 'none';
        }
    })
})





