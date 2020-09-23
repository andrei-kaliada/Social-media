import React from 'react';

export default function LazyLoad(Component) {
    return (props) => {
        return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Component {...props}/>
            </React.Suspense>
        </div>
     )
    }
    
}
