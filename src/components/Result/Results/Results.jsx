import React from 'react';
import './results.css';
import NameCard from '../NameCard/NameCard';
const Results = ({suggetions}) => {
    const suggestedNames = suggetions.map((suggetion, index) => {
      return <NameCard key={suggetion + index} result={suggetion} />
    })
    return( 
        <div className="results"> 
            {suggestedNames}
        </div>
    )
}

export default  Results;