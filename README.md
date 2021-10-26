# Short Demo on Why a Having a Global Configuration Object is Risky

Have a look at the file [src/index.js](src/index.js) to see the problem
illustrated, the file is abundantly commented.

**TL;DR**: Because of side-effects introduced by `nconf`, in the example,
we are dropping our production database instead of the testing database.

Here's what the program outputs:

```
database name: "testing"
successfully created "my-blog-post-article"
dropping database: "production"
```
