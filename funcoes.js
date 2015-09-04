$(function() {
	
	$('#logo').fadeIn(2000);
	
	var email = localStorage.getItem('fv.email_firevendas');
	
	if( email == null ){
		$('#btn-primeiro-acesso').show();
	}else{
		$('#btn-acesso').show();
	}
});

function autenticaUsuario(){
	
	if( $("#email").val() != '' && $("#senha").val() != '' ){
		
		if( $("#email").val() == localStorage.getItem('fv.email_firevendas') && $("#senha").val() == localStorage.getItem('fv.senha_firevendas') ){		
			localStorage.setItem('fv.logado', true );
			window.location = 'agenda.html';
		}else{
			alert('Usuario não encontrado');	
		}
		
	}else{
		alert('Dados não informados.');	
	}
	
}

function gravarNovo(){
	
	if( $("#email-representacao").val() != '' && 
		$("#nome").val() != '' && 
		$("#telefone").val() != '' && 
		$("#email-firevendas").val() != '' && 
		$("#senha-firevendas").val() != '' && 
		$("#empresa").val() != '' ){
				
		localStorage.setItem('fv.representacao', $("#email-representacao").val() );
		localStorage.setItem('fv.nome', $("#nome").val() );
		localStorage.setItem('fv.telefone', $("#telefone").val() );
		localStorage.setItem('fv.email_firevendas', $("#email-firevendas").val() );
		localStorage.setItem('fv.senha_firevendas', $("#senha-firevendas").val() );
		localStorage.setItem('fv.empresa', $("#empresa").val() );
		
		window.location = 'index.html';
		
	}else{
		alert('É necessário o preenchimento de todos os dados');	
	}
}