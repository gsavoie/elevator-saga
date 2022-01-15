import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('elevator-saga.open', () => {
			const panel = vscode.window.createWebviewPanel(
				'elevator-saga',
				'Elevator Saga',
				vscode.ViewColumn.One,
				{
					enableScripts: true,
					retainContextWhenHidden: true
        });

			  panel.webview.html = getWebviewContent()
		})
	);
}
function getWebviewContent() {
	return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Elevator Saga</title>
  </head>
  <body>
    <iframe id="elevator-saga" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;" src="https://play.elevatorsaga.com"></iframe>
    <script>
      //localStorage.setItem('elevatorCrushCode_v5', JSON.stringify({ hello: 'world' }))
      //document.getElementById('elevator-saga').contentWindow.location.reload(true);
    </script>
  </body>
  </html>`;
  }

// this method is called when your extension is deactivated
export function deactivate() {}
