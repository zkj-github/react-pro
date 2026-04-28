import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const rootPkg = JSON.parse(readFileSync('package.json', 'utf-8'));
const version = rootPkg.version;

const packagesDir = 'packages';
const dirs = readdirSync(packagesDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

for (const pkg of dirs) {
  const pkgPath = join(packagesDir, pkg, 'package.json');
  try {
    const pkgJson = JSON.parse(readFileSync(pkgPath, 'utf-8'));
    pkgJson.version = version;
    writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2) + '\n');
    console.log(`✓ ${pkg} -> ${version}`);
  } catch {
    // Skip if package.json doesn't exist
  }
}
