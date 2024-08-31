import React from 'react';

function ServerMetrics({ metrics }) {
    return (
        <div>
            <h2>Server Metrics</h2>
            <p>CPU Usage: {metrics.cpuUsage}</p>
            <p>Memory Usage: {metrics.memoryUsage}</p>
            <p>Disk Space: {metrics.diskSpace}</p>
        </div>
    );
}

export default ServerMetrics;
