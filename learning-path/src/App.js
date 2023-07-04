import './App.css';

// JSX CONCEPTS
function Components() {
  return (
    <>
      <div>New</div>
    </>
  );
}

function Home() {
  return (
    <>
      <div>
        Old <Home />
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <div>
        HEllo <Components />
      </div>
    </>
  );
}

export default App;
