import React from 'react';
import { useLocation } from 'react-router-dom';
import MasterLayout from '../layout/MasterLayout';

function SearchPage() {
    
    const location = useLocation();
    const receivedData = location.state && location.state.searchData;

    return (
        <MasterLayout>
            {/* Render search results */}
            {receivedData ? (
                <div>
                    {/* Render search results using searchData */}
                </div>
            ) : (
                <p>No search results found</p>
            )}
        </MasterLayout>
    );
}

export default SearchPage;
