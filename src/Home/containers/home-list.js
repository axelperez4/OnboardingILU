import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import OnboardingList from "../components/OnboardingList";

import Layout from "../../Layout/layout";

class Onboardings extends Component {
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
      status: 'Nuevo',
      departamento: 'Tecnología de la Información',
      nivel: 5,
    },
    {
      id: 2,
      photo: 'https://www.shutterstock.com/image-photo/passport-picture-woman-long-dark-260nw-300543956.jpg',
      name: 'Rosa María de la Cruz',
      date: '2023-05-05',
      status: 'Nuevo',
      departamento: 'Gestión de Talento',
      nivel: 7,
    },
    {
      id: 3,
      photo: 'https://www.shutterstock.com/image-photo/id-photo-portrait-handsome-mature-260nw-1592137060.jpg',
      name: 'Papá Noel',
      date: '2023-05-08',
      status: 'Nuevo',
      departamento: 'Compensaciones y Beneficios',
      nivel: 6,
    },
    {
      id: 4,
      photo: 'https://www.idcardstore.com.au/wp-content/uploads/2020/07/portrait-for-photo-id-card-scaled-e1613635059727.jpg',
      name: 'Mary Jones',
      date: '2023-05-10',
      status: 'Nuevo',
      departamento: 'Compensaciones y Beneficios',
      nivel: 7,
    },
    {
      id: 5,
      photo: 'https://media.istockphoto.com/id/984335268/photo/passport-document-id-photo-business-man-portrait.jpg?s=170667a&w=0&k=20&c=GgnKhUX_lMOhv8xM4K636HhXXEJ8eFZmgqkemJ9S5v8=',
      name: 'Juan Claudio',
      date: '2023-05-01',
      status: 'Nuevo',
      departamento: 'Aseguramiento de la Calidad',
      nivel: 7,
    },
  ];

  render() {
    return (
      <Layout title="Nuevos Onboardings">
        <React.Fragment>
          <OnboardingList onboardingData={this.onboardingData} />
        </React.Fragment>
      </Layout>
    );
  }
}

export default withRouter(Onboardings);
