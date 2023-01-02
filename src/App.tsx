import Root from './routes';
import Nav from './container/Nav';

function App() {
  return (
    <div className="w-full min-h-screen bg-neutral-100">
      <Nav />
      <Root />
    </div>
  );
}

export default App;
