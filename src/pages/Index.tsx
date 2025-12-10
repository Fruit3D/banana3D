import bananaLogo from "@/assets/banana-logo.jpg";
import fruit3dLogo from "@/assets/fruit3d-logo.png";

const CodeBlock = ({ children }: { children: string }) => {
  const lines = children.split("\n");

  return (
    <pre className="bg-code-bg text-code-text p-4 rounded-lg overflow-x-auto text-sm font-mono my-4">
      <code>
        {lines.map((line, index) => {
          const isCommand = line.startsWith("$ ");
          const key = line.length ? line : `empty-${index}`;

          return (
            <span
              key={key}
              style={isCommand ? { color: "#EEBE2F" } : undefined}
            >
              {line}
              {index < lines.length - 1 && "\n"}
            </span>
          );
        })}
      </code>
    </pre>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border py-6">
        <div className="container max-w-4xl mx-auto px-6 flex items-center gap-4">
          <img
            src={bananaLogo}
            alt="Banana3D Logo"
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-3xl font-bold text-foreground">Banana3D</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-lg max-w-none">
          {/* Title Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              A Web3D Smart Object Spec
            </h2>
            <h3 className="text-xl font-semibold text-primary mb-6">
              Build and Share Web3D Interactivity
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Banana3D is a spec and toolkit for packaging reusable JavaScript interactivity with
              glTF 3D models, so you can drop smart 3D objects into any web project and have them
              "just work".
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              It provides a common standard so it is easy to install reusable 3D objects into new
              projects, share them via an npm-style registry, and port code between different Web3D
              rendering engines.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Designed for web and 3D developers who want to create and reuse interactive objects
              without rewriting boilerplate for each engine or project.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
              What you can do with Banana3D
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Install reusable smart 3D objects into any web project using simple CLI commands.</li>
              <li>Package your own glTF models together with interaction code and configuration.</li>
              <li>Edit, preview, and save object configurations in a browser-based editor.</li>
              <li>Publish and share objects through an npm-style registry for others to reuse.</li>
            </ul>
          </section>

          {/* Getting Started */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              Getting Started
            </h2>
            <p className="text-muted-foreground mb-4">
              To get started you'll need to have{" "}
              <a
                href="http://nodejs.org"
                className="text-primary hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Node.js
              </a>{" "}
              installed.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-8 mb-3">
              Install an example smart object:
            </h4>
            <CodeBlock>{`$ npx b3d install running-shoe
No existing web project found.
"running-shoe" v1.2.1 installed in the current directory.
Run "npx b3d editor" to start the object editor in a web browser`}</CodeBlock>
            <p className="text-muted-foreground mb-4">
              This installs the <span className="font-mono text-sm">running-shoe</span> example into the
              current directory so you can explore how a smart object is structured.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-8 mb-3">
              Install in an existing web project:
            </h4>
            <CodeBlock>{`$ cd src/components
$ npx b3d install running-shoe
Found package.json in ../../package.json.
Tech stack discovered:
next 16.0.3
react 19.2.0
@react-three/drei ^10.7.7
@react-three/fiber ^9.4.0
Created "running-shoe" directory.
"running-shoe" v1.2.1 installed.
Run "npx b3d editor" to start the object editor in a web browser`}
</CodeBlock>
            <p className="text-muted-foreground mb-4">
              Here Banana3D detects your existing stack and creates a <span className="font-mono text-sm">running-shoe</span>
              directory inside your components so you can use it directly in your app.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-8 mb-3">
              Initialize a new project:
            </h4>
            <CodeBlock>{`$ npx b3d init
Confirm this is the package.json associated with your project
../../package.json
Yes (y)
No (n)

Generated b3d.json
Use "npx b3d editor" to start the editor`}</CodeBlock>
            <p className="text-muted-foreground mb-4">
              This links Banana3D to your project, generates a <span className="font-mono text-sm">b3d.json</span> config,
              and prepares your workspace for installing and publishing smart objects.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-8 mb-3">
              Start the Banana3D editor:
            </h4>
            <CodeBlock>{`$ npx b3d editor
Confirm this is the editor source code:
editor.jsx
Yes (y)
No (n)

Starting server at: http://localhost:4001`}</CodeBlock>
            <p className="text-muted-foreground mb-4">
              This launches a local browser-based editor where you can edit, preview, and save
              configuration for your smart objects.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-8 mb-3">
              Publish your object:
            </h4>
            <CodeBlock>{`$ npx b3d login
$ npx b3d search running-shoe
No packages called "running-shoe"
$ npx b3d publish --access public`}</CodeBlock>
            <p className="text-muted-foreground mb-4">
              Once you are happy with your object, log in and publish so others can install it from
              the registry like any other package.
            </p>
          </section>

          {/* How does it work */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              How does it work?
            </h2>
            <p className="text-muted-foreground mb-6">
              An npm-style registry maps package names to runtime implementations. Each package can
              include code for multiple Web3D runtimes (for example, different engines or
              frameworks). In future, AI can be used to generate new runtime adapters for rendering
              engines that do not exist yet.
            </p>
            <p className="text-muted-foreground mb-6">
              Developers can optionally create an editing interface for changing the configuration 
              of the 3D object.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-8 mb-3">
              Typical folder structure:
            </h4>
            <p className="text-muted-foreground mb-3">
              Here is an example layout for a reusable <span className="font-mono text-sm">shoe</span> smart object
              inside your project:
            </p>
            <CodeBlock>{`components/
  shoe/
    editor.jsx
    shoe.glb
    shoe.jsx
    b3d.config.json
    b3d.json`}</CodeBlock>

            <div className="bg-secondary/50 rounded-lg p-6 mt-6">
              <p className="text-foreground font-medium mb-3">The folder contains:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><span className="font-mono text-sm text-primary">editor.jsx</span> - A development editor to edit, preview, and save configuration for how the object should look and behave.</li>
                <li><span className="font-mono text-sm text-primary">shoe.glb</span> - The glTF 3D asset file.</li>
                <li><span className="font-mono text-sm text-primary">shoe.jsx</span> - The runtime code that provides interactivity.</li>
                <li><span className="font-mono text-sm text-primary">b3d.config.json</span> - Runtime configuration used by the code (for example, presets or debug flags).</li>
                <li><span className="font-mono text-sm text-primary">b3d.json</span> - Package metadata and code dependencies, required if you want to publish and share.</li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold text-foreground mt-8 mb-3">
              Code Dependencies example config:
            </h4>
            <p className="text-muted-foreground mb-4">
              This code is packaged with the glTF file so it can easily be unpacked and run. We use
              the npm ecosystem for managing dependencies, so if they are already installed in the
              host project, they are not installed again.
            </p>
            <CodeBlock>{`{
  "start": "main.jsx",
  "dependencies": {
    "@react-three/fiber": "^9.4.0",
    "three": "^0.161.0"
  }
}`}</CodeBlock>

            <h4 className="text-lg font-semibold text-foreground mt-8 mb-3">
              Store configuration for your reusable object(s):
            </h4>
            <p className="text-muted-foreground mb-4">
              Example "b3d.config.json", stored in the root of the project.
            </p>
            <CodeBlock>{`{
  "debug": true
}`}</CodeBlock>
          </section>

          {/* Request for Comments */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              Request for Comments
            </h2>
            <p className="text-muted-foreground">
              This spec is in active development. Feedback, ideas, or concerns? Open an issue on our
              repository or get in touch so we can incorporate your use cases.
            </p>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              FAQs
            </h2>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  What happens if I have loads of 3D objects?
                </h4>
                <p className="text-muted-foreground">
                  You can include multiple objects in a single package, but we recommend grouping
                  related objects together and avoiding very large, monolithic packages. Smaller,
                  focused packages are faster to install and easier to maintain.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  How is this different from the glTF Interactivity Spec?
                </h4>
                <p className="text-muted-foreground">
                  We are aware of the glTF Interactivity Spec. Banana3D explores a different approach
                  that embraces simplicity, the npm ecosystem for dependencies, and a structure that
                  makes it easy for AI tools to generate and maintain code.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  How are new runtime versions created using AI?
                </h4>
                <p className="text-muted-foreground">
                  This is an experimental direction. We still need to work out where the AI code will
                  run (locally or on a remote server). The idea is to pass an existing runtime
                  implementation and a target engine into an AI system and generate a new adapter.
                  The hard part is robust testing to make sure it behaves like the original version.
                  Got ideas? Get in touch.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Why create Banana3D?
                </h4>
                <p className="text-muted-foreground">
                  Right now, creating and sharing high quality interactive objects is hard work. We want
                  to make reusable interactive objects for everyday items without reinventing the wheel
                  each time. Banana3D aims to guide developers towards high quality objects, with
                  clearer standards for how we create, edit, and share interactive 3D on the web.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 mt-12">
        <div className="container max-w-4xl mx-auto px-6 flex justify-center">
          <a
            href="https://www.fruit3d.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src={fruit3dLogo}
              alt="Fruit3D Logo"
              className="h-10 object-contain"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
