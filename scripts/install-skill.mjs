#!/usr/bin/env node

/**
 * rp-character-crafter-skill — postinstall helper
 *
 * Auto-installs the SKILL.md and templates to ~/.agents/skills/rp-character-crafter/
 * after `npm install -g rp-character-crafter-skill` or `npm install rp-character-crafter-skill`.
 */

import { existsSync, mkdirSync, copyFileSync, readdirSync, statSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = resolve(__dirname, '..');

// Detect skills directory
const HOME = process.env.HOME || process.env.USERPROFILE || '';
const CANDIDATES = [
  join(HOME, '.agents', 'skills'),
  join(HOME, '.claude', 'skills'),
];

const SKILL_DIR = CANDIDATES.find((dir) => {
  try {
    return existsSync(dir) && statSync(dir).isDirectory();
  } catch {
    return false;
  }
});

if (!SKILL_DIR) {
  console.log('\n  rp-character-crafter-skill installed.');
  console.log(`  To use it, copy SKILL.md to your agent's skills directory:\n`);
  console.log(`    mkdir -p ~/.agents/skills/rp-character-crafter`);
  console.log(`    cp -r ${PACKAGE_ROOT}/SKILL.md ${PACKAGE_ROOT}/templates ~/.agents/skills/rp-character-crafter/\n`);
  process.exit(0);
}

const TARGET = join(SKILL_DIR, 'rp-character-crafter');
if (!existsSync(TARGET)) {
  mkdirSync(TARGET, { recursive: true });
}

// Copy SKILL.md
copyFileSync(join(PACKAGE_ROOT, 'SKILL.md'), join(TARGET, 'SKILL.md'));

// Copy templates
const TEMPLATES_SRC = join(PACKAGE_ROOT, 'templates');
const TEMPLATES_DST = join(TARGET, 'templates');
if (existsSync(TEMPLATES_SRC)) {
  if (!existsSync(TEMPLATES_DST)) {
    mkdirSync(TEMPLATES_DST, { recursive: true });
  }
  for (const file of readdirSync(TEMPLATES_SRC)) {
    copyFileSync(join(TEMPLATES_SRC, file), join(TEMPLATES_DST, file));
  }
}

console.log(`\n  ✓ rp-character-crafter-skill installed to ${TARGET}/\n`);
console.log(`  Restart your AI agent to load the skill.\n`);
