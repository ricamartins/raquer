const cmdConsole = document.querySelector('.console')

const getLastCmdLine = () => {
    let cmdline = document.querySelectorAll('.cmdline')
    return cmdline[cmdline.length - 1]
}

const scrollDown = () => cmdConsole.scrollTo(0, cmdConsole.scrollHeight)
const printToConsole = (html) => cmdConsole.innerHTML += html 
const printToCommandLine = (html) => getLastCmdLine().innerHTML += html
const removeCursor = () => document.querySelector('.cursor').remove()