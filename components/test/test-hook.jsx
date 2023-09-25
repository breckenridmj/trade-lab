import React from "react";
import { createRoot } from "react-dom";
import "style-loader!css-loader!../css/styles.css";
import "style-loader!css-loader!../examples/example-styles.css";

export default function makeLayout(Layout) {
  // Basic layout that mirrors the internals of its child layout by listening to `onLayoutChange`.
  // It does not pass any other props to the Layout.
  class ListeningLayout extends React.Component {
    state = { layout: [] };

    onLayoutChange = (layout) => {
      this.setState({ layout: layout });
    };

    stringifyLayout() {
      return this.state.layout.map((l) => {
        const name = l.i === "__dropping-elem__" ? "drop" : l.i;
        return (
          <div className="layoutItem" key={l.i}>
            <b>{name}</b>
            {`: [${l.x}, ${l.y}, ${l.w}, ${l.h}]`}
          </div>
        );
      });
    }

    render() {
      return (
        <React.StrictMode>
          <div>
            <div className="layoutJSON">
              Displayed as <code>[x, y, w, h]</code>:
              <div className="columns">{this.stringifyLayout()}</div>
            </div>
            <Layout onLayoutChange={this.onLayoutChange} />
          </div>
        </React.StrictMode>
      );
    }
  }

  function run() {
    const contentDiv = document.getElementById("content");
    const gridProps = window.gridProps || {};

    // Use createRoot instead of ReactDOM.render
    createRoot(contentDiv).render(
      <ListeningLayout {...gridProps} />
    );
  }

  if (!document.getElementById("content")) {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }

  return ListeningLayout;
}
