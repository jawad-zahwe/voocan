import React, { Suspense } from 'react';

const ProviderComponent = ({ children }) => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                {children}
            </Suspense>
        </div>
    );
};

export default ProviderComponent;
// todo
// export default appWithI18Next(ProviderComponent, ni18nConfig);
