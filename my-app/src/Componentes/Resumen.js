import React from "react";


class Resumen extends React.Component {



	mostrarResumen = ()=>{
		if (this.props.marca ||this.props.plan ||this.props.año) {
					return(
					<div className="resumen">
					<h1>El resumen de la Cotizacion es:</h1>
					<p>Marca: {this.props.marca} </p>
					<p>Plan:  {this.props.plan}</p>
					<p>Año del Auto: {this.props.año} </p>
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

export default Resumen;