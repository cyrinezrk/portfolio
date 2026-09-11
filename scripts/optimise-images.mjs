/*
 * Réduit les images de public/ à la taille où elles sont réellement
 * affichées, et les réécrit en WebP.
 *
 * Le problème d'origine : des captures de 1900 px de large pour un panneau
 * qui en fait 500, et des logos de 2048 px pour une vignette de 42. Le
 * navigateur téléchargeait tout, puis jetait 90 % des pixels.
 *
 * Lancer avec `npm run images`. Le script est idempotent : il saute ce qui
 * est déjà fait. Les PNG d'origine restent dans l'historique Git.
 */
import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import { join, parse } from "node:path";

const PUBLIC = new URL("../public/", import.meta.url).pathname;

// Largeur maximale utile, en pixels, écran haute densité compris.
const WIDTHS = { cover: 1200, logo: 128 };

// Ce qui ne doit pas bouger : icônes du navigateur, image de partage,
// et les deux logos de Create React App qui servent d'icône « React ».
const KEEP = new Set(["logo.png", "logo192.png", "logo512.png"]);

// Les vignettes de compétences, de formation et d'expérience.
const LOGOS = new Set([
  "epitech.png", "g4.png", "montpellier.png", "majoli.png", "waj.png",
  "pythoned.png", "MySQL.svg", "maria.png", "html.png", "java.png",
  "Figma.png", "bubble.png", "shopify.png", "trello.png", "google.png",
  "Phpmyadmin.png", "LINUX.jpg",
]);

const files = await readdir(PUBLIC);
let before = 0;
let after = 0;
const done = [];

for (const name of files) {
  const { name: base, ext } = parse(name);
  if (!/^\.(png|jpe?g|webp)$/i.test(ext)) continue;
  if (KEEP.has(name)) continue;

  const src = join(PUBLIC, name);
  const out = join(PUBLIC, `${base}.webp`);
  const size = (await stat(src)).size;

  const kind = LOGOS.has(name) ? "logo" : "cover";
  const meta = await sharp(src).metadata();
  const width = Math.min(meta.width ?? WIDTHS[kind], WIDTHS[kind]);

  // sharp ne peut pas lire et écrire le même fichier : on passe par le buffer.
  const buf = await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: kind === "logo" ? 86 : 78, effort: 6 })
    .toBuffer();

  await sharp(buf).toFile(out);
  if (src !== out) await unlink(src);

  before += size;
  after += buf.length;
  done.push({ name, from: size, to: buf.length, width: `${meta.width}→${width}` });
}

done.sort((a, b) => b.from - a.from);
for (const d of done) {
  console.log(
    `${String(Math.round(d.from / 1024)).padStart(6)}K → ` +
      `${String(Math.round(d.to / 1024)).padStart(5)}K  ${d.width.padStart(11)}  ${d.name}`
  );
}
console.log(
  `\ntotal : ${(before / 1024 / 1024).toFixed(2)} Mo → ` +
    `${(after / 1024 / 1024).toFixed(2)} Mo ` +
    `(${Math.round((1 - after / before) * 100)} % de moins)`
);
