const cmdConsole = document.querySelector('.console')

document.addEventListener('keyup', (event) => {

    let cursor = document.querySelector('.cursor')
    let cmdline = getLastCmdLine()

    if (currentCommand.command) {

        cmdline.innerHTML += currentCommand.nextChar()
        
        if (currentCommand.isCompleted()) {
            cursor.remove()
            cmdConsole.innerHTML += currentCommand.result
            cmdConsole.innerHTML += newCommandConsole
            currentCommand.reset()
        }

    } else {
        
        if (event.key == 'Enter') {
            cursor.remove()
            cmdConsole.innerHTML += newCommandConsole
        } else {
            let cmd = commands[randomInt(commands.length)]
            currentCommand.update(cmd)
        }
    }
    scrollDown()
})

const getLastCmdLine = () => {
    let cmdline = document.querySelectorAll('.cmdline')
    return cmdline[cmdline.length - 1]
}

const getLastPrompt = () => {
    let cmdline = document.querySelectorAll('.prompt')
    return cmdline[cmdline.length - 1]
}

const randomInt = (max) => Math.floor(Math.random() * max)

const scrollDown = () => cmdConsole.scrollTo(0, cmdConsole.scrollHeight)
