import React from 'react';
import MediaCard from "../../components/MediaCard";
import { useNavigate, useLocation } from 'react-router-dom';


function Finalization() {
    const navigate = useNavigate();
    const location = useLocation();
    const formValues = location.state;
    
    const handleClick = () => {
        navigate('/');
    }
    return (
        <div>
            <MediaCard
                handleClick={handleClick}
                name={formValues.name}
                total={formValues.total}
            />
        </div >
    )
}

export default Finalization;