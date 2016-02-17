const loaderUtils = require('loader-utils');
const hotWrapper = require('./hot-wrapper');

module.exports = function() {};
module.exports.pitch = function(remainingRequest) {
    this.cacheable();
    const wrapperFn = hotWrapper.toString()
        .replace(/'__PATH__'/g, loaderUtils.stringifyRequest(this, '!!' + remainingRequest));
    return `module.exports = (${wrapperFn})()`;
};
