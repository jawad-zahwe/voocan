import React, { useEffect, useState } from 'react';
import { Head } from '@inertiajs/react';
import { Box, Card, Typography, Grid } from '@mui/material';
import axios from 'axios';

export default function ChooseProfile() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const urlToken = new URLSearchParams(window.location.search).get('token');
        const token = urlToken || localStorage.getItem('access_token');

        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            if (window.Inertia) {
                window.Inertia.defaults.headers = {
                    ...window.Inertia.defaults.headers,
                    'Authorization': `Bearer ${token}`
                };
            }

            if (urlToken) {
                localStorage.setItem('access_token', token);
                if (window?.history?.replaceState) {
                    window.history.replaceState(null, '', window.location.pathname);
                }
            }

            // جلب الملفات الشخصية للمستخدم
            fetchUserProfiles();
        }
    }, []);

    const fetchUserProfiles = async () => {
        try {
            // نحتاج لجلب user_id من localStorage أو من API
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.id) {
                const response = await axios.get(`/api/users/${user.id}/profiles`);
                if (response.data.success) {
                    setProfiles(response.data.data);
                }
            }
        } catch (error) {
            console.error('Error fetching profiles:', error);
        } finally {
            setLoading(false);
        }
    };

    const createProfile = async () => {
        try {
            // جلب معرف المستخدم من localStorage
            const user = JSON.parse(localStorage.getItem('user'));
            
            if (!user || !user.id) {
                alert('Please login first');
                return;
            }

            console.log('Creating profile for user:', user.id);
            
            // استدعاء الـ store method في الـ controller
            const response = await axios.post(`/api/users/${user.id}/profiles`);
            
            console.log('Response:', response.data);
            
            if (response.data.success) {
                // إضافة البروفايل الجديد للقائمة
                setProfiles(prevProfiles => [...prevProfiles, response.data.data]);
            } else {
                alert('Failed to create profile: ' + response.data.message);
            }
            
        } catch (error) {
            console.error('Error creating profile:', error);
            if (error.response && error.response.data) {
                alert('Error: ' + error.response.data.message);
            } else {
                alert('Error creating profile. Please try again.');
            }
        }
    };

    const navigateToPinCode = (profile) => {
        // حفظ معلومات البروفايل في localStorage
        localStorage.setItem('selectedProfile', JSON.stringify(profile));
        
        // الانتقال إلى صفحة PinCode
        window.location.href = '/pin';
    };

    return (
        <>
            <Head title="Choose Profile" />

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
                <Box
                    sx={{
                        p: 4,
                        width: {
                            xs: '250px',
                            sm: '478px',
                            lg: '800px'
                        },
                        height: "500px",
                        alignContent: "center",
                        textAlign: "center",
                        borderRadius: '1.5rem',
                        background: 'hsla(0, 0%, 5%, 0.6)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 0 20px rgba(0,0,0,0.6)',
                        gap: "32",
                        backgroundClip: 'padding-box',
                        position: 'relative',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            padding: '1px',
                            borderRadius: "48px",
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
                    <Typography variant="h5" sx={{
                        color: 'hsla(0, 0%, 100%, 1)',
                        mb: 4,
                        fontStyle: "Bold",
                        fontFamily: 'Cairo, sans-serif',
                        fontSize: { xs: 16, sm: 24, lg: 32 },
                        fontWeight: 700
                    }}>
                        Select a profile
                    </Typography>

                    <Grid container spacing={3} justifyContent="center" component="div">
                        {loading ? (
                            // عرض loading placeholder
                            [1, 2, 3].map((profile, index) => (
                                <Grid
                                    key={index}
                                    component="div"
                                    sx={{
                                        width: { xs: '40%', sm: '30%', md: '18%' },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Card
                                        sx={{
                                            width: 70,
                                            height: 70,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '12px',
                                            backgroundColor: 'hsla(0, 0%, 30%, 0.6)',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s',
                                            border: '1px solid transparent',
                                            '& svg path': {
                                                transition: 'fill 0.3s',
                                            },
                                            '&:hover': {
                                                background: 'linear-gradient(128.93deg, #2A313C 5.32%, rgba(66, 73, 82, 0) 94.68%)',
                                                borderColor: 'hsla(0, 0%, 100%, 1)',
                                                '& svg path': {
                                                    fill: 'hsla(0, 0%, 100%, 0.5)',
                                                },
                                            },
                                        }}
                                    >
                                        <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M39.737 35.5678C37.1979 31.064 33.2331 27.5546 28.4809 25.6048C30.8442 23.8135 32.5898 21.316 33.4706 18.4663C34.3514 15.6165 34.3227 12.5589 33.3885 9.72658C32.4544 6.89423 30.6622 4.43074 28.2657 2.68506C25.8693 0.939374 22.9901 0 20.0361 0C17.0821 0 14.2029 0.939374 11.8065 2.68506C9.41002 4.43074 7.61778 6.89423 6.68364 9.72658C5.74949 12.5589 5.72078 15.6165 6.60158 18.4663C7.48238 21.316 9.22803 23.8135 11.5913 25.6048C6.83904 27.5546 2.87427 31.064 0.335181 35.5678C0.17785 35.8235 0.0729899 36.1085 0.026834 36.406C-0.0193219 36.7034 -0.00583119 37.0072 0.0665044 37.2993C0.13884 37.5914 0.268544 37.8658 0.447905 38.1062C0.627265 38.3466 0.852622 38.5481 1.11058 38.6987C1.36853 38.8494 1.65382 38.946 1.94948 38.983C2.24514 39.02 2.54513 38.9965 2.83163 38.9139C3.11812 38.8314 3.38527 38.6915 3.6172 38.5025C3.84912 38.3135 4.04107 38.0793 4.18166 37.8138C7.53737 31.9517 13.4636 28.4554 20.0361 28.4554C26.6086 28.4554 32.5348 31.9536 35.8905 37.8138C36.1952 38.309 36.6784 38.6649 37.2381 38.8065C37.7977 38.9481 38.3899 38.8642 38.8894 38.5725C39.3889 38.2808 39.7567 37.8042 39.9148 37.2435C40.073 36.6828 40.0092 36.0819 39.737 35.5678ZM10.406 14.2305C10.406 12.3055 10.9708 10.4238 12.029 8.82323C13.0871 7.22268 14.5912 5.9752 16.3508 5.23855C18.1105 4.50189 20.0468 4.30915 21.9148 4.6847C23.7829 5.06024 25.4988 5.9872 26.8456 7.34836C28.1924 8.70951 29.1096 10.4437 29.4811 12.3317C29.8527 14.2197 29.662 16.1766 28.9331 17.9551C28.2042 19.7335 26.9699 21.2536 25.3863 22.323C23.8026 23.3925 21.9407 23.9633 20.0361 23.9633C17.4829 23.9603 15.0352 22.934 13.2298 21.1093C11.4245 19.2847 10.409 16.8109 10.406 14.2305Z" fill="white" />
                                        </svg>
                                    </Card>
                                    <Typography variant="body2" sx={{ color: 'hsla(0, 0%, 100%, 1)', mt: 1, fontFamily: 'Cairo, sans-serif', fontSize: 16, fontWeight: 700, fontStyle: "bold" }}>
                                        Profile {profile}
                                    </Typography>
                                </Grid>
                            ))
                        ) : (
                            // عرض الملفات الشخصية الحقيقية
                            profiles.map((profile, index) => (
                                <Grid
                                    key={profile.id}
                                    component="div"
                                    sx={{
                                        width: { xs: '40%', sm: '30%', md: '18%' },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Card
                                        onClick={() => navigateToPinCode(profile)}
                                        sx={{
                                            width: 70,
                                            height: 70,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '12px',
                                            backgroundColor: 'hsla(0, 0%, 30%, 0.6)',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s',
                                            border: '1px solid transparent',
                                            '& svg path': {
                                                transition: 'fill 0.3s',
                                            },
                                            '&:hover': {
                                                background: 'linear-gradient(128.93deg, #2A313C 5.32%, rgba(66, 73, 82, 0) 94.68%)',
                                                borderColor: 'hsla(0, 0%, 100%, 1)',
                                                '& svg path': {
                                                    fill: 'hsla(0, 0%, 100%, 0.5)',
                                                },
                                            },
                                        }}
                                    >
                                        <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M39.737 35.5678C37.1979 31.064 33.2331 27.5546 28.4809 25.6048C30.8442 23.8135 32.5898 21.316 33.4706 18.4663C34.3514 15.6165 34.3227 12.5589 33.3885 9.72658C32.4544 6.89423 30.6622 4.43074 28.2657 2.68506C25.8693 0.939374 22.9901 0 20.0361 0C17.0821 0 14.2029 0.939374 11.8065 2.68506C9.41002 4.43074 7.61778 6.89423 6.68364 9.72658C5.74949 12.5589 5.72078 15.6165 6.60158 18.4663C7.48238 21.316 9.22803 23.8135 11.5913 25.6048C6.83904 27.5546 2.87427 31.064 0.335181 35.5678C0.17785 35.8235 0.0729899 36.1085 0.026834 36.406C-0.0193219 36.7034 -0.00583119 37.0072 0.0665044 37.2993C0.13884 37.5914 0.268544 37.8658 0.447905 38.1062C0.627265 38.3466 0.852622 38.5481 1.11058 38.6987C1.36853 38.8494 1.65382 38.946 1.94948 38.983C2.24514 39.02 2.54513 38.9965 2.83163 38.9139C3.11812 38.8314 3.38527 38.6915 3.6172 38.5025C3.84912 38.3135 4.04107 38.0793 4.18166 37.8138C7.53737 31.9517 13.4636 28.4554 20.0361 28.4554C26.6086 28.4554 32.5348 31.9536 35.8905 37.8138C36.1952 38.309 36.6784 38.6649 37.2381 38.8065C37.7977 38.9481 38.3899 38.8642 38.8894 38.5725C39.3889 38.2808 39.7567 37.8042 39.9148 37.2435C40.073 36.6828 40.0092 36.0819 39.737 35.5678ZM10.406 14.2305C10.406 12.3055 10.9708 10.4238 12.029 8.82323C13.0871 7.22268 14.5912 5.9752 16.3508 5.23855C18.1105 4.50189 20.0468 4.30915 21.9148 4.6847C23.7829 5.06024 25.4988 5.9872 26.8456 7.34836C28.1924 8.70951 29.1096 10.4437 29.4811 12.3317C29.8527 14.2197 29.662 16.1766 28.9331 17.9551C28.2042 19.7335 26.9699 21.2536 25.3863 22.323C23.8026 23.3925 21.9407 23.9633 20.0361 23.9633C17.4829 23.9603 15.0352 22.934 13.2298 21.1093C11.4245 19.2847 10.409 16.8109 10.406 14.2305Z" fill="white" />
                                        </svg>
                                    </Card>
                                    <Typography variant="body2" sx={{ color: 'hsla(0, 0%, 100%, 1)', mt: 1, fontFamily: 'Cairo, sans-serif', fontSize: 16, fontWeight: 700, fontStyle: "bold" }}>
                                        {profile.name}
                                    </Typography>
                                </Grid>
                            ))
                        )}

                        {/* Add Profile Card */}
                        <Grid
                            component="div"
                            sx={{
                                width: { xs: '40%', sm: '30%', md: '18%' },
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Card
                                onClick={createProfile}
                                sx={{
                                    width: 70,
                                    height: 70,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '12px',
                                    backgroundColor: 'hsla(0, 0%, 30%, 0.6)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    border: '1px solid transparent',
                                    '& svg path': {
                                        transition: 'fill 0.3s',
                                    },
                                    '&:hover': {
                                        background: 'linear-gradient(128.93deg, #2A313C 5.32%, rgba(66, 73, 82, 0) 94.68%)',
                                        borderColor: 'hsla(0, 0%, 100%, 1)',
                                        '& svg path': {
                                            fill: 'hsla(0, 0%, 100%, 0.5)',
                                        },
                                    },
                                }}
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38 19.5C38 20.1047 37.7598 20.6846 37.3322 21.1122C36.9046 21.5398 36.3247 21.78 35.72 21.78H21.28V36.22C21.28 36.8247 21.0398 37.4046 20.6122 37.8322C20.1846 38.2598 19.6047 38.5 19 38.5C18.3953 38.5 17.8154 38.2598 17.3878 37.8322C16.9602 37.4046 16.72 36.8247 16.72 36.22V21.78H2.28C1.67531 21.78 1.09538 21.5398 0.667797 21.1122C0.240214 20.6846 0 20.1047 0 19.5C0 18.8953 0.240214 18.3154 0.667797 17.8878C1.09538 17.4602 1.67531 17.22 2.28 17.22H16.72V2.78C16.72 2.17531 16.9602 1.59538 17.3878 1.1678C17.8154 0.740214 18.3953 0.5 19 0.5C19.6047 0.5 20.1846 0.740214 20.6122 1.1678C21.0398 1.59538 21.28 2.17531 21.28 2.78V17.22H35.72C36.3247 17.22 36.9046 17.4602 37.3322 17.8878C37.7598 18.3154 38 18.8953 38 19.5Z" fill="white" />
                                </svg>
                            </Card>
                            <Typography variant="body2" sx={{ color: 'hsla(0, 0%, 100%, 1)', mt: 1, fontFamily: 'Cairo, sans-serif', fontSize: 16, fontWeight: 700, fontStyle: "bold" }}>
                                Add
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* Back to Login (Logout then redirect) */}
                    <Typography
                        onClick={async () => {
                            try { await axios.post('/api/logout'); } catch (e) {}
                            // تنظيف العميل
                            delete axios.defaults.headers.common['Authorization'];
                            if (window.Inertia) {
                                window.Inertia.defaults.headers = {
                                    ...window.Inertia.defaults.headers,
                                    Authorization: undefined,
                                };
                            }
                            localStorage.removeItem('access_token');
                            localStorage.removeItem('user');

                            window.location.href = '/logout';
                        }}
                        variant="body2"
                        sx={{
                            color: 'rgba(255,255,255,0.6)',
                            mt: 6,
                            cursor: 'pointer',
                            fontFamily: 'Cairo, sans-serif',
                            fontSize: { xs: 12, md: 16, lg: 20 },
                            fontWeight: 500,
                            fontStyle: "SemiBold",
                            '&:hover': {
                                color: 'rgba(255,255,255,0.8)',
                            }
                        }}
                    >
                        Back to login?
                    </Typography>
                </Box>
            </Box>
        </>
    );
} 