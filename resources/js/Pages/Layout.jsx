import React from 'react';
import { Head } from '@inertiajs/react';
import ProviderComponent from '../Components/layouts/ProviderComponent'; 

export default function Layout({ children, modal, title = 'Voocan' }) {
    return (
        <>
            <Head title={title} />
            <html lang="en" style={{ fontFamily: 'Cairo, sans-serif' }}>
                <body className="min-h-screen flex flex-col">
                    <ProviderComponent>
                        {children}
                        {modal}
                    </ProviderComponent>
                </body>
            </html>
        </>
    );
}
