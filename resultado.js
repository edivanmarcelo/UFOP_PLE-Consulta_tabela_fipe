class Resultado{
	constructor(container, objeto){

		this.anoModelo = objeto.AnoModelo; 					//: 2018
		this.codigoFipe = objeto.CodigoFipe;				//: "810092-6"
		this.combustivel = objeto.Combustivel; 				//: "Gasolina"
		this.marca = objeto.Marca; 							//: "HARLEY-DAVIDSON"
		this.mesReferencia = objeto.MesReferencia; 			//: "outubro de 2020 "
		this.modelo = objeto.Modelo; 						//: "FAT BOY 115th ANNIVERSARY FLFBS"
		this.siglaCombustivel = objeto.SiglaCombustivel; 	//: "G"
		this.tipoVeiculo = objeto.TipoVeiculo; 				//: 2
		this.valor = objeto.Valor; 							//: "R$ 66.202,00"

		this._escreverResultado(container);
	}

	_escreverResultado(container){
		const paragrafo1 = document.createElement('p');
		paragrafo1.textContent = 'Mês de Referência: ' + this.mesReferencia;
		container.append(paragrafo1);

		const paragrafo2 = document.createElement('p');
		paragrafo2.textContent = 'Código FIPE: ' + this.codigoFipe;
		container.append(paragrafo2);

		const paragrafo3 = document.createElement('p');
		paragrafo3.textContent = 'Marca: ' + this.marca;
		container.append(paragrafo3);

		const paragrafo4 = document.createElement('p');	
		paragrafo4.textContent = 'Modelo: ' + this.modelo;
		container.append(paragrafo4);		

		const paragrafo5 = document.createElement('p');	
		paragrafo5.textContent = 'Ano Modelo: ' + this.anoModelo;
		container.append(paragrafo5);

		const paragrafo6 = document.createElement('p');
		paragrafo6.textContent = 'Combustivel: ' + this.combustivel;
		container.append(paragrafo6);

		const paragrafo7 = document.createElement('p');
		paragrafo7.textContent = 'Preço Medio: ' + this.valor;
		container.append(paragrafo7);
	}
}