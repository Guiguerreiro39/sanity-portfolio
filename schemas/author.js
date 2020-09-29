export default {
    name: "author",
    title: "Author",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "introduction",
            title: "Introduction",
            type: "text",
        },
        {
            name: "profileImage",
            title: "Profile Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "github",
            title: "Github",
            type: "url",
        },
        {
            name: "facebook",
            title: "Facebook",
            type: "url",
        },
        {
            name: "instagram",
            title: "Instagram",
            type: "url",
        },
        {
            name: "linkedin",
            title: "LinkedIn",
            type: "url",
        },
        {
            name: "email",
            title: "Email",
            type: "string",
        },
    ],
    preview: {
        select: {
            title: "name",
            media: "profileImage",
        },
    },
};
