import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [{
      name: 'header',
      title: 'Header',
      type: 'document',
      fields: [
        { name: 'logo', title: 'Logo', type: 'image' },
        {
          name: 'links',
          title: 'Links Navigation',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'titulo', title: 'Título', type: 'string' },
                { name: 'href', title: 'Href', type: 'string' },
              ]
            }
          ]
        }
      ],
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'document',
      fields: [
        { name: 'title', title: 'Titulo', type: 'string' },
        { name: 'subtitle', title: 'Sub Titulo', type: 'string' },
        { name: 'description', title: "Descrição", type: "text"},
        { name: 'banner', title: 'Fundo Banner', type: 'image' },
  
      ],
    }
  ],
}
