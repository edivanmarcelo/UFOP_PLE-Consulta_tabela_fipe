class Ano{
	constructor(container, objeto, JSON_PATH){
		this._onJsonReady = this._onJsonReady.bind(this);
		this._listarAnos = this._listarAnos.bind(this);
		this._carregarResultado = this._carregarResultado.bind(this);
		this._renderResultado = this._renderResultado.bind(this);
		this._mudaTitulo = this._mudaTitulo.bind(this);
		


		this.resultado = null;
		this.codigo = objeto.codigo;
		this.nome = objeto.nome;
		this.json_path = JSON_PATH + '/' + this.codigo;

		this._listarAnos(container);
	}

	_listarAnos(container){
		const button = document.createElement('button');
		button.id = this.codigo;
		button.textContent = this.nome;

		const br = document.createElement('br');

		container.append(button);
		container.append(br);

		button.addEventListener('click', this._carregarResultado);
		button.addEventListener('click', this._mudaTitulo);
	}

	_mudaTitulo(event){
		const botao = document.querySelector('#botaoAno');
		botao.textContent = this.nome;
	}

	_carregarResultado(){
		fetch(this.json_path)
			.then(this._onResponse)
			.then(this._onJsonReady);
	}

	_renderResultado(){

		//console.log(this.resultado);
		const resultadoContainer = document.querySelector('#resultado');
		resultadoContainer.innerHTML = '';
		const resultado = new Resultado(resultadoContainer, this.resultado);
	}

	_onJsonReady(json){
		this.resultado = json;
		this._renderResultado();
	}

	_onResponse(response){
		return response.json();
	}
}