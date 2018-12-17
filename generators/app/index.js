const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('componentName', { typs: String, required: true });
  }

  writting() {
    const componentName = this.options.componentName;
    this.fs.copyTpl(
      this.templatePath('index.js'),
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
      { componentName }
    );
  }
};
