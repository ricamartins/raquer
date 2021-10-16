const main = (event) => {

    if (currentCommand.command) {
        
        if (currentCommand.isCompleted()) {
            removeCursor()
            printToConsole(currentCommand.result)
            printToConsole(newCommandPrompt)
            currentCommand.reset()
        } else {
            printToCommandLine(currentCommand.nextChar())
        }

    } else {
        
        if (event.key == 'Enter') {
            removeCursor()
            printToConsole(newCommandPrompt)
        } else {
            currentCommand.update(randomCommand())
            printToCommandLine(currentCommand.nextChar())
        }
    }
    scrollDown()
}

document.addEventListener('keydown', main)
document.addEventListener('click', main)
document.addEventListener('touchstart', main)