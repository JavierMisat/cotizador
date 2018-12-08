import React, {Component} from 'react';

class Resumen extends Component {

    mostrarResumen = () => {
        const {marca, year, plan} = this.props.datos;
        if(!marca || !year || !plan) return null;
        return (
            <div className="resumen">
                <h2>Resumen de cotización</h2>
                <li>Marca: {marca}</li>
                <li>Plan: {plan}</li>
                <li>Año: {year}</li>
            </div>
        );
    };

    render() {
        return (
            <div>
                {this.mostrarResumen()}
            </div>
        );
    }

}

export default Resumen;