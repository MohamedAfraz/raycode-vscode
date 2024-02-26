const fs = require('fs');
const path = require('path');

const open = require("open");
const vscode = require("vscode");

const filetypes = JSON.parse(fs.readFileSync(path.resolve(__dirname, "filetypes.json"), "utf-8"));


/**
 * Generates modified Base64 Encoded String
 * @param {String} str - The string to be encoded.
 * @returns {String} Base64 Encoded String
 */
const generateEncodedCode = str => Buffer.from(str).toString("base64");

/**
 * Generate a URL from using the script-commands
 * by RayCode as a reference.
 * @param {Object} [options]
		Query parameters to be used to 
		construct the completed request.
	* @param {('oceanic'|'sublime'|'hyper'|'coral')} [options.theme]
		The color scheme you want the
		uploaded code to have.
		* @param {(
			'true'|
			'false'
			)} [options.darkMode]
			Will determine whether the background
			behind the text is light or dark.
			* @param {(
				'true'|
				'false'
			)} [options.showBackground]
				Will determine whether the background
				of the image is opaque or translucent.
			* @param {(
		'16'|
		'32'|
		'64'|
		'128'
	)} [options.padding]
		Determines the size of the padding
		around the content of the uploaded text.
	* @param {String} [options.title]
		The title of the code snippet.
	* @param {String} [options.language]
		The language the code is in
	* @param {String} code
		The snippet of code.
	* @returns {String} Returns the URL of the snippet.
*/
const generateRayUrl = (
	code,
	options = {}
) => {
	const objParams = {code: generateEncodedCode(code), ...options, language: getLanguageName()},
	      parameters = Object.keys(objParams).map(key => 
			    `${key}=${encodeURIComponent(objParams[key])}`
	      ).join("&");
		  
	return "https://raycode.netlify.app/?" + parameters;
}

function correctIndentation(text) {
	const lines = text.split("\n");
	const indents = lines.filter(Boolean).map(line => {
		return (line.split(/[^\t\s]/)[0] || "").length;
	});
	const minimumLength = Math.min(...indents);
	return lines.map(x => x.slice(minimumLength)).join("\n").trim();
}

function getLanguageName() {
	const tabFilePath = vscode.window.activeTextEditor.document.fileName;
	const segments = tabFilePath.split(".");
	if (!segments.length) return;
	const extension = segments[segments.length - 1].toLowerCase();
	const [language] = filetypes.filter(({ extensions }) => extensions.includes(extension));
	return language ? language.value : "plaintext";
}


function activate(context) {
	
	const publishSelectedSnippet = vscode.commands.registerCommand("raycode.start", () => {
		const { 
			activeTextEditor, 
			showErrorMessage, 
			showInformationMessage 
		} = vscode.window;

		// * If there is no active text editor,
		// * return an error message.
		if (!activeTextEditor)
			return showErrorMessage(
				`You need to have an open editor to upload a code snippet to RayCode.
				Please select a file and make a text selection to upload a snippet.`
			)
		
		const selectedContent = activeTextEditor.document.getText(activeTextEditor.selection);

		// * If there is no selected content,
		// * return an error message.
		if (!selectedContent)
			return showErrorMessage(
				`You have to have text selected to upload a snippet to RayCode.
				Please select the text you would like to be included in your snippet.`
			);

		// * Generate URL & open in default browser,
		// * then send success message.
		const url = generateRayUrl(correctIndentation(selectedContent), {
			title: "RayCode",
			theme: "oceanic",
			darkMode: "true",
			showBackground: "true",
			padding: "64"
		});
		
		showInformationMessage(
			`Successfully generated RayCode snippet!`
		);

		open(url);
	});

  context.subscriptions.push(publishSelectedSnippet);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
