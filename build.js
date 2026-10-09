#!/usr/bin/env node
'use strict';
/**
 * build.js — Bluestem Real Estate and Land
 * Assembles source HTML (partials pattern) into /dist for Cloudflare Pages deploy.
 * Usage: node build.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const PARTIALS_DIR = path.join(ROOT, '_partials');

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '_partials', 'client-photos', '.github', 'generated']);
const SKIP_FILES = new Set(['_build-data.js', 'build.js', 'package.json', 'package-lock.json', '.gitignore', '.gitkeep']);

function readPartial(name) {
  const p = path.join(PARTIALS_DIR, name);
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '';
}

const PARTIALS = {
  '<!-- HEAD -->': readPartial('head.html'),
  '<!-- HEADER -->': readPartial('header.html'),
  '<!-- FOOTER -->': readPartial('footer.html'),
};

function assemble(html) {
  let out = html;
  for (const [marker, content] of Object.entries(PARTIALS)) {
    out = out.split(marker).join(content);
  }
  return out;
}

function walk(dir, baseDir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(baseDir, fullPath);
    if (entry.isDirectory()) {
      walk(fullPath, baseDir);
    } else {
      if (SKIP_FILES.has(entry.name)) continue;
      const destPath = path.join(DIST, relPath);
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      if (entry.name.endsWith('.html')) {
        const raw = fs.readFileSync(fullPath, 'utf8');
        fs.writeFileSync(destPath, assemble(raw), 'utf8');
      } else {
        fs.copyFileSync(fullPath, destPath);
      }
    }
  }
}

function clean() {
  if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });
}

function generateRobots() {
  const content = `User-agent: *\nDisallow: /\n\nSitemap: https://bluestem-real-estate.pages.dev/sitemap.xml\n`;
  fs.writeFileSync(path.join(DIST, 'robots.txt'), content, 'utf8');
}

function generateSitemap() {
  const pages = ['/', '/about/', '/contact/', '/services/', '/residential/', '/land-ranch/', '/commercial/'];
  const base = 'https://bluestem-real-estate.pages.dev';
  const urls = pages.map(p => `  <url><loc>${base}${p}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), xml, 'utf8');
}

function main() {
  console.log('[build] Cleaning dist/...');
  clean();
  console.log('[build] Assembling pages...');
  walk(ROOT, ROOT);
  console.log('[build] Generating robots.txt + sitemap.xml...');
  generateRobots();
  generateSitemap();
  console.log('[build] Done.');
}

main();
