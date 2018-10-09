import React from "react";


class Resultado extends React.Component {



	mostrarResumen = ()=>{
		if (this.props.resultado) {
					return(
					<div className="resultado2">
					<p>El total que debe pagar son {this.props.resultado} USD </p>
					</div>


					);
	}}


	render(){

			return(
					<div>
			{this.mostrarResumen()}
			</div>
				);

	}

}

export default Resultado;