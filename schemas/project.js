export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        },
        {
            name: "github",
            title: "Github",
            type: "url",
        },
        {
            name: "demo",
            title: "Demo",
            type: "url",
        },
    ],

    preview: {
        select: {
            title: "title",
            description: "description",
            media: "mainImage",
        },
    },
};
