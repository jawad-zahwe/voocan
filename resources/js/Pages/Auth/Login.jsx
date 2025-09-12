import React, { useState, useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Box, TextField, Button, Typography, Paper, Checkbox, FormControlLabel, InputAdornment, IconButton } from '@mui/material';
import { TbLogin2 } from "react-icons/tb";
import CheckIcon from '@mui/icons-material/Check';
import ReportGmailerrorredTwoToneIcon from '@mui/icons-material/ReportGmailerrorredTwoTone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

export default function Login({ status, canResetPassword }) {
    const { data, setData, processing, errors, reset } = useForm({
        username: '',
        password: '',
        remember: false,
    });

    const [apiErrors, setApiErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (!token) return;

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        axios
            .get('/api/test-token')
            .then((response) => {
                if (response?.data?.success) {
                    window.location.href = `/choose-profile?token=${token}`;
                }
            })
            .catch(() => {
                localStorage.removeItem('access_token');
                localStorage.removeItem('user');
            });
    }, []);

    const submit = async (e) => {
        e.preventDefault();
        setApiErrors({});
        
        try {
            const response = await axios.post('/api/login', {
                username: data.username,
                password: data.password,
                remember_me: data.remember
            });
            
            if (response.data.success) {
                localStorage.setItem('access_token', response.data.data.access_token);
                localStorage.setItem('user', JSON.stringify(response.data.data));
                
                window.location.href = `/choose-profile?token=${response.data.data.access_token}`;
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setApiErrors(error.response.data);
            } else {
                setApiErrors({ message: 'An error occurred in the connection' });
            }
        }
    };

    const CustomCheckbox = () => (
        <Box
            sx={{
                width: 20,
                height: 20,
                borderRadius: '8px',
                border: '2px solid white',
                backgroundColor: 'transparent',
            }}
        />
    );

    const CustomCheckedCheckbox = () => (
        <Box
            sx={{
                width: 20,
                height: 20,
                borderRadius: '8px',
                border: '2px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <CheckIcon sx={{ fontSize: 16, color: 'white' }} />
        </Box>
    );

    return (
        <>
            <Head title="Log in" />

            <Box
                sx={{
                    minHeight: '100vh',
                    position: 'relative',
                    backgroundColor: 'hsla(216, 19%, 5%, 1)',
                    backgroundImage: `
                        url('/assets/images/Lines.svg'),
                        url('/assets/images/Ellipses.svg'),
                        url('/assets/images/PlanetArt.svg')
                    `,
                    backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
                    backgroundSize: `
                        cover,
                        900px auto,
                        60% auto
                    `,
                    backgroundPosition: `
                        center,
                        center center,
                        bottom
                    `,
                    justifyItems: "center",
                    alignContent: "center",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 2,
                }}
            >
                <Paper
                    elevation={10}
                    sx={{
                        p: 4,
                        width: {
                            xs: '100%',
                            sm: '400px',
                            md: '446px'
                        },
                        minHeight: 494,
                        backgroundColor: 'hsla(0, 0%, 5%, 0.6)',
                        borderRadius: '1.5rem',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 0 20px rgba(0,0,0,0.6)',
                        position: 'relative',
                        overflow: 'visible',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            padding: '1px',
                            borderRadius: '48px',
                            background: 'linear-gradient(to bottom, hsla(0, 0%, 40%, 1), hsla(0, 0%, 0%, 0.2))',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            pointerEvents: 'none',
                            zIndex: 1,
                        },
                        '& > *': {
                            position: 'relative',
                            zIndex: 2,
                        },
                    }}
                >
                    <Typography
                        align="center"
                        gutterBottom
                        sx={{
                            paddingTop: '2rem',
                            fontStyle: 'bold',
                            color: 'hsla(0, 0%, 100%, 1)',
                            fontFamily: 'Cairo, sans-serif',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            '& svg': {
                                width: {
                                    xs: '140px',
                                    sm: '160px',
                                    md: '230px'
                                },
                                height: {
                                    xs: '24px',
                                    sm: '36px',
                                    md: '47px'
                                },
                            }
                        }}
                    >
                        <svg width="230" height="47" viewBox="0 0 230 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_720_315)">
                                <path d="M14.4694 0.75959C15.1925 0.75959 15.8215 1.24877 16.0007 1.94759L19.9901 17.6073C20.771 20.7459 21.3635 23.7509 21.9164 26.9199H22.1352C22.6608 23.684 23.2472 20.8462 23.9916 17.6073L27.8321 1.95974C28.0053 1.25484 28.6373 0.756552 29.3665 0.756552H37.2115C38.2932 0.756552 39.0558 1.81998 38.7064 2.84694L27.2852 36.3449C27.0665 36.986 26.4649 37.4144 25.7903 37.4144H17.3923C16.7148 37.4144 16.1132 36.9829 15.8944 36.3388L4.61905 2.84087C4.27268 1.81694 5.0353 0.75959 6.11392 0.75959H14.4694Z" fill="white"/>
                                <path d="M150.138 34.7649C150.248 35.5063 149.792 36.2142 149.051 36.4391C147.164 37.0103 144.381 37.4417 141.297 37.4417C130.219 37.4417 123.121 30.6874 123.121 19.4455C123.121 8.92367 130.252 0.74136 142.837 0.74136C145.049 0.74136 147.346 1.06343 149.175 1.56476C149.956 1.77744 150.421 2.55222 150.263 3.31789L149.248 8.27042C149.072 9.13027 148.179 9.63768 147.3 9.41588C146.261 9.15154 144.964 8.96012 143.348 8.96012C137.711 8.96012 134.175 13.147 134.208 19.0444C134.208 25.5101 138.213 29.1075 143.445 29.1075C144.982 29.1075 146.298 28.9343 147.458 28.6365C148.367 28.4026 149.278 28.992 149.412 29.8884L150.141 34.7649H150.138Z" fill="white"/>
                                <path d="M178.981 37.4417C178.228 37.4417 177.584 36.9009 177.456 36.1565L177.061 33.8747H176.845C174.615 36.7125 171.209 38.1831 167.275 38.1831C160.52 38.1831 156.297 33.1394 156.297 27.2085C156.297 17.8169 164.653 13.5541 175.998 13.542V12.9799C175.998 10.7923 174.782 8.25826 169.872 8.26434C167.165 8.26434 164.479 8.95709 162.325 9.93848C161.474 10.3274 160.478 9.83821 160.223 8.93886L159.12 5.03456C158.91 4.29624 159.278 3.5245 159.973 3.19939C162.547 1.9962 166.713 0.735283 171.911 0.735283C183.566 0.735283 186.754 7.98481 186.754 16.082V28.8735C186.754 31.3498 186.848 33.7714 187.067 35.7311C187.17 36.6426 186.444 37.4356 185.526 37.4356H178.984L178.981 37.4417ZM176.314 21.8853C176.314 20.9981 175.566 20.2811 174.682 20.3357C170.313 20.6092 166.731 22.0919 166.731 26.0995C166.731 29.1926 168.654 30.572 170.878 30.572C173.26 30.572 175.396 29.0194 176.107 26.7528C176.271 26.2089 176.314 25.5496 176.314 24.9237V21.8853Z" fill="white"/>
                                <path d="M192.867 12.3935C192.867 8.65933 192.76 5.38094 192.639 2.42157C192.602 1.51614 193.319 0.765667 194.216 0.765667H200.609C201.417 0.765667 202.091 1.37942 202.179 2.19066L202.547 5.64527H202.76C204.358 3.09001 207.925 0 213.354 0C220.68 0 225.465 5.21687 225.465 15.3346V36.2173C225.465 37.0984 224.757 37.8124 223.885 37.8124H216.104C215.232 37.8124 214.524 37.0984 214.524 36.2173V16.4831C214.524 12.2081 213.127 9.02089 209.383 9.02089C206.703 9.02089 204.993 10.9168 204.233 13.0649C203.948 13.7942 203.802 14.9305 203.802 16.082V36.2142C203.802 37.0953 203.094 37.8094 202.222 37.8094H194.441C193.569 37.8094 192.861 37.0953 192.861 36.2142V12.3935H192.867Z" fill="white"/>
                                <path d="M98.8963 37.4417C92.9503 37.4417 87.4843 34.6677 83.899 29.8337C82.714 28.2355 83.0634 25.981 84.6768 24.8082C85.3058 24.3525 86.0471 24.1094 86.8249 24.1094C87.9765 24.1094 89.0703 24.6563 89.7539 25.5769C91.9567 28.5484 95.2928 30.2499 98.8994 30.2499C105.219 30.2499 110.36 25.1607 110.36 18.9016C110.36 12.6426 105.219 7.55336 98.8994 7.55336C94.591 7.55336 90.5348 9.8291 88.3137 13.4934L79.5238 28.0106C75.9993 33.8261 69.561 37.4356 62.7155 37.4356C52.3912 37.4356 43.9932 29.1196 43.9932 18.8986C43.9932 8.67756 52.3882 0.37068 62.7125 0.37068C68.7011 0.37068 74.1702 3.15078 77.722 7.99393C78.8979 9.59818 78.5363 11.8496 76.9168 13.0133C76.2909 13.463 75.5557 13.7 74.787 13.7C73.6263 13.7 72.5264 13.1439 71.8458 12.2172C69.6764 9.25788 66.3464 7.55944 62.7125 7.55944C56.3927 7.55944 51.2518 12.6487 51.2518 18.9077C51.2518 25.1667 56.3927 30.256 62.7125 30.256C67.0209 30.256 71.0771 27.9803 73.2982 24.316L82.0821 9.80783C85.6096 3.98633 92.0509 0.373718 98.8963 0.373718C109.221 0.373718 117.619 8.68971 117.619 18.9108C117.619 29.1318 109.221 37.4478 98.8963 37.4478V37.4417Z" fill="white"/>
                            </g>
                            <defs>
                                <filter id="filter0_d_720_315" x="0.534607" y="0" width="228.931" height="46.1831" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_720_315"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_720_315" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </Typography>

                    <form className="flex flex-col gap-9 pt-4" onSubmit={submit}>
                        {status && (
                            <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
                                <Typography color="hsla(0, 84%, 60%, 1)" fontWeight="cairo" sx={{ fontFamily: 'Cairo, sans-serif', fontWeight: 500, fontSize: 16, fontStyle: "Medium" }}>
                                    {status}
                                </Typography>
                            </Box>
                        )}

                        {apiErrors.message && (
                            <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
                                <ReportGmailerrorredTwoToneIcon sx={{ width: 44, height: 45, color: 'hsla(0, 84%, 60%, 1)' }} />
                                <Typography color="hsla(0, 84%, 60%, 1)" fontWeight="cairo" sx={{ fontFamily: 'Cairo, sans-serif', fontWeight: 500, fontSize: 16, fontStyle: "Medium" }}>
                                    {apiErrors.message}
                                </Typography>
                            </Box>
                        )}

                        {errors.username && (
                            <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
                                <ReportGmailerrorredTwoToneIcon sx={{ width: 44, height: 45, color: 'hsla(0, 84%, 60%, 1)' }} />
                                <Typography color="hsla(0, 84%, 60%, 1)" fontWeight="cairo" sx={{ fontFamily: 'Cairo, sans-serif', fontWeight: 500, fontSize: 16, fontStyle: "Medium" }}>
                                    {errors.username}
                                </Typography>
                            </Box>
                        )}

                        {errors.password && (
                            <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
                                <ReportGmailerrorredTwoToneIcon sx={{ width: 44, height: 45, color: 'hsla(0, 84%, 60%, 1)' }} />
                                <Typography color="hsla(0, 84%, 60%, 1)" fontWeight="cairo" sx={{ fontFamily: 'Cairo, sans-serif', fontWeight: 500, fontSize: 16, fontStyle: "Medium" }}>
                                    {errors.password}
                                </Typography>
                            </Box>
                        )}

                        <TextField
                            placeholder="Username"
                            error={!!errors.username}
                            variant="outlined"
                            value={data.username}
                            onChange={(e) => setData('username', e.target.value)}
                            autoComplete="username"
                            InputProps={{
                                sx: {
                                    alignSelf: 'center',
                                    width: {
                                        xs: '100%',
                                        sm: '300px',
                                        md: '350px'
                                    },
                                    height: 50,
                                    fontFamily: 'Cairo, sans-serif',
                                    fontStyle: "Medium",
                                    fontWeight: 500,
                                    fontSize: 12,
                                    borderRadius: '16px',
                                    padding: '17 : 24 :17 :24',
                                    border: '1px solid transparent',
                                    color: "hsla(0, 0%, 20%, 0.6)",
                                    background: `hsla(0, 0%, 20%, 0.6)`,
                                    backgroundClip: 'padding-box, border-box',
                                    backgroundOrigin: 'border-box',
                                    backdropFilter: 'blur(15px)',
                                    boxShadow: '0px 4px 4px hsla(0, 0%, 0%, 0.25)',
                                    '& input': {
                                        color: 'white',
                                        padding: '12px',
                                        '::placeholder': {
                                            color: 'white',
                                            opacity: 0.7,
                                        },
                                    },
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '16px',
                                    borderColor: errors.username ? 'red' : '#666666',
                                    borderWidth: '1px',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#666666',
                                },
                                '&.Mui-focused': {
                                    outline: 'none !important',
                                    boxShadow: 'none !important',
                                },
                                '& input:focus': {
                                    outline: 'none !important',
                                    boxShadow: 'none !important',
                                },
                            }}
                        />

                        <TextField
                            placeholder="Password"
                            error={!!errors.password}
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            autoComplete="current-password"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                            sx={{ 
                                                color: 'white',
                                                padding: '4px',
                                                marginRight: '0px',
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: '18px'
                                                }
                                            }}
                                        >
                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                sx: {
                                    alignSelf: 'center',
                                    width: {
                                        xs: '100%',
                                        sm: '300px',
                                        md: '350px'
                                    },
                                    height: 50,
                                    fontFamily: 'Cairo, sans-serif',
                                    fontStyle: "Medium",
                                    fontWeight: 500,
                                    fontSize: 12,
                                    borderRadius: '16px',
                                    padding: 0,
                                    border: '1px solid transparent',
                                    background: `hsla(0, 0%, 20%, 0.6)`,
                                    color: "hsla(0, 0%, 20%, 0.6)",
                                    backgroundClip: 'padding-box, border-box',
                                    backgroundOrigin: 'border-box',
                                    backdropFilter: 'blur(15px)',
                                    boxShadow: '0px 4px 4px hsla(0, 0%, 0%, 0.25)',
                                    '& input': {
                                        color: 'white',
                                        padding: '12px',
                                        '::placeholder': {
                                            color: 'white',
                                            opacity: 0.7,
                                        },
                                    },
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '16px',
                                    borderColor: errors.password ? 'red' : '#666666',
                                    borderWidth: '1px',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#666666',
                                },
                                '&.Mui-focused': {
                                    outline: 'none !important',
                                    boxShadow: 'none !important',
                                },
                                '& input:focus': {
                                    outline: 'none !important',
                                    boxShadow: 'none !important',
                                },
                                '& input[type="password"]::-webkit-textfield-decoration-container': {
                                    display: 'none !important',
                                },
                                '& input[type="password"]::-webkit-credentials-auto-fill-button': {
                                    display: 'none !important',
                                },
                                '& input[type="password"]::-webkit-credentials-auto-fill-button:hover': {
                                    display: 'none !important',
                                },
                                '& input[type="password"]::-ms-reveal': {
                                    display: 'none !important',
                                },
                                '& input[type="password"]::-ms-clear': {
                                    display: 'none !important',
                                },
                            }}
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<CustomCheckbox />}
                                    checkedIcon={<CustomCheckedCheckbox />}
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    sx={{ padding: 1, marginLeft: 2.5, boxShadow: "hsla(0, 0%, 0%, 0.25)" }}
                                />
                            }
                            label="Remember me"
                            sx={{ color: 'hsla(0, 0%, 100%, 1)', fontFamily: 'Cairo, sans-serif', fontWeight: 500, fontStyle: "Medium", fontSize: 12, boxShadow: "hsla(0, 0%, 0%, 0.25)" }}
                        />

                        {canResetPassword && (
                            <Box sx={{ textAlign: 'center' }}>
                                <Link
                                    href={route('password.request')}
                                    style={{
                                        color: 'hsla(0, 0%, 100%, 1)',
                                        textDecoration: 'none',
                                        fontFamily: 'Cairo, sans-serif',
                                        fontSize: 12,
                                        opacity: 0.8
                                    }}
                                >
                                    Forgot your password?
                                </Link>
                            </Box>
                        )}

                        <Button
                            type="submit"
                            variant="outlined"
                            disabled={processing}
                            sx={{
                                animation: "inherit",
                                width: 145,
                                height: 49,
                                alignSelf: 'center',
                                paddingRight: '24px',
                                paddingLeft: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                borderRadius: '14px',
                                position: 'relative',
                                zIndex: 1,
                                background: `linear-gradient( to left, hsla(215, 11%, 29%, 0) ,hsla(217, 18%, 20%, 1))`,
                                border: ' solid transparent',
                                backgroundOrigin: 'border-box',
                                backgroundClip: ' border-box',
                                opacity: 1,
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    padding: '1px',
                                    borderRadius: "12px",
                                    background: 'linear-gradient(to bottom, hsla(0, 0%, 40%, 1),hsla(0, 0%, 0%, 0.2))',
                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'xor',
                                    maskComposite: 'exclude',
                                    pointerEvents: 'none',
                                    zIndex: 1,
                                },
                                '& > *': {
                                    position: 'relative',
                                    zIndex: 2,
                                },
                                '&:hover': {
                                    background: 'linear-gradient(128deg, #4A047B 5.79%, rgba(9, 64, 200, 0.00) 94.21%)',
                                },
                                '&:active': {
                                    background: 'linear-gradient(128deg, #4A047B 5.79%, rgba(9, 64, 200, 0.00) 94.21%)',
                                },
                            }}
                        >
                            <Typography sx={{ fontFamily: 'Cairo, sans-serif', color: "hsla(0, 0%, 100%, 1)" }}>LOGIN</Typography>
                            <TbLogin2 size={20} color="hsla(0, 0%, 100%, 1)" />
                        </Button>
                    </form>
                </Paper>
            </Box>
        </>
    );
}
