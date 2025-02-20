const getFormattedDateTime = require("../utils/getFormattedDateTime")

const messages = [
    {
        id: 1,
        user: "Peter",
        date: getFormattedDateTime(),
        text: "Welcome to the Message Board"
    },
    {
        id: 2,
        user: "Jiji",
        date: getFormattedDateTime(),
        text: "Hello, again!"
    }
]

module.exports = messages;