import { createReader } from '@keystatic/core/reader'

import config from '../../keystatic.config'

// Reads the content files straight off disk at build time.
export const reader = createReader(process.cwd(), config)

type Read<T> = NonNullable<Awaited<T>>

export type Global = Read<ReturnType<typeof reader.singletons.global.read>>
export type Home = Read<ReturnType<typeof reader.singletons.home.read>>
