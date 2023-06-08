import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PendientesList from "../Components/PendientesList";

import Layout from "../../Layout/layout";

class PendientesContainer extends Component {
    state = {
        open: false,
    };
    onClickAdd = () => {
        this.setState({ open: true });
    };

    handleCloseModal = () => {
        this.setState({ open: false });
    };

    photoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Chuck_Norris_May_2015.jpg/330px-Chuck_Norris_May_2015.jpg';

    onboardingData = [
        {
            id: 1,
            photo: this.photoUrl,
            name: 'Axel Pérez',
            date: '2023-05-01',
            status: 'Pendiente',
            departamento: 'Tecnología de la Información',
            nivel: 5,
            ultimaNotaSkills: "85",
            ultimaNotaWills: "90",
            notaMedia: "85",
            intento: 2,
            puntosFuertes: "Liderazgo, Trabajo en equipo",
            puntosMejora: "Comunicación",
            comentariosEvaluador: "Excelente trabajo",
            comentariosEvaluado: "Gracias por la retroalimentación",
            Resultado: "Onboarding",
        },
        {
            id: 2,
            photo: this.photoUrl,
            name: 'Rosa María de la Cruz',
            date: '2023-05-05',
            status: 'Pendiente',
            departamento: 'Gestión de Talento',
            nivel: 7,
            ultimaNotaSkills: "35",
            ultimaNotaWills: "55",
            notaMedia: "45",
            intento: 1,
            puntosFuertes: "Liderazgo, actitud positiva",
            puntosMejora: "Temperamento",
            comentariosEvaluador: "Semana ocupada",
            comentariosEvaluado: "Gracias",
            Resultado: "Retroalimentación",
        },
        {
            id: 3,
            photo: this.photoUrl,
            name: 'Papá Noel',
            date: '2023-05-08',
            status: 'Pendiente',
            departamento: 'Compensaciones y Beneficios',
            nivel: 6,
            ultimaNotaSkills: "20",
            ultimaNotaWills: "70",
            notaMedia: "45",
            intento: 2,
            puntosFuertes: "Actidud",
            puntosMejora: "Conocimientos",
            comentariosEvaluador: "Gracias por participar",
            comentariosEvaluado: "Gracias",
            Resultado: "Desvincular",
        },
        {
            id: 4,
            photo: this.photoUrl,
            name: 'Mary Jones',
            date: '2023-05-10',
            status: 'Pendiente',
            departamento: 'Compensaciones y Beneficios',
            nivel: 7,
            ultimaNotaSkills: "90",
            ultimaNotaWills: "90",
            notaMedia: "90",
            intento: 2,
            puntosFuertes: "Mejora continua",
            puntosMejora: "Comunicación",
            comentariosEvaluador: "Excelente trabajo",
            comentariosEvaluado: "Gracias por la retroalimentación",
            Resultado: "Onboarding",
        },
    ];

    render() {
        return (
            <Layout title="Revisión de Onboardings">
                <React.Fragment>
                    <PendientesList onboardingData={this.onboardingData} />
                </React.Fragment>
            </Layout>
        );
    }
}

export default withRouter(PendientesContainer);
