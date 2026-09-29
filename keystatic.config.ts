import { config } from '@keystatic/core'

import { global } from './src/schema/singletons/global'

// Kept in the project root by convention. It stays an index: storage and
// one import per schema, with the schemas themselves in src/schema/.
export default config({
  // Local storage writes straight to the working tree, so every edit in
  // the admin shows up as a normal file change in git.
  storage: { kind: 'local' },
  singletons: { global },
  ui: { brand: { name: 'Byteex' } },
})
