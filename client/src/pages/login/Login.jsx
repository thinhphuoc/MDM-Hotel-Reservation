import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';
import IconBack from '../../assets/images/back.png';
import { useStateContext } from '../../context/Context';

import { useNavigate } from "react-router-dom";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const account = {
    user: "user",
    password: "123456"
}

export default function Login() {

    const {setLogIn} = useStateContext();
    const [email, setEmail] = React.useState('');
    const [password, setPassWord] = React.useState('');

    const navigate = useNavigate();

    function handleEmailChange(event) {
        setEmail(event.target.value);
      }

    function handlePasswordChange(event) {
        setPassWord(event.target.value);
    }

    function handleSubmit () {
        if(email === account.user && password === account.password) {
            navigate("/")
        }
        else {
            alert("djt me may nhap sai roi")
        }
        setLogIn(true);
    }

    return (
        <div className="root">
            <Link href="/" variant="body2" style={{position: 'fixed', top: '0px'}}>
                <img src={IconBack} alt='' style={{width: '50px', height: '50px'}}></img>
            </Link>
            <div className="cover">
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs" className="ctn">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                {/* <LockOutlinedIcon /> */}
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Địa chỉ email"
                                            name="email"
                                            autoComplete="email"
                                            onChange={handleEmailChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Mật khẩu"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                            onChange={handlePasswordChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                                            label="Tôi đồng ý với các chính sách và điều khoản."
                                        />
                                    </Grid>
                                </Grid>
                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
                                        Đăng nhập                                  
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        Bạn chưa có tài khoản?
                                        <Link href="/signup" variant="body2">
                                            Đăng ký
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Copyright sx={{ mt: 5 }} />
                    </Container>
                </ThemeProvider>
            </div>
        </div>
    );
}