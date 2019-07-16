import * as React from "react"
import FlipMove from "react-flip-move"

interface FlipItemPropsType {
  filterKey: string
}
export class FlipItem extends React.Component<FlipItemPropsType> {
  static defaultProps = {
    filterKey: "",
  }
  render() {
    return <li>{this.props.children}</li>
  }
}

interface FlipGridPropsType {
  filters: string[]
  items: FlipItem[]
}
interface FlipGridStateType {
  currentFilter: string
}

export class FlipGrid extends React.Component<
  FlipGridPropsType,
  FlipGridStateType
> {
  filterButtons: { [s: string]: HTMLAnchorElement } = {}
  static defaultProps = {
    filters: [],
    items: [],
  }
  constructor(props: any) {
    super(props)
    this.state = {
      currentFilter: "",
    }
  }
  render() {
    return (
      <>
        <ul className="works-filter">
          <li>
            {/* eslint-disable-next-line */}
            <a
              onClick={() => this.setState({ currentFilter: "" })}
              className={this.state.currentFilter === "" ? "current" : ""}
            >
              All
            </a>
          </li>
          {this.props.filters.map(filter => (
            <li>
              {/* eslint-disable-next-line */}
              <a
                onClick={() => this.setState({ currentFilter: filter })}
                className={this.state.currentFilter === filter ? "current" : ""}
              >
                {filter}
              </a>
            </li>
          ))}
        </ul>
        <div className="works-grid">
          <FlipMove>
            {this.props.items.map(item =>
              this.state.currentFilter === "" ||
              item.props.filterKey === this.state.currentFilter
                ? item
                : undefined
            )}
          </FlipMove>
        </div>
      </>
    )
  }
}

export default FlipGrid
