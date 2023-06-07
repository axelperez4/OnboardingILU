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
        //maxWidth: 800,
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
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card style={{ height: '100%' }}>
                        <CardMedia
                            component="img"
                            alt={onboarding.name}
                            image={onboarding.photo}
                            style={{ height: 200, width: '100%', objectFit: 'contain' }}
                        />
                        <CardContent style={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {onboarding.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Date: {onboarding.date}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Status: {onboarding.status}
                            </Typography>
                            <Button variant="contained" color="primary" onClick={() => handleOpen(onboarding.id)}>
                                Iniciar Proceso
                            </Button>
                        </CardContent>
                    </Card>
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
                        <EditOnboarding onboardingId={selectedOnboardingId} />
                    </div>
                </Fade>
            </Modal>
        </Grid>
    );
};

export default OnboardingList;
