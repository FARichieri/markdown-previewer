import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';
import Prism from 'prismjs';

function App() {
  const [content, setContent] = React.useState('');

  function handleText(e) {
    setContent(e.target.value)
  }

  return (
    <>
      <Editor content={content} handleText={handleText}/>
      <Preview markdown={content} />
    </>
  );
}

  function Editor({ content, handleText }) {
    return(
      <div className="quote-box">
        <h2>Editor:</h2>
        <textarea id="editor" type="text" name="content" value={content} onChange={handleText}>I'm a textarea</textarea>
        <h2>Output:</h2>
      </div>
    )
  }

  function Preview({markdown}) {

    marked.setOptions({
      breaks: true,
      highlight: function (code) {
        return Prism.highlight(code, Prism.languages.javascript, "javascript");
      }
    });
    
    const renderer = new marked.Renderer();
    renderer.link = function (href, title, text) {
      return `<a target="_blank" href="${href}">${text}</a>`;
    };
    
    return (
      <div 
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(markdown, { renderer: renderer })
        }}
      />
    )
  }


export default App;
