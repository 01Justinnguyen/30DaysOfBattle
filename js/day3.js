var modal = document.querySelector('.modal');
var btnOpen = document.querySelector('.modal__button--open');
var iconClose = document.querySelector('.modal__header i');
var buttonClose = document.querySelector('.modal__btn--close');
var modalContainer = document.querySelector('.modal__container');

/*Cách 1 dùng hàm toggle*/
function toggleModal(e){
    modal.classList.toggle('modal-hide');
}

btnOpen.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
buttonClose.addEventListener('click', toggleModal);
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})

/*Cách 2 dùng 2 hàm remove và add*/
// function toggleModal(e){
//     modal.classList.remove('modal-hide');
// }

// function closeModal(){
//     modal.classList.add('modal-hide');
// }

// btnOpen.addEventListener('click', toggleModal);
// iconClose.addEventListener('click', closeModal);
// buttonClose.addEventListener('click', closeModal);
// modal.addEventListener('click', closeModal);
// modalContainer.addEventListener('click', function(e){
//     e.stopPropagation();
// });




