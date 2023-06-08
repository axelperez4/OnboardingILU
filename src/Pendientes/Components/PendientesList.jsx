import { Backdrop, Button, Card, CardContent, CardMedia, Fade, Grid, Icon, IconButton, Modal, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

import DataGrid, { Column, FilterRow } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import VisibilityIcon from '@material-ui/icons/Visibility';

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
        width: '50%',
        maxHeight: '80vh',
        overflow: 'auto',
        borderRadius: 8,
        'border-style': 'double',
        //maxWidth: 800,
    },
    cardPersona: {
    },
    cardFoto: {
        alignSelf: 'center',
    },
    cardLabel: {
        textAlign: 'left',
    },
}));

const PendientesList = ({ onboardingData }) => {
    const classes = useStyles();
    const [selectedRow, setSelectedRow] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = (rowData) => {
        setSelectedRow(rowData);
        console.log(rowData);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const renderButtonCell = (cellData) => {
        return (
            // <Button color="primary" onClick={() => handleModalOpen(cellData)}>
            //     View Text
            // </Button>
            <IconButton color="primary" onClick={() => handleModalOpen(cellData)}>
                <VisibilityIcon />
            </IconButton>
        );
    };

    const getCellBackgroundColor = (rowData) => {
        switch (rowData.Resultado) {
            case 'Onboarding':
                return '#31cd31';
            case 'Retroalimentación':
                return '#e9e940';
            default:
                return '#d55a5a';
        }
    };


    return (
        <>
            <DataGrid

                columnResizingMode='widget'
                allowColumnResizing={true}
                wordWrapEnabled={true}
                dataSource={onboardingData}
                //columns={columns}
                showBorders={true}
                rowAlternationEnabled={true}
                cellHintEnabled={true}
                onCellPrepared={(e) => {
                    if (e.rowType === 'data' && e.column.dataField === 'Resultado') {
                        e.cellElement.style.backgroundColor = getCellBackgroundColor(e.data);
                    }
                }}>
                <FilterRow visible={true} />
                <Column dataField="id" caption="ID" width={30} alignment='center' wordWrapEnabled={true} />
                <Column
                    allowFiltering={false}
                    dataField="photo"
                    caption="Photo"
                    alignment='center'
                    cellRender={(data) => (
                        <img src={data.value} alt={data.data.name} style={{ height: '50px', borderRadius: '50%' }} />
                    )}
                />
                <Column dataField="name" caption="Nombre" alignment='left' />
                <Column dataField="date" caption="Ingreso" alignment='center' />
                <Column dataField="status" caption="Estado" alignment='center' />
                <Column dataField="departamento" caption="Departamento" alignment='center' />
                <Column dataField="nivel" caption="Nivel" alignment='center' />
                <Column allowFiltering={false} dataField="ultimaNotaSkills" caption="Skills" alignment='center' />
                <Column allowFiltering={false} dataField="ultimaNotaWills" caption="Wills" alignment='center' />
                <Column allowFiltering={false} dataField="notaMedia" caption="Nota Media" alignment='center' />
                <Column dataField="intento" caption="Intento" width={70} alignment='center' />
                <Column
                    caption="Comentarios"
                    alignment="center"
                    cellRender={renderButtonCell}
                    width={150}
                />
                <Column dataField="Resultado" caption="Resultado" alignment='center' cellRender={(params) => {
                    return (<b>{params.value}</b>)
                }} />
            </DataGrid>


            <Modal open={modalOpen} onClose={handleModalClose} className={classes.modal}>
                <Fade in={modalOpen}>
                    <div className={classes.modalContent}>
                        <Typography variant="h6">Detalles</Typography>
                        {selectedRow && (
                            <>
                                <Typography variant="body1"><b>Puntos Fuertes:</b> {selectedRow.data.puntosFuertes}</Typography>
                                <Typography variant="body1"><b>Puntos Mejora:</b> {selectedRow.data.puntosMejora}</Typography>
                                <Typography variant="body1"><b>Comentarios Evaluador:</b> {selectedRow.data.comentariosEvaluador}</Typography>
                                <Typography variant="body1"><b>Comentarios Evaluado:</b> {selectedRow.data.comentariosEvaluado}</Typography>
                            </>
                        )}
                    </div>
                </Fade>
            </Modal>
        </>
    );
};



export default PendientesList;
