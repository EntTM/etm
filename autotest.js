import sane from 'sane';
import {resolve, basename, join} from 'path';
import execSh from 'exec-sh';



const appPath = resolve(__dirname, 'app');
const testPath = resolve(__dirname, 'test');

const appWatcher = sane(appPath, {glob: '**/*.js'});
const testWatcher = sane(testPath, {glob: '**/*.js'});

appWatcher.on('change', (file) => {
  console.log(`app file changed: ${file}`);

  const fname = file.replace(/\.js$/, '-test.js');
  const testFile = join(testPath, fname);
  execSh(`babel-node ${testFile} | tap-spec`);
});

testWatcher.on('change', (file) => {
  console.log(`test file changed: ${file}`);

  const testFile = join(testPath, file);
  execSh(`babel-node ${testFile} | tap-spec`);
});
