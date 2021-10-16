const cmdConsole = document.querySelector('.console')

const main = (event) => {

    let cursor = document.querySelector('.cursor')
    let cmdline = getLastCmdLine()

    if (currentCommand.command) {
        
        if (currentCommand.isCompleted()) {
            cursor.remove()
            cmdConsole.innerHTML += currentCommand.result
            cmdConsole.innerHTML += newCommandConsole
            currentCommand.reset()
        } else {
            cmdline.innerHTML += currentCommand.nextChar()
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
}

document.addEventListener('keyup', main)
document.addEventListener('click', main)
document.addEventListener('touchstart', main)

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
