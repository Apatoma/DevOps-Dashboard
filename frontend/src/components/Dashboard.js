import React, { useEffect, useState } from 'react';
import socket from '../socket';
import CiCdStatus from './CiCdStatus';
import ServerMetrics from './ServerMetrics';

function Dashboard() {
    const [ciCdStatus, setCiCdStatus] = useState({});
    const [serverMetrics, setServerMetrics] = useState({});

    useEffect(() => {
        socket.on('ciCdStatus', data => {
            setCiCdStatus(data);
        });

        socket.on('serverMetrics', data => {
            setServerMetrics(data);
        });

        return () => {
            socket.off('ciCdStatus');
            socket.off('serverMetrics');
        };
    }, []);

    return (
        <div>
            <h1>DevOps Dashboard</h1>
            <CiCdStatus status={ciCdStatus} />
            <ServerMetrics metrics={serverMetrics} />
        </div>
    );
}

export default Dashboard;
