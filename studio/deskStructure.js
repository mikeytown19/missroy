import {PersonIcon, IdCardIcon} from '@radix-ui/react-icons'

const hiddenDocTypes = (listItem) =>
  ![
    'post',
    'person',
    'property',
    'page',
    'button',
    'category',
    'hero',
    'review',
    'section',
  ].includes(listItem.getId())

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Candidates')
                .schemaType('person')
                .child(S.documentTypeList('person').title('Candidates'))
                .icon(PersonIcon),
              S.listItem()
                .title('Blog')
                .schemaType('post')
                .child(S.documentTypeList('post').title('Blog'))
                .icon(IdCardIcon),
            ])
        ),
      S.listItem()
        .title('Pages')
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),

      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
