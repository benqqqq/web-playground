import r2wc from "@r2wc/react-to-web-component";

const Greeting = () => {
  return <p>Hello, World!</p>;
};

const WebGreeting = r2wc(Greeting);
if (!customElements.get('web-greeting')) {
  customElements.define("web-greeting", WebGreeting);
}

export function WebComponentDemo() {
  const content = `
     <web-greeting></web-greeting> 
  `;

  return (
    <div>
      <h1>WebComponentDemo</h1>

      <h3>Normal React Component</h3>
      <Greeting />

      <hr/>
      
      <h3>Web Component</h3>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}
