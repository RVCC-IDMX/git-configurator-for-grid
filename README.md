# Git Configurator

Git Configurator is a simple VS Code extension that helps you quickly set your global Git configuration by prompting for your username and email, then executing the corresponding commands in the integrated terminal.

## Features

- **Interactive Input:** Prompts for your Git username and email.
- **Automated Configuration:** Runs `git config --global user.name` and `git config --global user.email` automatically.
- **User-Friendly:** Designed to simplify Git setup for new users.

## Installation

### Manual Installation via VSIX

1. **Package the Extension:**
   - Open a terminal in the extension's root folder (where `package.json` is located).
   - Run the command:
     ```bash
     vsce package
     ```
   - This creates a `.vsix` file for the extension.

2. **Install in VS Code:**
   - Open the Command Palette (`Ctrl+Shift+P` on Windows/Linux or `Cmd+Shift+P` on macOS).
   - Type `Extensions: Install from VSIX…` and select it.
   - Browse to and select the generated `.vsix` file.

## Usage

1. **Run the Command:**
   - Open the Command Palette and type `Configure Git For Grid`.
   - Select the command when it appears.

2. **Enter Your Details:**
   - Enter your Git username when prompted.
   - Enter your Git email when prompted.

3. **Automatic Configuration:**
   - The extension will open a new terminal and run the Git configuration commands:
     ```bash
     git config --global user.name "YOUR_USERNAME"
     git config --global user.email "YOUR_EMAIL"
     ```
   - A notification will confirm the successful update.

## Contributing

Contributions, suggestions, and bug reports are welcome! Please submit issues or pull requests via the project's GitHub repository.

## License

This project is licensed under the MIT License.