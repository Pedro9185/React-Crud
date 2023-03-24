import {
    Button,
    Container,
    Divider,
    Grid,
    IconButton,
    ListItem,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Tasks: React.FC = () => {
    const navigate = useNavigate();
    const [sesStorage, setSesStorage] = useState(sessionStorage.getItem("usuarioLogado"));
    const [locStorage, setLocStorage] = useState(localStorage.getItem("usuarioLogado"));

    useEffect(() => {
        if (locStorage?.length === 0 && sesStorage?.length === 0) {
            navigate("/");
        }
    }, []);

    return (
        <Grid container>
            <Grid item xs={12}>
                <Container fixed sx={{ marginTop: "20px" }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography variant="h4">Bem vindo(a), {sesStorage}!</Typography>
                            <Divider />
                        </Grid>

                        <Grid item xs={12} sm={6} md={5}>
                            <TextField fullWidth label="Descrição" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={5}>
                            <TextField fullWidth label="Detalhamento" />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Button variant="contained">Cadastrar</Button>
                        </Grid>

                        <Grid item xs={12}>
                            {/* {list.map((item) => {
                    return (
                        <React.Fragment key={item.id}>
                            <ListItem
                                secondaryAction={
                                    <IconButton onClick={() => openCofirmModal(item)} edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar>{item.title[0].toUpperCase()}</Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item.title} secondary={`R$ ${item.price}`} />
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    );
                })} */}
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    );
};

export default Tasks;
