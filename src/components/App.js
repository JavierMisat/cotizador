import React, {Component} from 'react';
import Header from "./Header";
import Formulario from "./Formulario";
import {calcularMarca, obtenerDiferenciaAnio, obtenerPlan} from "../helper";
import Resumen from "./Resumen";
import Resultado from "./Resultado";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultado: '',
            datos: {}
        };
    }

    cotizarSeguro = datos => {
        const {marca, plan, year} = datos;

        //Agregar una base de 2000 pedido por la empresa
        let resultado = 2000;

        //Obtener la diferencia de años
        const diferencia = obtenerDiferenciaAnio(year);

        //por cada año restar el 3% del seguro
        resultado -= ((diferencia * 3) * resultado) / 100;

        //Americano 15% asiatico 5% y europeo 30% de incremento al valor actual
        resultado = calcularMarca(marca) * resultado;

        //el plan del auto, el básico aumenta el valor 20% y el completo el 50%
        let incrementoPlan = obtenerPlan(plan);

        //Dependiendo del plan incrementa
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

        //Ya tenemos el costo definimos y seteamos el state
        const datosAuto = {
            marca: marca,
            plan: plan,
            year: year
        };

        this.setState({
            resultado: resultado,
            datos: datosAuto
        })
    };

    render() {
        return (
            <div className="contenedor">
                <Header
                    titulo='Cotizador de Seguro de Auto'/>
                <div className="contenedor-formulario">
                    <Formulario
                        cotizarSeguro={this.cotizarSeguro}/>
                    <Resumen
                        datos={this.state.datos}
                        resultado={this.state.resultado}/>
                    <Resultado
                        resultado={this.state.resultado}/>
                </div>
            </div>
        );
    }
}

export default App;
