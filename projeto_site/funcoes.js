
function validaLogin(){
	if (email.value == 'admin@raiseadventurer.com' && senha.value == 'admin') {
		window.location.href='site//index.html';
	}else{
		aviso.style.display='block';
		aviso.innerHTML='Login ou Senha Incorretos';
		// alert('Senha ou E-mail incorretos!');
		// window.location.reload();
	}
}


function validaCadastro(){
if (senha.value === confsenha.value) {
	window.location('Login.html');
	}else if (senha.value != confsenha.value){
		aviso.innerHTML='Senhas não são iguais';

	}
}