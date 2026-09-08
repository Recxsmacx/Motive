const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../../packages/motive-icons');
const destDir = path.resolve(__dirname, '../node_modules/rex-motive');

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // Copy dist
  if (fs.existsSync(path.join(srcDir, 'dist'))) {
    fs.cpSync(path.join(srcDir, 'dist'), path.join(destDir, 'dist'), { recursive: true, force: true });
  }

  // Copy src
  if (fs.existsSync(path.join(srcDir, 'src'))) {
    fs.cpSync(path.join(srcDir, 'src'), path.join(destDir, 'src'), { recursive: true, force: true });
  }

  // Copy package.json
  if (fs.existsSync(path.join(srcDir, 'package.json'))) {
    fs.copyFileSync(path.join(srcDir, 'package.json'), path.join(destDir, 'package.json'));
  }

  console.log('Successfully synced rex-motive package to node_modules/rex-motive');
} catch (err) {
  console.error('Error syncing rex-motive package:', err);
  process.exit(1);
}
