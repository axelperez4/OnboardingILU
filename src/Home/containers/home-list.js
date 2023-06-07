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
      status: 'Pendiente'
    },
    {
      id: 2,
      photo: this.photoUrl,
      name: 'Jane Smith',
      date: '2023-05-05',
      status: 'Pendiente'
    },
    {
      id: 3,
      photo: this.photoUrl,
      name: 'Papá Noel',
      date: '2023-05-08',
      status: 'Pendiente'
    },
    {
      id: 4,
      photo: this.photoUrl,
      name: 'Mary Jones',
      date: '2023-05-10',
      status: 'Pendiente'
    },
    {
      id: 5,
      photo: this.photoUrl,
      name: 'Juan Claudio',
      date: '2023-05-01',
      status: 'Pendiente'
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
