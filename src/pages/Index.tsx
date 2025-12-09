import bananaLogo from "@/assets/banana-logo.jpg";
import fruit3dLogo from "@/assets/fruit3d-logo.jpg";

const CodeBlock = ({ children }: { children: string }) => (
  <pre className="bg-code-bg text-code-text p-4 rounded-lg overflow-x-auto text-sm font-mono my-4">
    <code>{children}</code>
  </pre>
);

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
            <p className="text-lg text-muted-foreground leading-relaxed">
              This spec makes it easy to share JavaScript-based interactivity for glTF objects. 
              We provide a common standard so it's easy to install reusable 3D objects into new 
              projects and port code between 3D rendering engines.
            </p>
          </div>

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
              Try installing an example smart object:
            </h4>
            <CodeBlock>{`npx b3d install running-shoe
> No existing web project found. 
> "running-shoe" v1.2.1 installed in the current directory. 
> Run "npx b3d editor to start the object editor in a web browser"`}</CodeBlock>

            <h4 className="text-lg font-semibold text-foreground mt-8 mb-3">
              Try installing in an existing web project:
            </h4>
            <CodeBlock>{`cd src/components
npx b3d install running-shoe
> Found package.json in ../../package.json.
> Tech stack discovered: 
> next 16.0.3
> react 19.2.0
> @react-three/drei ^10.7.7
> @react-three/fiber ^9.4.0
> Created "running-shoe" directory".
> "running-shoe" v1.2.1 installed. 
> Run "npx b3d editor to start the object editor in a web browser"`}</CodeBlock>

            <h4 className="text-lg font-semibold text-foreground mt-8 mb-3">
              Initialise a brand new project:
            </h4>
            <CodeBlock>{`npx b3d init
> Confirm this is the package.json associated with your project
> ../../package.json
> Yes (y)
> No (n)

> Generated b3d.json
> Use "npx b3d editor" to start the editor`}</CodeBlock>

            <h4 className="text-lg font-semibold text-foreground mt-8 mb-3">
              Start the editor:
            </h4>
            <CodeBlock>{`npx b3d editor
> Confirm this is the editor source code:
> editor.jsx
> Yes (y)
> No (n)

> Starting server at: http://localhost:4001`}</CodeBlock>

            <h4 className="text-lg font-semibold text-foreground mt-8 mb-3">
              Publish:
            </h4>
            <CodeBlock>{`npx b3d login
npx b3d search running-shoe
> No packages called "running-shoe"
npx b3d publish --access public`}</CodeBlock>
          </section>

          {/* How does it work */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              How does it work?
            </h2>
            <p className="text-muted-foreground mb-6">
              A npm-style registry is used to map packages, to code. Code can be written for 
              multiple web 3D runtimes. AI can be used to generate implementations for rendering 
              engines that don't exist yet.
            </p>
            <p className="text-muted-foreground mb-6">
              Developers can optionally create an editing interface for changing the configuration 
              of the 3D object.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-8 mb-3">
              Typical folder structure:
            </h4>
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
                <li><span className="font-mono text-sm text-primary">editor.jsx</span> - An editor for developers to edit, preview and save configuration for how it should look and behave.</li>
                <li><span className="font-mono text-sm text-primary">shoe.glb</span> - The glTF file.</li>
                <li><span className="font-mono text-sm text-primary">shoe.jsx</span> - The code for interactivity</li>
                <li><span className="font-mono text-sm text-primary">b3d.config.json</span> - Any configuration used by the code.</li>
                <li><span className="font-mono text-sm text-primary">b3d.json</span> - Code dependencies. Required if you want to publish and share.</li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold text-foreground mt-8 mb-3">
              Code Dependencies example config:
            </h4>
            <p className="text-muted-foreground mb-4">
              This code is packaged up with the glTF file so it can easily be unpacked and run. 
              We use the npm system for managing dependencies, so if they are already installed 
              in the project, it doesn't install them again.
            </p>
            <CodeBlock>{`{
  "start": "main.jsx",
  "dependencies": {
    "react-three-fiber": "^2.3.2"
    "three.js": "^2.3.2"
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
              This spec is in active development. Feedback? Submit here.
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
                  You can include multiple objects in a single package, but please keep it as minimal as you can.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Don't you know about the glTF Interactivity Spec?
                </h4>
                <p className="text-muted-foreground">
                  Yes. We felt there was scope to solve the problem in a very different way. This spec aims 
                  to embrace simplicity, npm for dependencies and the ability for AI to easily generate code.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  How are new runtime versions created using AI?
                </h4>
                <p className="text-muted-foreground">
                  We still need to workout where the AI code will run - locally or on a remote server. 
                  Essentially we'll pass the existing runtime version, and target version into an AI and 
                  get it to generate code. The hard bit is testing to make sure it works in the same way 
                  as the original version. Got ideas? Get in touch.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Why do this at all?
                </h4>
                <p className="text-muted-foreground">
                  Right now creating and sharing high quality interactive objects is hard work! We want to 
                  make lots of interactivity objects for everyday items. Why re-invent the wheel each time? 
                  We want to guide users towards making high quality objects that have better web standards 
                  for how we create, edit and share interactive 3D objects.
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
