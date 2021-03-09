import { spawnSync } from 'child_process';
import path from 'path';
import jsdoc2md from 'jsdoc-to-markdown';
import fs from 'fs-extra';
import markdownInclude from 'markdown-include';

const md = jsdoc2md.renderSync({ files: 'src/index.js', 'heading-depth': 3 });

fs.outputFileSync(path.resolve(__dirname, '../docTemplates/examples.md'), md);

markdownInclude.compileFiles(path.resolve(__dirname, '../markdown.json')).then(() => {
  const lastCommandArgs = [['pull'], ['commit', '-am', '"Update new doc"'], ['push', '--force']];

  setTimeout(() => {
    lastCommandArgs.forEach(v => {
      spawnSync('git', v, { stdio: 'inherit', shell: true });
    });
  }, 500);
});
