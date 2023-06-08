import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { MenuItem, FormControl, InputLabel, Select, Grid } from "@material-ui/core";
import { Chart, CommonSeriesSettings, Series, ValueAxis, Legend, Tooltip, Format } from 'devextreme-react/chart';


import Layout from "../../Layout/layout";
import { Label } from "devextreme-react/data-grid";

class ReportesContainer extends Component {
    state = {
        open: false,
        selectedYear: '2023',
        selectedMonth: '7',
    };


    handleYearChange = (event) => {
        this.setState({ selectedYear: event.target.value });
    };

    handleMonthChange = (event) => {
        this.setState({ selectedMonth: event.target.value });
    };

    onClickAdd = () => {
        this.setState({ open: true });
    };

    handleCloseModal = () => {
        this.setState({ open: false });
    };

    datosMensual = [
        {
            Departamento: "TI",
            Plan: 2,
            Alcance: 100,
        },
        {
            Departamento: "Finanzas",
            Plan: 5,
            Alcance: 100,
        },
        {
            Departamento: "Gestión de Talento",
            Plan: 4,
            Alcance: 100,
        },
        {
            Departamento: "Prod. Edulcorantes",
            Plan: 7,
            Alcance: 100,
        }
    ];



    render() {
        const { selectedYear, selectedMonth } = this.state;
        return (
            <Layout title="Reportes de Onboardings">
                <React.Fragment>
                    <Grid container spacing={3}>
                        <Grid item xs={3} >
                            <Grid container spacing={3}>
                                <Grid item xs={6} >
                                    <FormControl style={{ width: "100%" }}>
                                        <InputLabel>Año</InputLabel>
                                        <Select value={selectedYear} onChange={this.handleYearChange}>
                                            <MenuItem value={2022}>2022</MenuItem>
                                            <MenuItem value={2023}>2023</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6} >

                                    <FormControl style={{ width: "100%" }}>
                                        <InputLabel>Mes</InputLabel>
                                        <Select value={selectedMonth} onChange={this.handleMonthChange}>
                                            <MenuItem value={1}>Enero</MenuItem>
                                            <MenuItem value={2}>Febrero</MenuItem>
                                            <MenuItem value={3}>Marzo</MenuItem>
                                            <MenuItem value={4}>Abril</MenuItem>
                                            <MenuItem value={5}>Mayo</MenuItem>
                                            <MenuItem value={6}>Junio</MenuItem>
                                            <MenuItem value={7}>Julio</MenuItem>
                                            <MenuItem value={8}>Agosto</MenuItem>
                                            <MenuItem value={9}>Septiembre</MenuItem>
                                            <MenuItem value={10}>Octubre</MenuItem>
                                            <MenuItem value={11}>Noviembre</MenuItem>
                                            <MenuItem value={12}>Diciembre</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <br />
                    <br />

                    <Chart
                        title={"Onboardings por Departamento Mensual"}
                        id="chart"
                        dataSource={this.datosMensual}>
                        <CommonSeriesSettings
                            argumentField={"Departamento"}
                            type={"bar"}
                        />
                        <ValueAxis name={"Plan"}>

                        </ValueAxis>
                        <ValueAxis name={"Alcance"} position={"right"}>
                            <Label customizeText={this.customizeText} />
                        </ValueAxis>
                        <Series
                            valueField={"Plan"}
                            axis={"Plan"}
                            name={"Plan"}
                        />
                        <Series
                            valueField={"Alcance"}
                            axis={"Alcance"}
                            name={"Alcance"}
                            color={"#7dc45c"}
                        />
                        <Legend
                            verticalAlignment="bottom"
                            horizontalAlignment="center"
                        />
                        <Tooltip
                            enabled={true}
                            shared={false}
                        //customizeTooltip={customizeTooltip}
                        >
                            <Format
                                type="largeNumber"
                                precision={1}
                            />
                        </Tooltip>
                    </Chart>
                </React.Fragment>
            </Layout>
        );
    }

    customizeText(arg) {
        return `${arg.valueText}%`;
    }
}

export default withRouter(ReportesContainer);