import React from 'react';
import './App.css';

function renderPhase(phase, parent) {
  switch (phase) {
    case 'loading':
      return <Loading {...{phase, parent}} />;
    case 'start':
      return <Start {...{phase, parent}} />;
    case 'todo':
      return <Todo {...{phase, parent}} />;
    default:
      return <Unknown {...{phase, parent} }/>;
  }
}

class Loading extends React.Component {
  render() {
    console.log('render: loading');
    return (<p>loading phase</p>);
  }
}

class Start extends React.Component {
  todo() {
    const {phase} = this.props;
    console.log(`fn: ${phase}.todo()`);
    const {parent} = this.props;
    parent.phaseChange('todo');
  }
  render() {
    const {phase} = this.props;
    console.log(`render: ${phase}`);
    return (<div>
      <h1>start</h1>
      <button onClick={() => this.todo()}>todo</button>
    </div>);
  }
}

function st(thiz, key, def) {
  const val = (thiz.state || {})[key];
  return val !== undefined ? val : def;
}

class Todo extends React.Component {
  componentDidMount() {
    const itemsStr = localStorage.getItem('items');
    if (itemsStr) {
      const items = JSON.parse(itemsStr);
      const state = {items};
      if (Array.isArray(items)) {
        console.log('loaded', state);
        this.setState(state);
      } else {
        console.log('failed to load', state);
      }
    }
  }
  componentDidUpdate() {
    const {items} = this.state;
    localStorage.setItem('items', JSON.stringify(items));
  }
  addItem(item) {
    const {phase} = this.props;
    console.log(`fn: ${phase}.addItem(${JSON.stringify(item)})`);
    const items = [...st(this, 'items', []), item];
    this.setState({items});
  }
  removeItem(idx) {
    const {phase} = this.props;
    console.log(`fn: ${phase}.removeItem(${JSON.stringify(idx)})`);
    const items = [...st(this, 'items', [])];
    items.splice(idx, 1);
    this.setState({items});
  }
  _handleKeydown(e) {
    if (e.key === 'Enter') this._handleAddItem();
  }
  _handleAddItem() {
    const theInput = document.getElementById('theInput');
    const item = theInput.value;
    theInput.value = '';
    theInput.focus();
    this.addItem(item);
  }
  render() {
    const {phase, parent} = this.props;
    const items = st(this, 'items', []);
    console.log(`render: ${phase}`, items);
    return (<div>
      <ol>
        {items.map((item, idx) => {
          return (
            <li key={idx}>
              {item}
              <button onClick={() => this.removeItem(idx)}>-</button>
            </li>
          );
        })}
      </ol>
      <input id="theInput" onKeyDown={(e) => this._handleKeydown(e)} />
      <button onClick={() => this._handleAddItem()}>+</button>
      <br /><br />
      <button onClick={() => parent.phaseChange('start')}>back to start</button>
    </div>);
  }
}

class Unknown extends React.Component {
  render() {
    console.log('render: unknown');
    return (<p>Unknown phase '{this.props.phase}'</p>);
  }
}

class App extends React.Component {
  componentDidMount() {
    this.setState({phase: 'start'});
  }
  phaseChange(phase) {
    console.log(`fn: App.phaseChange(${JSON.stringify(phase)})`);
    this.setState({phase});
  }
  render() {
    const state = this.state || {};
    const phase = state.phase || 'loading';
    return (
      <div className="App">
        {renderPhase(phase, this)}
      </div>
    );
  }
}

export default App;
