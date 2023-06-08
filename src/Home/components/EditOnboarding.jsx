import { Button, FormControl, Grid, IconButton, Modal, MenuItem, Select, TextField, InputLabel, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

import { getSimple } from '../../Utils/api';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '20%',
        maxHeight: '80vh',
        overflow: 'auto',
        borderRadius: 8,
        'border-style': 'double',
        //maxWidth: 800,
    },
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
    const [Wills, setWills] = useState([]);
    const [Skills, setSkills] = useState([]);
    const [Recursos, setRecursos] = useState([]);
    const [RamasSkill, setRamasSkill] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedRamaSkill, setSelectedRamaSkill] = useState(null);


    // Helper function to get the default selected date (3 months ahead of the current date)
    function getDefaultDate() {
        const currentDate = new Date();
        const futureDate = new Date();
        futureDate.setMonth(currentDate.getMonth() + 3);
        return futureDate.toISOString().split('T')[0]; // Format date as 'YYYY-MM-DD'
    }

    useEffect(() => {
        async function get() {
            var response = await getRegistros('/api/Wills');
            setWills(response);
            response = await getRegistros('/api/Skills');
            setSkills(response);
            response = await getRegistros('api/Recursoes');
            setRecursos(response);
            response = await getRegistros('api/getRamasSkill');
            setRamasSkill(response);
        }
        get();
    }, []);

    useEffect(() => {
        const defaultSelectedWills = Wills.filter((row) => row.PorDefecto).map((row) => row.Id);
        setSelectedWills(defaultSelectedWills);

        const defaultSelectedSkills = Skills.filter((row) => row.PorDefecto).map((row) => row.Id);
        setSelectedSkills(defaultSelectedSkills);

        const defaultSelectedRecursos = Recursos.filter((row) => row.PorDefecto).map((row) => row.Id);
        setSelectedRecursos(defaultSelectedRecursos);
    }, [Wills, Skills, Recursos]);

    async function getRegistros(uri) {
        try {
            const response = await getSimple(uri);
            console.log(response);
            return response;
        } catch (error) {
            this.setState({ error: true });
        } finally {
            //this.setState({ loading: false })
        }
    }

    const handlePost = async (url, data) => {
        let baseUrl = 'http://localhost:52897/'
        url = baseUrl + url;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const json = await response.json();
            let actualizacion = await getRegistros('/api/Skills');
            setSkills(actualizacion);
        } catch (error) {
            console.log(error);
        }

        setOpenModal(false);
        return null;
    };

    const handleAddNewSkill = () => {

        setOpenModal(true);
    };
    // Event handler for adding a Will to the selected list
    const handleAddWill = (will) => {
        setSelectedWills((prevSelectedWills) => [...prevSelectedWills, will]);
    };

    // Event handler for removing a Will from the selected list
    const handleRemoveWill = (will) => {
        setSelectedWills((prevSelectedWills) =>
            prevSelectedWills.filter((selectedWill) => selectedWill.Id !== will.Id)
        );
    };

    // Event handler for adding a Skill to the selected list
    const handleAddSkill = (skill) => {
        setSelectedSkills((prevSelectedSkills) => [...prevSelectedSkills, skill]);
    };

    // Event handler for removing a Skill from the selected list
    const handleRemoveSkill = (skill) => {
        setSelectedSkills((prevSelectedSkills) =>
            prevSelectedSkills.filter((selectedSkill) => selectedSkill.Id !== skill.Id)
        );
    };

    // Event handler for adding a Recurso to the selected list
    const handleAddRecurso = (recurso) => {
        setSelectedRecursos((prevSelectedRecursos) => [...prevSelectedRecursos, recurso]);
    };

    // Event handler for removing a Recurso from the selected list
    const handleRemoveRecurso = (recurso) => {
        setSelectedRecursos((prevSelectedRecursos) =>
            prevSelectedRecursos.filter((selectedRecurso) => selectedRecurso.Id !== recurso.Id)
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

    const handleSelectionChangeWill = (selection) => {
        console.log(selection);
        setSelectedWills(selection.selectionModel);
    };

    const handleSelectionChangeSkill = (selection) => {
        console.log(selection);
        setSelectedSkills(selection.selectionModel);
    };

    const handleSelectionChangeRecurso = (selection) => {
        console.log(selection);
        setSelectedRecursos(selection.selectionModel);
    };

    const rows = [
        { id: 1, will: 'Responsabilidad', descripcion: 'Cumple con su deber y responde a lo acordado', peso: 15, default: true },
        { id: 2, will: 'Compromiso', descripcion: 'Es más que laborioso y va más allá de sus tareas para trascender.', peso: 10, default: true },
        { id: 3, will: 'Trabajo en equipo', descripcion: 'Demuestra la unión de voluntades y el conocimiento compartido genera mejores soluciones.', peso: 10, default: true },
        { id: 4, will: 'Integridad', descripcion: 'Demuestra transparencia, rectitud y congruencia en su actuar en cualquier situación.', peso: 20, default: false },
    ];

    const columns = [

        { field: 'Will', headerName: 'Will', flex: 1 },
        { field: 'Descripcion', headerName: 'Descripcion', flex: 1 },
        { field: 'Peso', headerName: 'Peso', flex: 1 },

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

        { field: 'Skill', headerName: 'Aspecto Técnico', flex: 1 },
        { field: 'Descripcion', headerName: 'Descripción', flex: 1 },
    ];

    const rowsRecursos = [
        { id: 1, descripcion: 'Contrato de trabajo', responsable: 'Compensaciones y Beneficios', default: true },
        { id: 2, descripcion: 'Tarjeta de seguro de vida y gastos médicos', responsable: 'Compensaciones y Beneficios', default: true },
        { id: 3, descripcion: 'Asignación de Computadora', responsable: 'Tecnología de la Información', default: true },
    ];

    const columnsRecursos = [
        { field: 'Descripcion', headerName: 'Descripción', flex: 1 },
        { field: 'Responsable', headerName: 'Responsable', flex: 1 },
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
                        rows={Wills ?? []}
                        getRowId={(row) => row.Id}
                        columns={columns}
                        checkboxSelection
                        onSelectionModelChange={handleSelectionChangeWill}
                        selectionModel={selectedWills}
                        autoHeight
                        autoWidth
                    />
                    <br />
                    <br />
                </Grid>


                <Grid item xs={10}>
                    <Typography variant="h6" component="h3" gutterBottom>
                        Selecciona Skills para este onboarding:
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" color="primary" onClick={() => handleAddNewSkill()}>
                        Agregar
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <DataGrid
                        rows={Skills ?? []}
                        getRowId={(row) => row.Id}
                        columns={columnsSkills}
                        checkboxSelection
                        onSelectionModelChange={handleSelectionChangeSkill}
                        selectionModel={selectedSkills}
                        autoHeight
                        autoWidth
                    />
                    <br />
                    <br />
                </Grid>
                <Modal open={openModal} onClose={() => setOpenModal(false)} className={classes.modal}>
                    <div className={classes.modalContent}>
                        <h2>Agregar Skill</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handlePost('api/Skills', { Descripcion: e.target.Descripcion.value, IdRamaSkill: selectedRamaSkill });
                        }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControl className={classes.formControl}>
                                        <TextField label="Descripcion" type="text" id="Descripcion" name="Descripcion" InputLabelProps={{ shrink: true }} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            id="IdRamaSkill"
                                            label="Seleccionar aspecto técnico"
                                            value={selectedRamaSkill}
                                            select
                                            onChange={(e) => setSelectedRamaSkill(e.target.value)}
                                        >
                                            {RamasSkill.map((rs) => (
                                                <MenuItem key={rs.Id} value={rs.Id}>
                                                    {rs.Descripcion}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </FormControl>
                                    <br />
                                    <br />
                                </Grid>
                                <Grid item xs={12} className={classes.itemCentrado}>
                                    <Button variant="contained" color="primary" type="submit">
                                        Agregar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Modal>

                <Grid item xs={12}>
                    <Typography variant="h6" component="h3" gutterBottom>
                        Seleccionar Recursos para este onboarding:
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <DataGrid
                        rows={Recursos ?? []}
                        getRowId={(row) => row.Id}
                        columns={columnsRecursos}
                        checkboxSelection
                        onSelectionModelChange={handleSelectionChangeRecurso}
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