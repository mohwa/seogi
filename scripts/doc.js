import path from 'path';
import documentation from 'documentation';
import streamArray from 'stream-array';
import vfs from 'vinyl-fs';

const filePath = path.resolve('lib/index.js');

documentation.lint(filePath, {}).then(lintOutput => {
  if (lintOutput) {
    console.log(lintOutput);
    process.exit(1);
  } else {
    documentation
      .build(filePath, {})
      .then(documentation.formats.html)
      .then(output => {
        streamArray(output).pipe(vfs.dest('./docs'));
      });
  }
});
