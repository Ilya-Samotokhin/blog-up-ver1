const posts = []

const titleInputNode = document.querySelector('.js-new-post__title')
const textInputNode = document.querySelector('.js-new-post__text')
const newPostBtnNode = document.querySelector('.js-new-post__btn')
const postsNode = document.querySelector('.js-posts')
const clearPostBtnNode = document.querySelector('.js-clear-post__btn')
// Очищает только///

newPostBtnNode.addEventListener('click', function () {
	const postFromUser = getPostFromUser()

	addPost(postFromUser)

	renderPosts()
})

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

clearPostBtnNode.addEventListener('click', function () {
	postsNode.innerHTML += date
})

//Date

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

// console.log(getUserTime())
