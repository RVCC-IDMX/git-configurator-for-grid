const vscode = require('vscode');

function activate(context) {
  // Register the command "extension.configureGit"
  let disposable = vscode.commands.registerCommand('extension.configureGit', async function () {
    // Prompt the user for their Git username
    const username = await vscode.window.showInputBox({
      prompt: 'Enter your Git username',
      placeHolder: 'YOUR_NAME'
    });
    if (!username) {
      vscode.window.showErrorMessage('Git username is required.');
      return;
    }

    // Prompt the user for their Git email
    const email = await vscode.window.showInputBox({
      prompt: 'Enter your Git email',
      placeHolder: 'YOUR_EMAIL'
    });
    if (!email) {
      vscode.window.showErrorMessage('Git email is required.');
      return;
    }

    // Create and show a new terminal
    const terminal = vscode.window.createTerminal('Git Configurator');
    terminal.show();
    // Send the git config commands to the terminal
    terminal.sendText(`git config --global user.name "${username}"`);
    terminal.sendText(`git config --global user.email "${email}"`);

    // Notify the user that configuration was successful
    vscode.window.showInformationMessage('Git configuration updated successfully!');
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};