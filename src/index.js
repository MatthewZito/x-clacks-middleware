/**
 * 
 * @param {Object} options Options for use with `setXClacksOverheadHeader` middleware. Accepts a string or array of strings. 
 * @summary X-Clacks-Overhead header middleware.
 * @description Adds to a given response body the 'X-Clacks-Overhead' header and one randomly selected 
 *     name from internal list. Commemorates the dead. See: https://xclacksoverhead.org/home/about
 */
const setXClacksOverheadHeader = options => (req, res, next) => {
    let name;
    if (options && options.names) {
        const names = options.names;
        if (options.names.length > 1) {
            name = names[Math.floor(Math.random() * names.length)];
        } else {
            name = names[0];
        }
    } else {
        name = "Terry Pratchett";
    }
    res.setHeader("X-Clacks-Overhead", `GNU ${name}`);
    next();
};

module.exports = setXClacksOverheadHeader;