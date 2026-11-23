// Post-build : le CV est une page 100 % statique sans aucune interaction,
// le runtime React/Next (hydratation, navigation client) n'y sert à rien.
// On retire donc toutes les balises <script> et les préchargements de scripts du HTML exporté,
// puis on supprime les fichiers .js devenus inutiles.
import { readdir, readFile, writeFile, rm, stat } from "node:fs/promises";
import { join } from "node:path";

const OUT = "out";

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let avant = 0;
let apres = 0;
let jsSupprime = 0;

for await (const file of walk(OUT)) {
  if (file.endsWith(".html")) {
    const html = await readFile(file, "utf8");
    const propre = html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<link\b[^>]*\bas="script"[^>]*\/?>/gi, "")
      .replace(/<link\b[^>]*\brel="modulepreload"[^>]*\/?>/gi, "");
    avant += Buffer.byteLength(html);
    apres += Buffer.byteLength(propre);
    await writeFile(file, propre);
  } else if (file.endsWith(".js") || file.endsWith(".txt")) {
    // .js : runtime React ; .txt : payloads RSC pour la navigation client.
    jsSupprime += (await stat(file)).size;
    await rm(file);
  }
}

const ko = (n) => (n / 1024).toFixed(1) + " Ko";
console.log(`HTML : ${ko(avant)} -> ${ko(apres)} | fichiers JS/RSC supprimés : ${ko(jsSupprime)}`);
