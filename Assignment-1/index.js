

const heading1 = React.createElement(
    "h1",
    {
        id: "title",
        key: "heading1"
    },
    "Heading1 for project",
)
const heading2 = React.createElement(
    "h1",
    {
        id: "title1",
        key: "heading2"
    },
    "Heading2 for project",
)
const container = React.createElement(
    "div",
    {
        id: "title",
        key: "heading1"
    },
    [heading1,heading2],
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
