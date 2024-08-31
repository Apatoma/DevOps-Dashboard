import React from 'react';

function CiCdStatus({ status }) {
    return (
        <div>
            <h2>CI/CD Status</h2>
            <p>Build Status: {status.buildStatus}</p>
            <p>Last Build Time: {status.lastBuildTime}</p>
            <p>Pipeline Status: {status.pipelineStatus}</p>
        </div>
    );
}

export default CiCdStatus;
