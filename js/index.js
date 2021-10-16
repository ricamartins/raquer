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
            currentCommand.update(randomCommand())
            cmdline.innerHTML += currentCommand.nextChar()
        }
    }
    scrollDown()
}

document.addEventListener('keydown', main)
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

const scrollDown = () => cmdConsole.scrollTo(0, cmdConsole.scrollHeight)
