const path = require('path');

module.exports = {
    paths: function (paths, env) {
        const appBuild = path.join(__dirname, '../resources/static');
        return { ...paths, appBuild };
    },
};
