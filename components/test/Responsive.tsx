import React, { PureComponent, ReactNode } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";

interface ResponsiveLocalStorageLayoutProps {
  // Define your props here
}

interface ResponsiveLocalStorageLayoutState {
  layouts: Record<string, any>; // Adjust this type accordingly
}

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const saveToLS = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

class ResponsiveLocalStorageLayout extends PureComponent<
  ResponsiveLocalStorageLayoutProps,
  ResponsiveLocalStorageLayoutState
> {
  constructor(props: ResponsiveLocalStorageLayoutProps) {
    super(props);

    const originalLayouts = getFromLS("layouts") || {};
    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
    };
  }

  static defaultProps: ResponsiveLocalStorageLayoutProps = {
    className: "layout",
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 30,
  };

  resetLayout() {
    this.setState({ layouts: {} });
  }

  onLayoutChange(layout: any, layouts: any) {
    saveToLS("layouts", layouts);
    this.setState({ layouts });
  }

  render(): ReactNode {
    return (
      <div>
        <button onClick={() => this.resetLayout()}>Reset Layout</button>
        <ResponsiveReactGridLayout
          className="layout"
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          layouts={this.state.layouts}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
        >
          {/* Your grid items */}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

function getFromLS(key: string) {
  let ls: Record<string, any> = {};
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      ls = JSON.parse(window.localStorage.getItem("rgl-8") || "{}") || {};
    } catch (e) {
      /* Ignore */
    }
  }
  return ls[key];
}

export default ResponsiveLocalStorageLayout;
