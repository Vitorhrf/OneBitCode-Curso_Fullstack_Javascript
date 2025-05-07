import themeFunction from "./theme.js"
import {allowedKeysFunction, clear, charKey} from "./keys.js"
import { calculate } from "./calculate.js"
import copyToClipboard from "./copy.js"

document.querySelectorAll('.charKey').forEach(charKey)
document.getElementById('clear').addEventListener('click', clear)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('input').addEventListener('keydown', allowedKeysFunction)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
document.getElementById('themeSwitcher').addEventListener('click', themeFunction)