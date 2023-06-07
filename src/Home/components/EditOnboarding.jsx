import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Tooltip, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '-webkit-fill-available',
    },
    itemCentrado: {
        textAlign: 'center',
    },
    botonSave: {
        width: '25%',
    },
    fechaEv: {
        'vertical-align': 'baseline',
        width: '80%',
    }
}));

const EditOnboarding = () => {
    const classes = useStyles();
    const [selectedWills, setSelectedWills] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedRecursos, setSelectedRecursos] = useState([]);
    const [selectedDates, setSelectedDates] = useState([getDefaultDate()]);


    // Helper function to get the default selected date (3 months ahead of the current date)
    function getDefaultDate() {
        const currentDate = new Date();
        const futureDate = new Date();
        futureDate.setMonth(currentDate.getMonth() + 3);
        return futureDate.toISOString().split('T')[0]; // Format date as 'YYYY-MM-DD'
    }

    useEffect(() => {
        const defaultSelectedWills = rows.filter((row) => row.default).map((row) => row.id);
        setSelectedWills(defaultSelectedWills);

        const defaultSelectedSkills = rows.filter((row) => row.default).map((row) => row.id);
        setSelectedSkills(defaultSelectedSkills);

        const defaultSelectedRecursos = rows.filter((row) => row.default).map((row) => row.id);
        setSelectedRecursos(defaultSelectedRecursos);
    }, []);

    // Event handler for adding a Will to the selected list
    const handleAddWill = (will) => {
        setSelectedWills((prevSelectedWills) => [...prevSelectedWills, will]);
    };

    // Event handler for removing a Will from the selected list
    const handleRemoveWill = (will) => {
        setSelectedWills((prevSelectedWills) =>
            prevSelectedWills.filter((selectedWill) => selectedWill.id !== will.id)
        );
    };

    // Event handler for adding a Skill to the selected list
    const handleAddSkill = (skill) => {
        setSelectedSkills((prevSelectedSkills) => [...prevSelectedSkills, skill]);
    };

    // Event handler for removing a Skill from the selected list
    const handleRemoveSkill = (skill) => {
        setSelectedSkills((prevSelectedSkills) =>
            prevSelectedSkills.filter((selectedSkill) => selectedSkill.id !== skill.id)
        );
    };

    // Event handler for adding a Recurso to the selected list
    const handleAddRecurso = (recurso) => {
        setSelectedRecursos((prevSelectedRecursos) => [...prevSelectedRecursos, recurso]);
    };

    // Event handler for removing a Recurso from the selected list
    const handleRemoveRecurso = (recurso) => {
        setSelectedRecursos((prevSelectedRecursos) =>
            prevSelectedRecursos.filter((selectedRecurso) => selectedRecurso.id !== recurso.id)
        );
    };

    // Event handler for adding a date to the selected list
    const handleAddDate = () => {
        setSelectedDates((prevSelectedDates) => [...prevSelectedDates, getDefaultDate()]);
    };

    // Event handler for removing a date from the selected list
    const handleRemoveDate = (index) => {
        setSelectedDates((prevSelectedDates) =>
            prevSelectedDates.filter((_, i) => i !== index)
        );
    };

    // Event handler for saving the edited onboarding details
    const handleSave = () => {
        // Perform save operation here
        console.log('Save clicked!');
    };

    const handleSelectionChange = (selection) => {
        setSelectedWills(selection.selectionModel);
    };

    const rows = [
        { id: 1, will: 'Responsabilidad', descripcion: 'Cumple con su deber y responde a lo acordado', peso: 15, default: true },
        { id: 2, will: 'Compromiso', descripcion: 'Es más que laborioso y va más allá de sus tareas para trascender.', peso: 10, default: true },
        { id: 3, will: 'Trabajo en equipo', descripcion: 'Demuestra la unión de voluntades y el conocimiento compartido genera mejores soluciones.', peso: 10, default: true },
        { id: 4, will: 'Integridad', descripcion: 'Demuestra transparencia, rectitud y congruencia en su actuar en cualquier situación.', peso: 20, default: false },
    ];

    const columns = [

        { field: 'will', headerName: 'Will', flex: 1 },
        { field: 'descripcion', headerName: 'Descripcion', flex: 1 },
        { field: 'peso', headerName: 'Peso', flex: 1 },
    ];

    const rowsSkills = [
        { id: 1, skill: 'Objetivos de aprendizaje', descripcion: 'Conocimiento del Negocio y Estructuras Organizacionales', default: true },
        { id: 2, skill: 'Objetivos de aprendizaje', descripcion: 'Conocimiento de la Cultura ILU / Valores organizacionales y Código de Ética', default: true },
        { id: 3, skill: 'Desarrollo de competencias', descripcion: 'Definición de políticas y seguimient de presupuesto de Operación de la siguiente Zafra 2022-2023', default: true },
        { id: 4, skill: 'Desarrollo de competencias', descripcion: 'Seguimiento a la ejecución presupuestaria de las unidades de la Compañía.', default: false },
        { id: 5, skill: 'Desarrollo de competencias', descripcion: 'Ejecución acumulada a la fecha y proyección de cierre de Presupuesto del periodo 2021-2022', default: false },
        { id: 6, skill: 'Objetivos de desempeño', descripcion: 'Margen Operativo (Ponderación)', default: false },
        { id: 7, skill: 'Objetivos de desempeño', descripcion: 'Costo Total (US$ t d azúcar) (Ponderación)', default: false },
        { id: 8, skill: 'Objetivos de desempeño', descripcion: 'Solvencia Financiera (rentabilidad + eficiencia ) (Ponderación)', default: false },
    ];

    const columnsSkills = [

        { field: 'skill', headerName: 'Aspecto Técnico', flex: 1 },
        { field: 'descripcion', headerName: 'Descripción', flex: 1 },
    ];

    const rowsRecursos = [
        { id: 1, descripcion: 'Contrato de trabajo', responsable: 'Compensaciones y Beneficios', default: true },
        { id: 2, descripcion: 'Tarjeta de seguro de vida y gastos médicos', responsable: 'Compensaciones y Beneficios', default: true },
        { id: 3, descripcion: 'Asignación de Computadora', responsable: 'Tecnología de la Información', default: true },
    ];

    const columnsRecursos = [
        { field: 'descripcion', headerName: 'Descripción', flex: 1 },
        { field: 'responsable', headerName: 'Responsable', flex: 1 },
    ];

    return (

        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>


                    <Typography variant="h4" component="h2" gutterBottom>
                        Iniciar Onboarding
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6" component="h3" gutterBottom>
                        Selecciona Wills para este onboarding:
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        checkboxSelection
                        onSelectionModelChange={handleSelectionChange}
                        selectionModel={selectedWills}
                        autoHeight
                        autoWidth
                    />
                    <br />
                    <br />
                </Grid>


                <Grid item xs={12}>
                    <Typography variant="h6" component="h3" gutterBottom>
                        Selecciona Skills para este onboarding:
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <DataGrid
                        rows={rowsSkills}
                        columns={columnsSkills}
                        checkboxSelection
                        onSelectionModelChange={handleSelectionChange}
                        selectionModel={selectedSkills}
                        autoHeight
                        autoWidth
                    />
                    <br />
                    <br />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6" component="h3" gutterBottom>
                        Seleccionar Recursos para este onboarding:
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <DataGrid
                        rows={rowsRecursos}
                        columns={columnsRecursos}
                        checkboxSelection
                        onSelectionModelChange={handleSeleweewctionChange}
                        selectionModel={selectedRecursos}
                        autoHeight
                        autoWidth
                    />
                    <br />
                    <br />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6" component="h3" gutterBottom>
                        Selecciona las fechas de evaluación
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Grid container spacing={2}>

                        {selectedDates.map((date, index) => (
                            <React.Fragment key={index}>
                                <Grid item xs={12} className={classes.fechaEv}>
                                    <TextField
                                        className={classes.fechaEv}
                                        type="date"
                                        value={date}
                                        onChange={(e) => {
                                            const newDates = [...selectedDates];
                                            newDates[index] = e.target.value;
                                            setSelectedDates(newDates);
                                        }}
                                    />
                                    <IconButton
                                        style={{ marginLeft: '10px' }}
                                        aria-label="delete"
                                        onClick={() => handleRemoveDate(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>

                            </React.Fragment>
                        ))}
                        <Grid item xs={12} className={classes.itemCentrado}>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={handleAddDate}
                                startIcon={<AddIcon />}>
                                Añadir fecha de evaluación
                            </Button>
                            <br></br>
                            <br></br>
                            <br></br>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.itemCentrado}>
                    <Button variant="contained" color="primary" size='large' onClick={handleSave} className={classes.botonSave}>
                        Guardar
                    </Button>
                </Grid>
            </Grid>
        </div >


    );
};

export default EditOnboarding;