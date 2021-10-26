const nconf = require('nconf');

nconf.file({ file: 'config/good.json' });

console.log(`database name: "${nconf.get('databaseName')}"`);

/**
 * Do some stuff totally innocent,
 * like insert a new record into the database...
 */

const { sanitizeURLPathSegment } = require('./util');
const postURLPath = sanitizeURLPathSegment('My Blog Post / Article?');
// ... stuff ...
console.log(`successfully created "${postURLPath}"`);

/**
 * Move on to another subject, like dropping the database
 * to take an extreme example...
 */
console.log(`dropping database: "${nconf.get('databaseName')}"`);

/**
 * So OK, this only happens because we required './util'
 * after having loaded the 'config/good.json' config file,
 * which is bad practice and the linter should yell at us,
 * all 'require' statements should be at the top of the file
 * before any code is executed,
 * but there is nothing in JavaScript that prevents us from
 * doing so, and there are some legitimate cases where you
 * may want to do this.
 */
