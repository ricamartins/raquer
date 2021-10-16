const unknownCommmandMessage = (cmd) => 
    `<br>'${cmd}' não é reconhecido como um comando interno <br>
    ou externo, um programa operável ou um arquivo de lotes.<br>`

const commands = [
    {
        text: 'java',
        result: unknownCommmandMessage('java')
    },
    {
        text: 'javac',
        result: unknownCommmandMessage('javac')
    },
    {
        text: 'jar',
        result: unknownCommmandMessage('jar')
    },
    {
        text: 'keytools',
        result: unknownCommmandMessage('keytools')
    },
    {
        text: 'echo "JAVA_HOME"',
        result: '<br>"JAVA_HOME"<br><br>'
    }
]

const randomInt = (max) => Math.floor(Math.random() * max)

const randomCommand = () => commands[randomInt(commands.length)]

const newCommandPrompt = `
    <br>
    <span class="prompt">
        <span>C:\\Users\\Murilo> </span>
        <span class="cmdline"></span>
        <span class="cursor">_</span>
    </span>
`

let currentCommand = {
    command: null,
    result: null,
    position: null,
    nextChar: function() { return this.command[this.position++] },
    isCompleted: function() { return this.command.length == this.position },
    update: function (cmd) {
        this.command = cmd.text
        this.result = cmd.result
        this.position = 0
    },
    reset: function() { 
        this.command = null
        this.result = null
        this.position = null
    }
}