import Root from "./routes";
import Nav from "./container/Nav";

function App() {
  return (
    <div className="w-screen h-full bg-neutral-100">
      <Nav />
      <Root />
    </div>
  );
}

export default App;
