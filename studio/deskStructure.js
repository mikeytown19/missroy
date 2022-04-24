import S from "@sanity/desk-tool/structure-builder";
import { PersonIcon, IdCardIcon } from "@radix-ui/react-icons";

const hiddenDocTypes = (listItem) =>
  ![
    "post",
    "person",
    "property",
    "post",
    "page",
    "button",
    "category",
    "hero",
    "review",
    "section",
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site")
        .child(
          S.list()
            .title("Settings")
            .items([
              S.listItem()
                .title("Candidates")
                .schemaType("person")
                .child(S.documentTypeList("person").title("Candidates"))
                .icon(PersonIcon),
              S.listItem()
                .title("Blog")
                .schemaType("post")
                .child(S.documentTypeList("post").title("Blog"))
                .icon(IdCardIcon),
            ])
        ),
      S.listItem()
        .title("Pages")
        .schemaType("page")
        .child(S.documentTypeList("page").title("Pages")),

      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
