import { spawnSync } from 'child_process';
import path from 'path';
import documentation from 'documentation';
import streamArray from 'stream-array';
import vfs from 'vinyl-fs';

const filePath = path.resolve('src/index.js');

documentation.lint(filePath, {}).then(lintOutput => {
  if (lintOutput) {
    console.log(lintOutput);
    process.exit(1);
  } else {
    documentation
      .build(filePath, { shallow: true })
      .then(documentation.formats.html)
      .then(output => {
        const reader = streamArray(output);

        reader.pipe(vfs.dest('./docs'));
        reader.on('end', () => {
          const lastCommandArgs = [['pull'], ['commit', '-am', '"Update new doc"'], ['push', '--force']];

          setTimeout(() => {
            lastCommandArgs.forEach(v => {
              spawnSync('git', v, { stdio: 'inherit', shell: true });
            });
          }, 500);
        });
      });
  }
});
