import React, { Component } from 'react';
import { Runtime, Define } from '@observablehq/runtime';
import { Inspector } from '@observablehq/inspector';
import __import__ from './import-module';
import './style.css';

class Notebook extends Component<any> {
  targetRef = React.createRef<HTMLDivElement>();
  targetStyle = { height: '300px' };

  componentDidMount() {
    const notebookId = this.props.notebookId;
    const cellName = this.props.cellName;
    const height = this.props.height || 100;

    const url = `https://api.observablehq.com/${notebookId}.js?v=3`;

    this.targetStyle = {
      height: `${height}px`,
    };

    __import__(url).then((exports: { default: Define }) => {
      let inspector;

      if (cellName) {
        // just the specified cell
        inspector = (name: string) => {
          if (name === cellName) {
            return new Inspector(this.targetRef.current);
          }
        };
      } else {
        // render the entire module into the target
        inspector = Inspector.into(this.targetRef.current);
      }

      // add the module
      new Runtime().module(exports.default, inspector);
    });
  }

  render() {
    return (
      <div
        className="observablehq"
        ref={this.targetRef}
        style={this.targetStyle}
      ></div>
    );
  }
}

export default Notebook;
