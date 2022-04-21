import React from 'react';
import { marked } from 'marked';
import './App.css';
import Prism from 'prismjs';

function App() {
  const [content, setContent] = React.useState(placeholder);

  function handleText(e) {
    setContent(e.target.value)
  }

  return (
    <>
      <Editor content={content} handleText={handleText} setContent={setContent}/>
      <Preview markdown={content} />
    </>
  );
}

  function Editor({ content, handleText, setContent }) {
    function handleClick() {
      setContent('');
    }
    return(
      <div className="quote-box">
        <h2 className='toolbar'>Editor:</h2>
        <textarea id="editor" type="text" name="content" value={content} onChange={handleText}>I'm a textarea</textarea>
        <button className='cleaner' onClick={handleClick}>Clean Editor</button>
        <h2 className='toolbar'>Previewer:</h2>
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

const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.linkedin.com/in/fabricio-richieri-383646217/), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![frichieri-developer-img](https://avatars.githubusercontent.com/u/85033184?v=4)
> By [frichieri](https://github.com/FARichieri)
`;


export default App;
