// Records the pixel size of every uploaded image so next/image can
// reserve the right box. Keystatic stores no dimensions, and the paths
// come from the content files, so they cannot be imported statically.
// Runs before dev and before build, and the result is committed.

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { imageSize } from 'image-size'

const ROOT = 'public/images'
const OUT = 'src/lib/image-sizes.json'

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name)
      return entry.isDirectory() ? walk(path) : [path]
    })
  )
  return files.flat()
}

const sizes = {}

for (const path of await walk(ROOT)) {
  const { width, height } = imageSize(await readFile(path))
  if (!width || !height) continue
  sizes[`/${relative('public', path)}`] = { width, height }
}

const sorted = Object.fromEntries(Object.entries(sizes).sort())
await writeFile(OUT, `${JSON.stringify(sorted, null, 2)}\n`)

console.log(`${OUT}: ${Object.keys(sorted).length} images`)
