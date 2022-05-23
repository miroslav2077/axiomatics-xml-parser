import { useState, useEffect } from "react";

import "./App.css";

import TreeNode from "./components/TreeNode";

import { XMLParser } from "fast-xml-parser";

const fr = new FileReader();

// xmlparser options
const options = {
  ignoreAttributes: false,
};

const parser = new XMLParser(options);

function App() {
  // initialize xml string as empty
  const [selectedFile, setSelectedFile] = useState("");

  const [xmlObject, setXmlObject] = useState(null);

  const onSelectedFileChange = (e) => {
    // file upload
    fr.onload = (loadedFile) => {
      setSelectedFile(loadedFile.target.result);
    };
    if (e.target.files.length) {
      fr.readAsText(e.target.files[0]);
    }
  };

  useEffect(() => {
    const obj = parser.parse(selectedFile);
    setXmlObject(obj);
  }, [selectedFile]);

  return (
    <div className="container relative mx-auto bg-slate-600 my-10 rounded-2xl p-10">
      <div className="absolute w-full -top-1 left-0 right-0 bg-slate-200 flex space-x-2 items-center px-2 h-8 rounded-t-2xl">
        <div className="bg-red-500 rounded-full w-3 h-3"></div>
        <div className="bg-yellow-400 rounded-full w-3 h-3"></div>
        <div className="bg-green-500 rounded-full w-3 h-3"></div>

        <h1 className="text-lg font-bold pl-1">XML Tree Visualizer</h1>
      </div>
      <div className="flex flex-col pt-8 space-y-8">
        <div className="text-white">
          <input type="file" onChange={onSelectedFileChange} />
        </div>

        <div className="break-all -ml-8">
          <TreeNode xmlObject={xmlObject} />
        </div>
      </div>
    </div>
  );
}

export default App;
