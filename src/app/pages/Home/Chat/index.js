import React, { useCallback, useEffect, useState } from 'react';
import { Avatar, Grid, IconButton, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import './style/scrollbar-styles.css';
import { io } from 'socket.io-client'; 

const theme = createTheme({
    typography: {
        fontFamily: "NouvelR",
    },
});

const Chat = () => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([{ from: 'AI', msg: 'Bonjour ! Je suis votre assistant intelligent Renault. Ma mission aujourd’hui est de vous assister dans la découverte de notre tout nouveau modèle électrique, la déjà célèbre R5 électrique ! Que vous soyez curieux ou déjà très convaincu, je suis vraiment très content de vous accompagner aujourd’hui.' }]);
    
    const addMessage = useCallback((from, msg) => {
        if (msg.trim() === '') return;
        const time = new Date().toLocaleTimeString().slice(0, 5);

        //socket.emit("user-message", { content: msg                               });

        setChat(prevChat => [...prevChat, { from, msg, time }]);
        setMessage('');
    }, []);

    useEffect(() => {
        const socket = io.connect('wss://hyf10szwji.execute-api.eu-west-3.amazonaws.com', {
            path: '/production',
            transport: ['websocket', 'polling']
        });
        socket.on('connect', () => {
            console.log('sokcet id ', socket.id)
        })
        const handleUserMessage = (message) => {
            setChat(prevChat => [...prevChat, message]);
        };

        socket.on('user-message', handleUserMessage);

        return () => {
            socket.off('user-message', handleUserMessage);
        };
        
    }, []);

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            addMessage('ME', message);
        }
    };


    return (
        <ThemeProvider theme={theme}>
            <div>
                <Grid container style={{ width: '100%', height: '80vh' }}>
                    <Grid item xs={12} style={{ marginRight: "30px", marginTop: "20px" }}>
                        <List style={{ width: '100%', height: '70vh', overflowY: 'auto', margin: '20px' }}>
                            {chat.map((c, i) =>
                                <ListItem key={i} sx={{ fontFamily: 'NouvelR' }}>
                                    <Grid container>
                                        {c.from === "AI" ?
                                            <Grid item xs={12}>
                                                <ListItem>
                                                    <Avatar sx={{ bgcolor: "#000" }}>
                                                        <img src="images/Logo_renault.svg" style={{ height: "60%", width: "50%" }} alt="avatar" />
                                                    </Avatar>
                                                    <Typography style={{ fontFamily: "NouvelR", fontWeight: "600", marginLeft: "10px", fontSize: "20px" }}>
                                                        Renault
                                                    </Typography>
                                                </ListItem>
                                                <ListItemText align='left' primary={c.msg} style={{ marginLeft: "10px" }}
                                                    sx={{
                                                        '& .MuiTypography-root': {
                                                            fontWeight: "600",
                                                            fontSize: '20px'
                                                        }
                                                    }} />
                                            </Grid>
                                            :
                                            <Grid item xs={12}>
                                                <ListItem>
                                                    <Grid container justifyContent="flex-end" alignItems="center">
                                                        <Grid item>
                                                            <Typography
                                                                style={{
                                                                    fontFamily: "NouvelR",
                                                                    fontWeight: "600",
                                                                    fontSize: "20px"
                                                                }}
                                                            >
                                                                Vous
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Avatar sx={{ bgcolor: "#ecb100", marginLeft: "10px" }}>
                                                                <img src="images/account.svg" style={{ height: "50%", width: "50%" }} alt="avatar" />
                                                            </Avatar>
                                                        </Grid>
                                                    </Grid>
                                                </ListItem>
                                                <ListItemText
                                                    align='right'
                                                    primary={c.msg}
                                                    sx={{
                                                        '& .MuiTypography-root': {
                                                            fontWeight: "600",
                                                            fontSize: '20px',
                                                            textAlign: "right"
                                                        }
                                                    }}
                                                />
                                            </Grid>
                                        }
                                    </Grid>
                                </ListItem>
                            )}
                        </List>
                        <div style={{ position: 'absolute', bottom: '40px', left: '0', width: '50%', display: 'flex', alignItems: 'center' }}>
                            <IconButton style={{ backgroundColor: "#fff", border: '1px solid #000', marginRight: '5px', marginLeft:"40px" }} onClick={() => addMessage('ME', message)} aria-label="add">
                                <img src="images/file.svg" alt="file" style={{ height: "18px" }} />
                            </IconButton>
                            <TextField
                                placeholder='Ecrivez votre message'
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                sx={{
                                    '& .MuiInputBase-input': {
                                        padding: '6px 6px' 
                                    }
                                }}
                                onChange={handleChange}
                                onKeyDown={handleKeyPress}
                                value={message}
                                fullWidth
                                style={{ border: '1px solid #000', borderRadius: '30px', marginRight: '5px' }}
                                variant="standard"
                            />
                            <IconButton style={{ backgroundColor: "#fff", border: '1px solid #000', marginRight: '5px' }} onClick={() => addMessage('ME', message)} aria-label="add">
                                <img src="images/arrow.svg" alt="arrow" style={{ height: "18px" }} />
                            </IconButton>
                            <IconButton style={{ backgroundColor: "#000", marginRight:"50px" }} onClick={() => addMessage('ME', message)} aria-label="add">
                                <img src="images/mic.svg" alt="mic" style={{ height: "18px" }} />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default Chat;
