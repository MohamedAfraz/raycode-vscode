# [RayCode](https://raycode.netlify.app/)

##### Instantly upload your code snippets to [RayCode](https://raycode.netlify.app) without having to swap between the vsCode IDE and your browser.
___

### Features

- Quickly save screenshots of your code
- Can detect 50+ Programming Languages Automatically
- Copy screenshots to your clipboard
- Copy the link of your RayCode
- Export as PNG or SVG

### Usage Instructions
1. Select text.
2. Click `Ctrl + Shift + P` to open the command palette.
3. Type `"RayCode"` and click `Enter`.
4. Wait
5. RayCode will quickly open the generated snippet in your browser at https://raycode.netlify.app/
6. If language is set as `Plaintext`. Then select language of the selected text in the Drop-Down menu
7. Now, Feel free to tryout all the other Controls & Options 
8. Save the Image. Profit !!

___
> [!TIP]
> - If you'd like to bind RayCode to a hotkey, open up your keyboard shortcut settings and bind raycode.start to a custom keybinding. <br><br>
> - You can Use the keyboard shortcuts in the RayCode Site to export the image faster.
---

### Tutorial
![GIF of plugin being used](https://i.imgur.com/amr6YFB.gif)

(click on the GIF for larger view)

---

> [!WARNING]
> Do Not Select the **Auto Detect** option in the language drop down box. It will make the website screen white and blank (only for you)

> [!NOTE]
> If you do select Auto Detect option by mistake, just refreshing the page won't fix it.

>[!TIP]
> For this you need to clear all your website cookies and browsing data completely for the RayCode website to work normally <br> (Only if you do select Auto Detect option and blank screen appears)
---
###### &copy; RayCode by Mohamed Afraz. All Rights Reserved.
---
### You can fork this Repo or follow the steps below to build it yourself :D
---
## Build steps

### Prerequisites

i. Have [Node.js](https://nodejs.org/en/) installed on your machine.

ii. Update npm to the latest version. Run:

 ```bash
 npm install -g npm@latest
 ```

iii. Install [Git](https://git-scm.com/downloads) and run the installer.

**Now follow the steps below !!**


1. Clone this repo

```bash
git clone https://github.com/MohamedAfraz/raycode-vscode.git && cd raycode-vscode
```

2. Install project dependecies

```bash
npm install
```

3. Now open the raycode-vscode folder in VS Code.
   
4. Now run Debugger (Extension Development Host) by clicking on it in the menu <br> (or) <br> By Pressing the `F5` key

5. Try using it from the Command Palette. It'll mostly work.

6. Just play around, change the code in the `package.json` or `extension.js` files.
---
Hope you got it and all is working!! If not, feel free to start an [Issue](https://github.com/MohamedAfraz/raycode-vscode/issues)⚡
