let ul = document.querySelector('ul');
let buttonAdd = document.querySelector('.add');
let buttonDel = document.querySelector('.delete');
let buttonEdit = document.querySelector('.edit');
let contDiv = document.querySelector('.firstBlock');
let listOf = document.querySelector('.listOfChange');
let saveButton = document.querySelector('.saveButton');
let saveEdit = document.querySelector('.saveEdit');
let addBlock = document.querySelector('.absoluteBlock');
let inpSave = document.querySelector('.inpSave');
let editBlock = document.querySelector('.editBlock')
let editInp = document.querySelector('.editInp')
let arrMonth = [];
let count = 0;
let indexBlock = document.querySelector('.indexBlock');


for(let i = 1; i < 32;i++) {
	let li = document.createElement('li');
	li.innerHTML = i;
	let attr = li.setAttribute('data-dig',i);
	let arr = [];
	arrMonth.push(arr);
	li.addEventListener('click',function() {
		listOf.innerHTML = '';
		indexBlock.innerHTML = this.innerHTML + ' Апреля';
		let ol = document.createElement('ol');
		let takeAttr = this.getAttribute('data-dig');
		count = takeAttr;
		for(let i = 0;i < arrMonth[count].length;i++) {
			ol.appendChild(arrMonth[count][i]);
		}
		listOf.appendChild(ol);
		let allLi = document.querySelectorAll('ol li');
		for(let i = 0;i < allLi.length;i++) {
			allLi[i].removeAttribute('class');
		}
	})
	ul.append(li);
}

let bcgLi = document.querySelectorAll('ul li');
for(let i = 0; i < bcgLi.length; i++) {
	bcgLi[i].addEventListener('click',function() {
		for(let k = 0; k < bcgLi.length; k++) {
			bcgLi[k].style.backgroundColor = '';
		}
		this.style.backgroundColor = '#2f8cc7';
	})
}

saveButton.addEventListener('click',function() {
	listOf.innerHTML = '';
	let ol = document.createElement('ol');
	var li = document.createElement('li');
	if(inpSave.value !== '') {
		li.innerHTML = inpSave.value;
		arrMonth[count].push(li);
	}
	for(let i = 0;i < arrMonth[count].length;i++) {
		ol.appendChild(arrMonth[count][i]);
	}
	inpSave.value = '';
	addBlock.style.display = 'none';
	listOf.appendChild(ol);
})

buttonAdd.addEventListener('click',function() {
	addBlock.style.display = 'block';
})

listOf.addEventListener('click',function(e) {
	let allLi = document.querySelectorAll('ol li');
	if(e.target.tagName == 'LI') {
		for(let i = 0;i < allLi.length;i++) {
			allLi[i].removeAttribute('class');
		}
		e.target.classList.add('activeBlue');
	}
})

buttonDel.addEventListener('click',function() {
	let allLi = document.querySelectorAll('ol li');
	for(let i = 0;i < allLi.length;i++) {
		if(allLi[i].classList.contains('activeBlue')) {
			allLi[i].style.display = 'none';
		}
	}
})

buttonEdit.addEventListener('click',function() {
		let allLi = document.querySelectorAll('ol li');
		for(let i = 0;i < allLi.length;i++) {
			if(allLi[i].classList.contains('activeBlue')) {
				editBlock.style.display = 'block';
				editInp.value = '';
			}
			saveEdit.addEventListener('click',function() {
					if(allLi[i].classList.contains('activeBlue')) {
						if(editInp.value != '') {
							allLi[i].innerHTML = editInp.value;
						editBlock.style.display = 'none';
						}
					}
				})
		}
})