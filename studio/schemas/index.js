import post from './documents/post'
import person from './documents/person'
import page from './documents/page'

import pageBuilder from './objects/pageBuilder'
import pageBuilderContent from './objects/pageBuilderContent'
import pageBuilderColumns from './objects/pageBuilderColumns'
import column from './objects/column'
import blockContent from './objects/blockContent'
import mainImage from './objects/image'
import category from './objects/category'
import hero from './objects/hero'
import section from './objects/section'
import button from './objects/button'

export const schemaTypes = [
  button,
  blockContent,
  category,
  column,
  hero,
  mainImage,
  post,
  person,
  page,
  pageBuilder,
  pageBuilderContent,
  pageBuilderColumns,
  section,
]
