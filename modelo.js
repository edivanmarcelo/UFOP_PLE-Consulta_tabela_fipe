class Modelo{
	constructor(container, objeto, JSON_PATH){
		this._onJsonReady = this._onJsonReady.bind(this);
		this._listarModelos = this._listarModelos.bind(this);
		this._carregarAnos = this._carregarAnos.bind(this);
		this._renderAnos = this._renderAnos.bind(this);
		this._mudaTitulo = this._mudaTitulo.bind(this);
		


		this.anos = [];
		this.codigo = objeto.codigo;
		this.nome = objeto.nome;
		this.json_path = JSON_PATH + '/' + this.codigo + '/anos';

		this._listarModelos(container);
	}

	_listarModelos(container){
		const button = document.createElement('button');
		button.id = this.codigo;
		button.textContent = this.nome;

		const br = document.createElement('br');

		container.append(button);
		container.append(br);

		button.addEventListener('click', this._carregarAnos);
		button.addEventListener('click', this._mudaTitulo);
	}

	_mudaTitulo(event){
		const botao = document.querySelector('#botaoModelo');
		botao.textContent = this.nome;

		document.dispatchEvent(new CustomEvent('reiniciaAno'));
	}

	_carregarAnos(){
		fetch(this.json_path)
			.then(this._onResponse)
			.then(this._onJsonReady);
	}

	_renderAnos(){
		const anosContainer = document.querySelector('#ano');
		anosContainer.innerHTML = '';
		for(const obj of this.modelos){
			//console.log(obj);
			const ano = new Ano(anosContainer, obj, this.json_path);
		}
	}

	_onJsonReady(json){
		this.modelos = json;
		this._renderAnos();
	}

	_onResponse(response){
		return response.json();
	}
}