import { useState, useEffect } from 'react';

import './App.css';

import TreeNode from './components/TreeNode';

import { XMLParser } from 'fast-xml-parser';

function App() {

  const fr = new FileReader();

  // xmlparser options
  const options = {
    ignoreAttributes : false
  };

  const parser = new XMLParser(options);

  // initialize xml string as empty
  const [ selectedFile, setSelectedFile ] = useState('');
  
  const [ xmlObject, setXmlObject ] = useState(null);

  const onSelectedFileChange = (e) => {
    // file upload
    fr.onload = (loadedFile) => {
      setSelectedFile(loadedFile.target.result);
    }
    fr.readAsText(e.target.files[0]);
  }

  useEffect(() => {
    const obj = parser.parse(selectedFile);
    setXmlObject(obj);
  }, [selectedFile]);

  return (
    <div className="container mx-auto px-4 bg-slate-600">
      <div className="flex flex-col space-y-8">
        <h1 className="text-3xl font-bold">
          XML Tree Visualizer
        </h1>
        <input type="file" onChange={onSelectedFileChange} />

        <TreeNode xmlObject={xmlObject} />
      </div>
    </div>
  );
}

export default App;
