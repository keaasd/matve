// modal window
const modalWindow = document.querySelector('.modal');
const buttonModals = document.querySelectorAll('.modal__button');
const modalClose = document.querySelector('.modal__close');
const body = document.querySelector('body');

// по клику по кнопке включаем меню  
// убираем прокрутку с body 
buttonModals.forEach((item) => {
	item.addEventListener('click', () => {
		// modalWindow.style.display = 'flex', background = `red`;
		 
		modalWindow.style.cssText = `	
		visibility: visible;
		opacity: 1;
		`;
		body.classList.add('noscroll');
	});
});
// закрываем модалку при нажатии вне
// вернем прокрутку в body  
modalWindow.addEventListener('click', (e) => {
	const isModal = e.target.closest('.modal__inner');
	if (!isModal) {
	modalWindow.style.cssText = `	
	visibility: hidden;
	opacity: 0;
	`;
	body.classList.remove('noscroll');
}
});
// по клику на крестик включаем скрол 
modalClose.addEventListener('click', () => {
	modalWindow.style.cssText = `	
	visibility: hidden;
	opacity: 0;
	`;
	body.classList.remove('noscroll');
})