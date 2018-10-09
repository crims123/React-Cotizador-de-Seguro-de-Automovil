import React, { Component } from 'react';
import Header from "./Header";
import Formulario from "./Formulario";
import {obtenerDiferenciaAnio, calcularMarca,obtenerPlan} from "../helper"; // importo las 2 funciones del helper
import Resultado from "./Resultado";
import Resumen from "./Resumen";
//creamos un componente class que es donde se va arenderizar todo el proyecto

class App extends Component {


  //creamos un estado vacio y luego lo cambiaremos con los nuevos datos

  constructor (props){
    super(props);
    this.state = {

        resultado:"",
        datos:{}
    }
  }


  cotizarSeguroPadre=(datos)=>{
    

     const {marca,plan,year} =datos;
     

     //Agregar una base de  2000
     let resultado = 2000;


     // obtener la diferencia de anos y restara un 3% por cada ano que alla menos
      let diferencia = obtenerDiferenciaAnio(year);
     //console.log(diferencia); si elijo 2017 imprimiria 1 ya que coje al ano actual menos el elejido
     
     // aca lo que hicimos fue restarle el 3 por ciento dependiendo de cada ano
     let descuento = diferencia*0.03;
     descuento = resultado*descuento;
     resultado = resultado-descuento;
     //console.log(resultado);

     //americano 15% ,asiatico 5% y europeo un 30% de incremento al valor actual

     resultado = calcularMarca(marca) * resultado;
     //console.log(resultado);
     
     // Ahora dependiendo del plan va aumentar si es basico aumenta un 20% el valor y si es completo un 50%

     resultado =obtenerPlan(plan) * resultado;
     console.log(resultado);

     
     // creamos un objeto con los datos del carro
     const datosAuto = {
      marcaAuto : marca,
      yearAuto :year,
      planAuto: plan,

     }



     this.setState({

          resultado:resultado ,  // cambia el resultado vacio que pusimos en el primer estado por
          // la nueva variable resultado
          datos:datosAuto

     })

  }

  
  render() {
    return (
      <div className="contenedor">
      <Header titulo="Cotizador de seguros de auto"/>

      <div className="contenedor-formulario">
       <Formulario cotizar={this.cotizarSeguroPadre}  />
      </div>

      
      <Resumen marca={this.state.datos.marcaAuto} plan={this.state.datos.planAuto}
      año={this.state.datos.yearAuto} />
      <Resultado resultado= {this.state.resultado} />
       
      </div>
    );
  }
}

export default App;
