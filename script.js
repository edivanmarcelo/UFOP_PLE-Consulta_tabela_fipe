function ConsultarMotos(event){
	const moto = new App('motos');

	const titulo = document.querySelector('#automovel');
	titulo.textContent = 'Consulta de Motos';

	document.dispatchEvent(new CustomEvent('reiniciaMarca'));
	document.dispatchEvent(new CustomEvent('reiniciaModelo'));
	document.dispatchEvent(new CustomEvent('reiniciaAno'));

	const modelosContainer = document.querySelector('#modelo');
	modelosContainer.innerHTML = '';
	const anosContainer = document.querySelector('#ano');
	anosContainer.innerHTML = '';
}

function ConsultarCarros(event){
	const carro = new App('carros');

	const titulo = document.querySelector('#automovel');
	titulo.textContent = 'Consulta de Carros';

	document.dispatchEvent(new CustomEvent('reiniciaMarca'));
	document.dispatchEvent(new CustomEvent('reiniciaModelo'));
	document.dispatchEvent(new CustomEvent('reiniciaAno'));

	const modelosContainer = document.querySelector('#modelo');
	modelosContainer.innerHTML = '';
	const anosContainer = document.querySelector('#ano');
	anosContainer.innerHTML = '';
}

function ConsultarCaminhoes(event){
	const caminhao = new App('caminhoes');

	const titulo = document.querySelector('#automovel');
	titulo.textContent = 'Consulta de Caminhões';

	document.dispatchEvent(new CustomEvent('reiniciaMarca'));
	document.dispatchEvent(new CustomEvent('reiniciaModelo'));
	document.dispatchEvent(new CustomEvent('reiniciaAno'));

	const modelosContainer = document.querySelector('#modelo');
	modelosContainer.innerHTML = '';
	const anosContainer = document.querySelector('#ano');
	anosContainer.innerHTML = '';
}

const botaoMoto = document.querySelector('#consultaMoto');
botaoMoto.addEventListener('click', ConsultarMotos);

const botaoCarro = document.querySelector('#consultaCarro');
botaoCarro.addEventListener('click', ConsultarCarros);

const botaoCaminhao = document.querySelector('#consultaCaminhao');
botaoCaminhao.addEventListener('click', ConsultarCaminhoes);