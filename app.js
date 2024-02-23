const posts = []
const TITLE_VALIDATION_LIMIT = 100
const TEXT_VALIDATION_LIMIT = 300

const titleInputNode = document.querySelector('.js-new-post__title')
const textInputNode = document.querySelector('.js-new-post__text')
const newPostBtnNode = document.querySelector('.js-new-post__btn')
const postsNode = document.querySelector('.js-posts')
const validationTitle = document.querySelector('.js-validationTitle')
const validationText = document.querySelector('.js-validationText')

//Отправка формы поста
newPostBtnNode.addEventListener('click', function () {
	const postFromUser = getPostFromUser()

	addPost(postFromUser)

	renderPosts()
})
//

function addDisabledBtn() {
	newPostBtnNode.setAttribute('disabled', '')
	newPostBtnNode.style.backgroundColor = 'grey'
	return
}

function removeDisabledBtn() {
	newPostBtnNode.removeAttribute('disabled', '')
	newPostBtnNode.style.backgroundColor = ''
	return
}

//Длинна поста
titleInputNode.addEventListener('input', function (event) {
	const currentValue = event.target.value
	validationTitle.innerText = `Длинна заголовка не должна превышать ${TITLE_VALIDATION_LIMIT} символов.`

	if (currentValue.length > TITLE_VALIDATION_LIMIT) {
		validationTitle.innerText = `Длинна заголовка не должна превышать ${TITLE_VALIDATION_LIMIT} символов.`
		validationTitle.classList.remove('validationTitle__hidden')
		addDisabledBtn()
	} else {
		validationTitle.classList.add('validationTitle__hidden')
		removeDisabledBtn()
	}
})

textInputNode.addEventListener('input', function (event) {
	const currentValue = event.target.value

	if (currentValue.length > TEXT_VALIDATION_LIMIT) {
		validationText.innerText = `Длинна текста не должна превышать ${TEXT_VALIDATION_LIMIT} символов.`
		validationText.classList.remove('validationText__hidden')
		addDisabledBtn()
	} else {
		validationText.classList.add('validationText__hidden')
		removeDisabledBtn()
	}
})
//

//Формирование формы поста
function getPostFromUser() {
	const title = titleInputNode.value
	const text = textInputNode.value

	return {
		title: title,
		text: text,
	}
}

function addPost(post) {
	posts.push(post)
}

function getPosts() {
	return posts
}

function renderPosts() {
	const posts = getPosts()

	let postsHtml = ''

	posts.forEach(post => {
		postsHtml += `
			<div class = 'post'>
			<p class = 'post__date'>${getUserTime()}</p>
			<p class = 'post__title'>${post.title}</p>
			<p class = 'post__text'>${post.text}</p>
			</div>
		`
	})
	postsNode.innerHTML = postsHtml
}
//

//Отображение кнопок
// titleInputNode.addEventListener('inner', function (event) {
// 	const currentValue = event.target.value

// 	if (currentValue.length > TITLE_VALIDATION_LIMIT) {
// 		newPostBtnNode.setAttribute('disabled', '')
// 		return
// 	}
// })

//

//Даты
function addLeadingZero(d) {
	return d < 10 ? '0' + d : d
}

const days = [
	'Воскресенье',
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота',
]

function getUserTime(t = new Date()) {
	let Y = t.getFullYear()
	let M = addLeadingZero(t.getMonth() + 1)
	let D = addLeadingZero(t.getDate())
	let h = addLeadingZero(t.getHours())
	let m = addLeadingZero(t.getMinutes())

	return `${D}.${M}.${Y} ${h}:${m}`
}
//
