// eslint-disable-next-line
import React, {useState, useEffect } from "react"; 
import grapesjs from "grapesjs";
import  plugin from "grapesjs-preset-webpage";
// import "./styles/main.scss";
function App() { 

  const [editor, seteditor] = useState(null);
  
  useEffect(() => {
   const editor = grapesjs.init({
     container: "#editor",
     plugins: [plugin],
     pluginsOpts: {
       [plugin]: { /* options */ }
     }
     })
     seteditor(editor);
  },[]);

  return (
    <div className="App">
    <div id="editor"></div>

    </div>
  );
}

export default App;
