/**
 * Builds the responsive image set the site expects.
 *
 *   1. Put full-size originals in /images-src (webp, jpg or png), named as the site uses them:
 *        bean-kiosk-render, bean-kiosk-concept, bean-cup-espresso, bean-cup-autumn,
 *        rwanda-farm, drink-<espresso|americano|cappuccino|cafe-latte|flat-white|mocha|hot-chocolate>,
 *        venue-<office|hotel|airport|university|mall>
 *   2. Run `npm run images`.
 *
 * Writes public/img/<name>-480.webp, -960.webp and -1440.webp.
 */
import { readdir, mkdir } from 'node:fs/promises';
import { extname, basename, join } from 'node:path';
import sharp from 'sharp';

const SRC = 'images-src';
const OUT = 'public/img';
const WIDTHS = [480, 960, 1440];

await mkdir(OUT, { recursive: true });
const files = (await readdir(SRC)).filter((f) => /\.(webp|jpe?g|png|avif)$/i.test(f));
if (!files.length) console.log(`No images found in ${SRC}/`);

for (const file of files) {
  const name = basename(file, extname(file));
  for (const w of WIDTHS) {
    await sharp(join(SRC, file))
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 })
      .toFile(join(OUT, `${name}-${w}.webp`));
  }
  console.log(`✓ ${name}`);
}
