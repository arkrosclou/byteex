import { config } from '@keystatic/core';

// Kept in the project root by convention. It stays an index: storage and
// one import per schema, with the schemas themselves in src/schema/.
export default config({
  // Local storage writes straight to the working tree, so every edit in
  // the admin shows up as a normal file change in git.
  storage: { kind: 'local' },
  singletons: {},
  ui: { brand: { name: 'Byteex' } },
});
