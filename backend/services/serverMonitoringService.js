const getMetrics = () => {
    return {
        cpuUsage: Math.random().toFixed(2),
        memoryUsage: Math.random().toFixed(2),
        diskSpace: Math.random().toFixed(2)
    };
};

module.exports = { getMetrics };
