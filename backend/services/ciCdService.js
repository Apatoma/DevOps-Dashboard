const getStatus = () => {
    return {
        buildStatus: 'success',
        lastBuildTime: '2024-08-21T12:34:56',
        pipelineStatus: 'running'
    };
};

module.exports = { getStatus };
