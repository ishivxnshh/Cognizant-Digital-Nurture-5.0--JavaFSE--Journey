import React from 'react';
import styles from './CohortDetails.module.css'; // Import the CSS Module

const CohortDetails = ({ cohort }) => {
    // Set text to green if status is "Ongoing", otherwise blue[cite: 3]
    const headingStyle = {
        color: cohort.status === 'Ongoing' ? 'green' : 'blue'
    };

    return (
        // Apply the box class to the container div[cite: 3]
        <div className={styles.box}>
            <h3 style={headingStyle}>{cohort.id} - {cohort.name}</h3>
            
            <dl style={{ textAlign: 'left' }}>
                <dt>Started On</dt>
                <dd>{cohort.startDate}</dd>
                
                <dt>Current Status</dt>
                <dd>{cohort.status}</dd>
                
                <dt>Coach</dt>
                <dd>{cohort.coach}</dd>
                
                <dt>Trainer</dt>
                <dd>{cohort.trainer}</dd>
            </dl>
        </div>
    );
};

export default CohortDetails;
