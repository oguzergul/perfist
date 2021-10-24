const {performance} = window
const {timing} = performance;

const detectTTFB = () => {
    return Math.round(timing.responseEnd - timing.responseStart)
}

const detectFCP = () => {
    const FCPPerformance = performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint');
    if (FCPPerformance) {
        return Math.round(FCPPerformance.startTime)
    }
    return 0
};

const detectDOMLoad = () => {
    return Math.round(timing.domContentLoadedEventEnd - timing.navigationStart);
}

const detectWindowLoad = () => {
    return Math.round(timing.loadEventStart - timing.navigationStart)
}

const collectFolders = () => {
    let library = [];
    performance.getEntriesByType('resource').forEach((e) => {
        library.push(e);
    });
    return library;
}

const detectResourcesLoad = () => {
    const resourceLoad = performance.getEntriesByType('resource').reduce(
        (acc, resource) => acc + (resource.responseEnd - resource.startTime), 0
    );
    return Math.round(resourceLoad);
};

const sendAnalyticsData = (url, body) => {
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
        keepalive: true
    }).then(response => response).catch(e => console.log(e));
}


const performanceAnalyticReporter = ({
    analysePerformance(url) {
        window.onload = () => {
            const perfAnalytics = {
                files: collectFolders(),
                measurement_date: Date.now(),
                url: window.location.href,
                user_agent: navigator.userAgent,
                ttfbTime: detectTTFB(),
                fcpTime: detectFCP(),
                domLoadTime: detectDOMLoad(),
                windowLoadTime: detectWindowLoad(),
                resourcesLoadTime: detectResourcesLoad(),
            };
            sendAnalyticsData(url, perfAnalytics);
        }
    }
});

module.exports = performanceAnalyticReporter;