export default function Documentation() {
    return (
        <div>
            <h2>How i created the app?</h2>

            <h3>OVERVIEW </h3>
            <p> This application has two producers and one consumer. One of the producers contains documentation, 
            and another contains a click button with a UI. These two producers are loaded from the consumer main
            app</p>

            <h3>1- CREATE FIRST PRODUCER</h3>
            <p>1.1 I used <b>"Rsbuild"</b> to create a producer calling the following command:</p>
            <code>npm create rsbuild@latest</code>
            <p>1.2 Once created, i added the module-federation plugings:</p>
            <code>npm add @module-federation/enhanced</code>
            <br/>
            <code>npm add @module-federation/rsbuild-plugin --save-dev</code>
            <p>1.3 After that, i created the component that i wanted to be shared from this producer.
                In this case <b>"Documentation.jsx"</b>
            </p>
            <p>1.4 Then, in the <b>rsbuild.config.mjs</b> file, i added the corresponding information
            inside the field <b>exposes</b> of the <b>pluginModuleFederation</b> plugin:</p>
            

<pre>
        <code>
          {`pluginModuleFederation({
  name: 'producer1',
  exposes: {
    './Documentation': './src/Documentation.jsx',
  },
  shared: ['react', 'react-dom'],
});`}
        </code>
      </pre>

      <h3>2- CREATE SECOND PRODUCER</h3>
            <p>2.1 Once again, I used <b>"Rsbuild"</b> to create a producer calling the following command:</p>
            <code>npm create rsbuild@latest</code>
            <p>2.2 Once created, i added the module-federation plugings:</p>
            <code>npm add @module-federation/enhanced</code>
            <br/>
            <code>npm add @module-federation/rsbuild-plugin --save-dev</code>
            <p>2.3 After that, i created the component that i wanted to be shared from this producer.
                In this case <b>"UserInterface.jsx"</b>
            </p>
            <p>2.4 Then, in the <b>rsbuild.config.mjs</b> file, i added the corresponding information
            inside the field <b>exposes</b> of the <b>pluginModuleFederation</b> plugin:</p>
            
<pre>
        <code>
          {`pluginModuleFederation({
      name: 'producer2',
      exposes: {
        './UserInterface': './src/UserInterface.jsx',
      },
      shared: ['react', 'react-dom'],
})`}
        </code>
            </pre>

      <h3>3- CREATE THE CONSUMER</h3> 
      <p>3.1 For creating the consumer, again inizialized a proyect using:</p>
        <code>npm create rsbuild@latest</code>
      <p>3.2 Once created, i added the module-federation plugings:</p>
        <code>npm add @module-federation/enhanced</code>
        <br/>
        <code>npm add @module-federation/rsbuild-plugin --save-dev</code>
      <p>3.3 Then, in the <b>rsbuild.config.mjs</b> file, i added the corresponding information
        inside the field <b>remotes</b> of the <b>pluginModuleFederation</b> plugin. That is, the manifest
        links of the producers that i used in the consumer:</p>

<pre>
    <code>
        {`pluginModuleFederation({
      name: 'consumer',
      remotes: {
        // In production, need update to the deployed URL
        producer1: 'producer1@http://localhost:3006/mf-manifest.json',
        producer2: 'producer2@http://localhost:5001/mf-manifest.json'
      },
      shared: ['react', 'react-dom'],
    })`}
    </code>
</pre>
        <p>3.4 Finally, i imported the federated modules in the App.jsx file of the 
        consumer app, and used it accordingly:
<pre>
    <code>
        {`App.jsx file:
import ProviderDocumentation from 'producer1/Documentation'
import ProviderUserInterface from 'producer2/UserInterface'`}
    </code>
</pre>
        </p>   

        </div>
    );
}
