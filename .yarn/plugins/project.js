module.exports = {
  name: `plugin-project`,
  factory: require => {
    const {BaseCommand} = require(`@yarnpkg/cli`);
    const {Manifest} = require(`@yarnpkg/core`);

    class HelloWorldCommand extends BaseCommand {
      static paths = [[`project`]];
      
      async execute() {
        const config = await Manifest.fromFile("package.json");
        const dependencies = [];

        // const dependencies = Object.keys(t.raw.dependencies).map(i => `${i}: ${t.raw.dependencies[i]}`);

        config.dependencies.entries().forEach(
          element => dependencies.push(`${element[1].name}: ${element[1].range}`)
        );

        this.context.stdout.write(JSON.stringify({
          name: config.name.name,
          version: config.version,
          description: config.raw.description,
          dependencies: [...dependencies]
        }));
      }
    }

    return {
      commands: [
        HelloWorldCommand,
      ],
    };
  }
};