const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');

})


$(document).ready(function(){
    $(".invisible-content").hide(); 
    $(document).on('click',"read-more")
});