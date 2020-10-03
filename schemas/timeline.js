export default {
    name: "timeline",
    title: "Timeline",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "location",
            title: "Location",
            type: "string",
        },
        {
            name: "institution",
            title: "Institution",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "experience",
            title: "Experience",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Professional", value: "professional" },
                    { title: "Educational", value: "educational" },
                    { title: "Personal", value: "personal" },
                ],
            },
        },
        {
            name: "technologies",
            title: "Technologies",
            type: "string",
        },
        {
            name: "initialData",
            title: "Initial Date",
            type: "date",
            options: {
                dateFormat: "YYYY-MM",
            },
        },
    ],
};
