module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'componentName',
        // Prompt to display on command line
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{componentName}}/index.js',
        // Handlebars template used to generate content of new file
        templateFile: 'templates-plop/index.js.hbs'
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{componentName}}/{{componentName}}.css',
        // Handlebars template used to generate content of new file
        templateFile: 'templates-plop/css.js.hbs'
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{componentName}}/{{componentName}}.js',
        // Handlebars template used to generate content of new file
        templateFile: 'templates-plop/component.js.hbs'
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{componentName}}/{{componentName}}.test.js',
        // Handlebars template used to generate content of new file
        templateFile: 'templates-plop/test.js.hbs'
      }
    ]
  });
};
