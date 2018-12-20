const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'componentName',
        message: 'Give your component a cool name!',
      },
      {
        type: 'input',
        name: 'packageName',
        message: 'Whats your package name?',
        store: true,
      },
      {
        type: 'confirm',
        name: 'isFunctional',
        message:
          'Is this component a functional component? (If not, will create a class component)',
        store: true,
      },
    ]);
    console.log(this.answers);
  }

  writting() {
    const { componentName, isFunctional, packageName } = this.answers;
    const componentTemplate = isFunctional
      ? 'functional.index.js'
      : 'class.index.js';
    this.fs.copyTpl(
      this.templatePath(componentTemplate),
      this.destinationPath('index.js'),
      { componentName }
    );

    this.fs.copyTpl(
      this.templatePath('index.scss'),
      this.destinationPath(`${componentName}.scss`)
    );

    this.fs.copyTpl(
      this.templatePath('component.story.js'),
      this.destinationPath(`${componentName}.story.js`),
      { componentName, packageName }
    );
  }
};
