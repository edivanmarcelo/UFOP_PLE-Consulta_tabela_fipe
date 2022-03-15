class Marca{
	constructor(container, objeto, JSON_PATH){
		this._onJsonReady = this._onJsonReady.bind(this);
		this._listarMarcas = this._listarMarcas.bind(this);
		this._carregarModelos = this._carregarModelos.bind(this);
		this._renderModelos = this._renderModelos.bind(this);
		this._mudaTitulo = this._mudaTitulo.bind(this);


		this.modelos = [];
		this.codigo = objeto.codigo;
		this.nome = objeto.nome;
		this.json_path = JSON_PATH + '/' + this.codigo + '/modelos';

		this._listarMarcas(container);
	}

	_listarMarcas(container){
		const button = document.createElement('button');
		button.id = this.codigo;
		button.textContent = this.nome;

		const br = document.createElement('br');

		container.append(button);
		container.append(br);

		button.addEventListener('click', this._carregarModelos);
		button.addEventListener('click', this._mudaTitulo);
	}

	_mudaTitulo(event){
		const botao = document.querySelector('#botaoMarca');
		botao.textContent = this.nome;

		document.dispatchEvent(new CustomEvent('reiniciaModelo'));
		document.dispatchEvent(new CustomEvent('reiniciaAno'));
		const anosContainer = document.querySelector('#ano');
		anosContainer.innerHTML = '';
	}

	_carregarModelos(){
		fetch(this.json_path)
			.then(this._onResponse)
			.then(this._onJsonReady);
	}

	_renderModelos(){
		const modelosContainer = document.querySelector('#modelo');
		modelosContainer.innerHTML = '';
		for(const obj of this.modelos){
			//console.log(obj);
			const modelo = new Modelo(modelosContainer, obj, this.json_path);
		}
	}

	_onJsonReady(json){
		this.modelos = json.modelos;
		this._renderModelos();
	}

	_onResponse(response){
		return response.json();
	}
}