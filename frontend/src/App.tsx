import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { tools } from "./tools";

function App() {
  return (
    <>
      <div className="p-4 flex flex-col items-center">
        <div className="p-4 flex flex-col w-full max-w-[800px]">
          <div className="flex flex-col w-full items-center mb-6">
            <p className="text-[1.4em]">Tools by Yash</p>
            <p className="text-[rgb(150,150,150)]">
              Some random tools that I created for myself
            </p>
          </div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              {tools.map((tool) => (
                <Route
                  key={tool.link}
                  path={tool.link}
                  element={<tool.component data={tool} />}
                />
              ))}
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
