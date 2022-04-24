export default {
  name: "page",
  type: "document",
  title: "Pages",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Custom Page",
      name: "custom_page",
      type: "boolean",
    },
    {
      name: "meta_title",
      type: "string",
      title: "Meta Title",
      validation: (Rule) =>
        Rule.required().warning(
          `No Meta Title has been added, default title will be used.`
        ),
    },
    {
      name: "meta_description",
      type: "string",
      title: "Meta Description",
      validation: (Rule) =>
        Rule.required().warning(
          `No Meta Description has been added, default description will be used.`
        ),
    },

    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "pageBuilder",
      type: "pageBuilder",
      title: "Page Builder",
    },
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug",
    },
    prepare({ title = "No title", slug = {} }) {
      return {
        title,
        subtitle: slug.current,
      };
    },
  },
};
