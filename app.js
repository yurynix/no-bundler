import { render, Component } from "https://unpkg.com/preact?module";
import html from '/html.js';
import Video from '/video.js';

const Header = ({ name }) => html`<header><h2>${name} List</h2></header>`;
const Footer = props => html`<footer ...${props} />`;

class App extends Component {
  addTodo() {
    const todos = this.state.todos || [];
    this.setState({ todos: todos.concat(`Item ${todos.length}`) });
  }
  render({ }, { todos = [] }) {
    return html`
      <div class="app">
        <${Header} name="Da Best Todo" />
        <ul>
          ${todos.map(todo => html`
            <li>${todo}</li>
          `)}
        </ul>
        <button class="btn" onClick=${() => this.addTodo()}>✨ Add Item</button>
        <${Footer}>This is a footer.<//>
        <${Video} />
      </div>
    `;
  }
}

render(html`<${App} />`, document.getElementById("root"));