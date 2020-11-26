import { spawnSync } from 'child_process';
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

        const lastCommandArgs = [['pull'], ['commit', '-am', '"Update new doc"'], ['push', '--force']];

        setTimeout(() => {
          lastCommandArgs.forEach(v => {
            spawnSync('git', v, { stdio: 'inherit', shell: true });
          });
        }, 500);
      });
  }
});