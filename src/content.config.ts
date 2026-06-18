import { defineCollection } from "astro/content/config";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const cars = defineCollection({
    loader: glob({base: 'src/content/Cars', pattern: '*.md'}),
    schema: z.object({
        make: z.string(),
        model: z.string(),
        year: z.number(),
        color: z.string(),
        isElectric: z.boolean(),
    })
})

export const collections = { cars }