require('dotenv').config()
console.log(process.env.BRANCH);
console.log(process.env.MEMBER_MODULE_HOST);
const path = '/c/Users/yagam/bin:/mingw64/bin:/usr/local/bin:/usr/bin:/bin:/mingw64/bin:/usr/bin:/c/Users/yagam/bin:/c/compiler/miniconda:/c/compiler/miniconda/Library/mingw-w64/bin:/c/compiler/miniconda/Library/usr/bin:/c/compiler/miniconda/Library/bin:/c/compiler/miniconda/Scripts:/c/compiler/miniconda/bin:/c/Windows/system32:/c/Windows:/c/Windows/System32/Wbem:/c/Windows/System32/WindowsPowerShell/v1.0:/c/Windows/System32/OpenSSH:/cmd:/c/compiler/nodejs:/c/compiler/miniconda:/c/compiler/miniconda/Scripts:/c/compiler/miniconda/condabin:/c/Users/yagam/OneDrive/Script:/c/Users/yagam/Desktop/quick:/c/compiler/go/bin:/bin:/d/tool/Pandoc:/d/tool/wechat_devtool/dll:/c/Users/yagam/AppData/Local/Microsoft/WindowsApps:.:/d/tool/VSCode/bin:/c/Program Files/JetBrains/PyCharm/bin:.:/c/Users/yagam/AppData/Roaming/npm:/c/Users/yagam/go/bin:/c/Program Files/JetBrains/GoLand 2023.2.4/bin:.:/c/Windows/system32:/c/Windows:/c/Windows/System32/Wbem:/c/Windows/System32/WindowsPowerShell/v1.0:/c/Windows/System32/OpenSSH:/cmd:/c/compiler/nodejs:/c/compiler/miniconda:/c/compiler/miniconda/Scripts:/c/compiler/miniconda/condabin:/c/Users/yagam/OneDrive/Script:/c/Users/yagam/Desktop/quick:/c/compiler/go/bin:/bin:/d/tool/Pandoc:/d/tool/wechat_devtool/dll:/c/Users/yagam/AppData/Local/Microsoft/WindowsApps:/d/tool/VSCode/bin:/c/Program Files/JetBrains/PyCharm/bin:/c/Users/yagam/AppData/Roaming/npm:/c/Users/yagam/go/bin:/c/Program Files/JetBrains/GoLand 2023.2.4/bin:/usr/bin/vendor_perl:/usr/bin/core_perl'

path.split(':').forEach((p) => {
    console.log(p);
})