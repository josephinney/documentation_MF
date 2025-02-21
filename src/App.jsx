import './App.css';
import './Documentation'
import Documentation from './Documentation';

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <h2>The documentation below will be exported as module.</h2>
      <h2>--------------------------------------------------------</h2>
      <Documentation/>
    </div>
  );
};

export default App;
