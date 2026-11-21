// gta6-clipper-01 — entrypoint (Node 22, standard library only).
//
// The entry is the video itself: a 25-second vertical clip cut from
// IShowSpeed's GTA 6 stream (window 4.0s-29.0s of the viral X post by
// @KillaKreww: the worst ending, Jason shot on the bridge, Lucia dying in
// the car, police closing in, the wide bridge shot). The clip is stacked
// full-bleed vertical, no blurred side panels: the gameplay fills the top
// half of the 1080x1920 screen and Speed's facecam — pulled out of the
// stream frame and enlarged — fills the bottom half, so the death moment
// and his shock are on screen together. The last 11 seconds carry the
// make.fun pitch on screen ("MAKE CLIPS WITH AI / EARN ON MAKE.FUN / $500
// BOUNTY - LINK IN DESCRIPTION") and as an English voiceover, while the
// stream audio ducks underneath.
//
// This program reproduces the finished clip: it copies assets/clip.mp4 from
// this repository to the output directory, and when VIDEO.json exists at the
// repository root (it does from FASE 2 on, once the clip is uploaded to
// YouTube as a public Short), it copies that too, which is what the gate
// reads. In FASE 1 there is no VIDEO.json yet, so the program copies the
// clip and exits 0 without it.
//
// The repository root is resolved from this file's own location, never from
// the working directory, so the program behaves identically whether it is
// run from the repository root, from /tmp, or from the grader's /bot.
// MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR override the two directories the
// same way the kit's starter does:
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFile, mkdir, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(fileURLToPath(import.meta.url));
const botDir = process.env.MAKEFUN_BOT_DIR ?? repoRoot;
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The output directory may not exist yet (a run from /tmp proves it), so
// create it here instead of relying on the caller to mkdir first.
await mkdir(outputDir, { recursive: true });

// Report the copy with sizes and a sha256, so a run can be checked for a
// byte-identical reproduction without a second tool.
async function reportCopy(source: string, target: string): Promise<void> {
  const sourceBytes = (await stat(source)).size;
  const targetBytes = (await stat(target)).size;
  const { createReadStream } = await import('node:fs');
  const digest = createHash('sha256');
  await new Promise<void>((resolve, reject) => {
    createReadStream(target)
      .on('data', (chunk) => digest.update(chunk as Buffer))
      .on('end', () => resolve())
      .on('error', reject);
  });
  console.log(
    `copied ${source} (${sourceBytes} bytes) -> ${target} ` +
      `(${targetBytes} bytes, sha256 ${digest.digest('hex')})`,
  );
}

const clipSource = join(botDir, 'assets', 'clip.mp4');
const clipTarget = join(outputDir, 'clip.mp4');

await copyFile(clipSource, clipTarget);
await reportCopy(clipSource, clipTarget);

const videoJsonSource = join(botDir, 'VIDEO.json');
if (existsSync(videoJsonSource)) {
  const videoJsonTarget = join(outputDir, 'VIDEO.json');
  await copyFile(videoJsonSource, videoJsonTarget);
  await reportCopy(videoJsonSource, videoJsonTarget);
} else {
  console.log('VIDEO.json not present yet (FASE 1): clip only, exiting 0.');
}
