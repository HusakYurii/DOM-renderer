//We want to be sure that the page in browser is loaded
import Render from "./Render.js";
// This data could be sent from the server, or it can be your local configuration
// You can use the data like this to generate a page
// The idea is that you can set any data, but the structure must be the same and your page will be generated
const data = {
    template: [{
        type: "div",
        attrebutes: [{ name: "class", value: "wrapper" }],
        children: [{
            type: "form",
            attrebutes: [
                { name: "id", value: "form" },
                { name: "method", value: "POST" }
            ],
            children: [{
                    type: "h3",
                    text: "Let's keep in touch!"
                },
                {
                    type: "p",
                    text: "If you are eager to make your party gorgeous and memorable then you should contact us!"
                },
                {
                    type: "label",
                    text: "Your Name"
                },
                {
                    type: "input",
                    attrebutes: [
                        { name: "type", value: "text" },
                        { name: "name", value: "name" },
                        { name: "placeholder", value: "James Doe" },
                        { name: "required", value: "required" }
                    ]
                },
                {
                    type: "label",
                    text: "Your e-mail"
                },
                {
                    type: "input",
                    attrebutes: [
                        { name: "type", value: "text" },
                        { name: "name", value: "email" },
                        { name: "placeholder", value: "JamesDoe@domain" },
                        { name: "required", value: "required" }
                    ]
                },
                {
                    type: "label",
                    text: "Your message"
                },
                {
                    type: "textarea",
                    attrebutes: [
                        { name: "name", value: "message" },
                        { name: "placeholder", value: "..." },
                        { name: "rows", value: "10" },
                        { name: "required", value: "required" }
                    ]
                },
                {
                    type: "input",
                    attrebutes: [
                        { name: "type", value: "submit" },
                        { name: "value", value: "Send" }
                    ]
                }
            ]
        }]
    }]
}

// This is the main function which goes through all data recursively and creates HTML tree


const htmlTree = Render.render(data.template);
document.body.append(...htmlTree);
