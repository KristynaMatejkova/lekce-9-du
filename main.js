//1 - Auto

const car = document.querySelector('img')

document.addEventListener('keydown', (event) => {
    if(event.key == 'ArrowRight'){
    car.style.marginLeft = '50px'
    }
    else if(event.key == 'ArrowLeft'){
    car.style.marginLeft = '0px'
    }
    else{
        console.log('Nebyla stisknuta správná klávesa.')
    }
    })

//2 - Přihlášení
  const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

const email = document.getElementById('email')
const password = document.getElementById('password')
const login = document.querySelector('.login')
const form = document.getElementById('login-form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('submit')

	if(email.value === user.email && password.value === user.password) {
		login.innerHTML = `Přihlášený uživatel: ${user.name}`
	} else {
		document.querySelector('h2').textContent = 'Neplatné přihlašovací údaje'
		password.value = ''
	}
})

