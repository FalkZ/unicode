import './style.styl'

import unicode from './unicode.yml'

const copyToClipboard = ({ target }) =>
	navigator.clipboard
		.writeText(target.innerHTML)
		.then(
			() =>
				console.log(
					'Async: Copying to clipboard was successful!',
					target.innerHTML
				),
			(err) =>
				console.error('Async: Could not copy text: ', err)
		)

const p = ({ parent, value }) => {
	const p = document.createElement('p')
	p.onclick = copyToClipboard
	p.appendChild(document.createTextNode(value))
	parent.appendChild(p)
}

const nav = document.getElementById('nav')

Object.keys(unicode).map((key) => {
	const parent = document.createElement('div')
	parent.setAttribute('class', 'container')
	const title = document.createElement('h2')
	title.setAttribute('id', key)
	const name = document.createTextNode(key)
	const a = document.createElement('a')
	title.appendChild(document.createTextNode(key))
	a.appendChild(name)
	a.setAttribute('href', '#' + key)
	nav.appendChild(a)
	parent.appendChild(title)
	unicode[key].split('').map((value) => p({ parent, value }))

	document.body.appendChild(parent)
})
