const nconf = require('nconf');

nconf.file({ file: 'config/bad.json' });

const forbiddenURLChars = nconf.get('forbiddenURLChars');
const sanitizeRegex = new RegExp(`[${forbiddenURLChars}]+`, 'g');

exports.sanitizeURLPathSegment = (str) => str
    .replace(sanitizeRegex, '-')
    .replace(/(^-)|(-$)/g, '')
    .toLowerCase();
