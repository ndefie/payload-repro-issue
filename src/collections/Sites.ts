import type { CollectionConfig } from 'payload'

export const Sites: CollectionConfig = {
    slug: 'sites',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'customCode',
            type: 'code',
            required: false,
            admin: {
                language: 'html',
                description: 'Accepts HTML',
            },
        },
    ],
}
