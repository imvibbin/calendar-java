import React from "react";
/* import '../../../node_modules/react-grid-layout/css/styles.css' 
import '../../../node_modules/react-resizable/css/styles.css' */

import './TimeCells.scss'
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

  class NoCollisionLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    items: 12,
    cols: 7,
    rowHeight: 10,
    onLayoutChange: function() {},
    // This turns off compaction so you can place items wherever.
    verticalCompact: false,
    // This turns off rearrangement so items will not be pushed arround.
    preventCollision: true
  };

  constructor(props) {
    super(props);

    const layout = [{ i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }];
    this.state = { layout };
  }

  generateDOM() {
    return _.map(_.range(this.props.items), function(i) {
      return (
        <div key={i}>
          <span className="text">{i}</span>
        </div>
      );
    });
  }

  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function(item, i) {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString()
      };
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

export default NoCollisionLayout;