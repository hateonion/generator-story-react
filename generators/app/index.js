const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('componentName', { types: String, required: true });
    this.argument('packageName', { types: String, required: true });
  }

  writting() {
    const { componentName, packageName } = this.options;
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
      { componentName, packageName }
    );
  }
};
