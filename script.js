
// Vse metodi sozdayut novie massivi. Tolko forEach menyaet tekushiy massiv

// document - eto ves nash sayt (html)
// document.querySelector() - podkluchaetsya k ukazannomu html elementu
//addEventListener('nazvaniye sobitie', bezimyannaya funcsiya)
// innerHTML - beret sodetjimoe ukazannogo elementa
// style - delaet dobavleniye ukazannih css svoystv
// classlist.add() - dobavlyaet ukazanniy class
// classlist.remove() - udalyaet ukazanniy class
// toggle - 

// let h1 = document.querySelector('h1');

// h1.addEventListener('click', function(){
// 	if(h1.innerHTML == 'JavaScript') {
// 		h1.innerHTML = 'CSS';
// 		h1.style.background = 'red';
// 		h1.classList.add('active');
// 	}	 else {
// 		h1.innerHTML = 'JavaScript';
// 		h1.style.background = 'green';
// 		h1.classList.remove('active');
// 	}
// }) 

// **************   *****************

//querySelectorAll() - vozvrashaet psevdo massiv, ne odin metod na psevdo massiv ne rabotaet (map, sort, reduice itd) chtob ego perebrat ispolzuetsya forEach (potomuchto on sovremenniy).

// Esli sozdali massiv to ego for ili forEachom pereberayete i posle dobavlyaete sobitiye


// let items = document.querySelectorAll('.item');

// items.forEach((item) => {
// 	item.addEventListener('click', function() {
// 		console.log('hello');
// 	})
// })

















