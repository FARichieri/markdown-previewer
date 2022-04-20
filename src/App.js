import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer();

function App() {
  const [text, setText] = React.useState('');

  function handleText(e) {
    setText(e.target.value)
  }

  return (
    <div className="quote-box">
      <div id="preview">I'm a preview</div>
      <textarea id="editor" name="text" value={text} onChange={(e) => handleText(e)}>I'm a textarea</textarea>
      <h2>Output:</h2>
      <Preview markdown={text} />
    </div>
  );

  function Preview({markdown}){
    return (
      <div 
        dangerouslySetInnerHTML={{
          __html: marked(markdown, {renderer: renderer}),
        }}
        id="prev"
      />
    )
  }
}

export default App;
