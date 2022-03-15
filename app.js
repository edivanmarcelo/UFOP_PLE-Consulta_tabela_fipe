class App{
	constructor(url){
		this.mostraMarcas = this.mostraMarcas.bind(this);
		this.mostraModelos = this.mostraModelos.bind(this);
		this.mostraAnos = this.mostraAnos.bind(this);
		
		this.escondeMarcas = this.escondeMarcas.bind(this);
		this.escondeModelos = this.escondeModelos.bind(this);
		this.escondeAnos = this.escondeAnos.bind(this);

		this.escondeListas = this.escondeListas.bind(this);

		this.carregaMarcas = this.carregaMarcas.bind(this);
		this._renderMarcas = this._renderMarcas.bind(this);
		this._onResponse = this._onResponse.bind(this);
		this._onJsonReady = this._onJsonReady.bind(this);

		this.json_path = 'https://parallelum.com.br/fipe/api/v1/' + url +'/marcas';
		this.marcas = [];
		this.carregaMarcas();

		this.botaoMarca = document.querySelector('#botaoMarca');
		this.botaoMarca.addEventListener('click', this.mostraMarcas);

		this.botaoModelo = document.querySelector('#botaoModelo');
		this.botaoModelo.addEventListener('click', this.mostraModelos);

		this.botaoAno = document.querySelector('#botaoAno');
		this.botaoAno.addEventListener('click', this.mostraAnos);

		this.corpo = document.querySelector('#Corpo');
		this.corpo.addEventListener('click', this.escondeListas);

		document.addEventListener('reiniciaMarca', this.reiniciaMarca);
		document.addEventListener('reiniciaModelo', this.reiniciaModelo);
		document.addEventListener('reiniciaAno', this.reiniciaAno);
	}

	mostraMarcas(event){
		const lista = document.querySelector('#marca');
		lista.classList.remove('oculto');
		lista.classList.add('animacaoCresce');

		this.escondeModelos(event);
		this.escondeAnos(event);

		event.stopPropagation();
	}

	mostraModelos(event){
		const lista = document.querySelector('#modelo');
		lista.classList.remove('oculto');
		lista.classList.add('animacaoCresce');

		this.escondeMarcas(event);
		this.escondeAnos(event);

		event.stopPropagation();
	}

	mostraAnos(event){
		const lista = document.querySelector('#ano');
		lista.classList.remove('oculto');
		lista.classList.add('animacaoCresce');

		this.escondeMarcas(event);
		this.escondeModelos(event);

		event.stopPropagation();
	}

	escondeMarcas(event){
		const lista = document.querySelector('#marca');
		lista.classList.add('oculto');

		event.stopPropagation();
	}

	escondeModelos(event){
		const lista = document.querySelector('#modelo');
		lista.classList.add('oculto');

		event.stopPropagation();
	}

	escondeAnos(event){
		const lista = document.querySelector('#ano');
		lista.classList.add('oculto');

		event.stopPropagation();
	}

	reiniciaMarca(){
		const botaoMarca = document.querySelector('#botaoMarca');
		botaoMarca.textContent = 'Selecione a Marca do Veículo';
	}

	reiniciaModelo(){
		const botaoModelo = document.querySelector('#botaoModelo');
		botaoModelo.textContent = 'Selecione o Modelo do Veículo';
	}

	reiniciaAno(){
		const botaoAno = document.querySelector('#botaoAno');
		botaoAno.textContent = 'Selecione o Ano do Veículo';
	}

	escondeListas(event){
		this.escondeMarcas(event);
		this.escondeModelos(event);
		this.escondeAnos(event);
	}

	carregaMarcas(){
		fetch(this.json_path)
			.then(this._onResponse)
			.then(this._onJsonReady);
	}

	_renderMarcas(){
		const marcasContainer = document.querySelector('#marca');
		marcasContainer.innerHTML = '';
		for(const obj of this.marcas){
			//console.log(obj);
			const marca = new Marca(marcasContainer, obj, this.json_path);
		}
	}

	_onJsonReady(json){
		this.marcas = json;
		this._renderMarcas();
	}

	_onResponse(response){
		return response.json();
	}
}