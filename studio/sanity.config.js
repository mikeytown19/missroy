import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Miss Roy',

  projectId: 'rn0nni15',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: '2021-10-21'}),
  ],

  schema: {
    types: schemaTypes,
  },
})
