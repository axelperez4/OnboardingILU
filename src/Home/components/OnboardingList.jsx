import { Backdrop, Button, Card, CardContent, CardMedia, Fade, Grid, Modal, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import EditOnboarding from './EditOnboarding';

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
        width: '80%',
        maxHeight: '80vh',
        overflow: 'auto',
        borderRadius: 8,
        'border-style': 'double',
        //maxWidth: 800,
    },
    modalInnerContent: {
        'overflow': 'auto',
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

const OnboardingList = ({ onboardingData }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [selectedOnboardingId, setSelectedOnboardingId] = useState(null);

    const handleOpen = (onboardingId) => {
        setSelectedOnboardingId(onboardingId);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Grid container spacing={3} justify="center" alignItems="center">
            {onboardingData.map((onboarding, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                    <div className={classes.cardPersona}>
                        <Card style={{ height: '100%' }}>
                            <Grid container>
                                <Grid item xs={4} className={classes.cardFoto}>
                                    <CardMedia
                                        component="img"
                                        alt={onboarding.name}
                                        image={onboarding.photo}
                                        style={{ height: 200, width: '100%', objectFit: 'contain', borderRadius: 12 }}
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <CardContent style={{ textAlign: 'center' }}>
                                        <Grid container justify="flex-end">
                                            <Grid item xs={12}>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {onboarding.name}
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={6} className={classes.cardLabel}>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Ingreso:
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} className={classes.cardLabel}>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {onboarding.date}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={6} className={classes.cardLabel}>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Departamento:
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} className={classes.cardLabel}>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {onboarding.departamento}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={6} className={classes.cardLabel}>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Nivel:
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} className={classes.cardLabel}>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {onboarding.nivel}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={6} className={classes.cardLabel}>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Estado:
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} className={classes.cardLabel}>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {onboarding.status}
                                                </Typography>
                                            </Grid>
                                        </Grid>




                                        <br></br>
                                        <Button variant="contained" color="primary" onClick={() => handleOpen(onboarding.id)}>
                                            Iniciar Proceso
                                        </Button>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>
                    </div>
                </Grid>
            ))}

            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.modalContent}>
                        {/* <div className={classes.modalInnerContent}> */}
                        <EditOnboarding onboardingId={selectedOnboardingId} />

                    </div>
                </Fade>
            </Modal>
        </Grid>
    );
};

export default OnboardingList;
