import * as React from "react"
import Muuri from "muuri"

export class MuuriItem extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "block",
          position: "absolute",
          height: "auto",
          zIndex: 1,
        }}
        {...this.props}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

interface MuuriGridPropsType {
  filters: string[]
}

export class MuuriGrid extends React.Component<MuuriGridPropsType> {
  muuri?: any = undefined
  filterButtons: { [s: string]: HTMLAnchorElement } = {}
  static defaultProps = {
    filters: [],
  }
  constructor(props: MuuriGridPropsType) {
    super(props)
  }
  componentDidMount() {
    this.muuri = new Muuri(this.refs.muuri, {
      dragEnabled: true,
    })
    window.addEventListener("scroll", () => {
      this.muuri.refreshItems().layout()
    })
  }
  clickFilterButton(filter: string) {
    Object.values(this.filterButtons).map((element: HTMLAnchorElement) => {
      element.classList.remove("current")
    })
    this.filterButtons[filter].classList.add("current")
    if (this.muuri !== undefined) {
      this.muuri!.filter((item: any) => {
        if (!filter) {
          return true
        }
        const element = item.getElement() as HTMLDivElement
        if (
          element.hasAttribute("muuri-filter") &&
          element.getAttribute("muuri-filter") === filter
        ) {
          return true
        }
        return false
      })
    }
  }
  render() {
    return (
      <div>
        <ul className="works-filter">
          <li>
            {/* eslint-disable-next-line */}
            <a
              ref={element => {
                if (element) this.filterButtons[""] = element
              }}
              onClick={() => this.clickFilterButton("")}
              className="current"
            >
              All
            </a>
          </li>
          {this.props.filters.map(filter => (
            <li>
              {/* eslint-disable-next-line */}
              <a
                ref={element => {
                  if (element) this.filterButtons[filter] = element
                }}
                onClick={() => this.clickFilterButton(filter)}
              >
                {filter}
              </a>
            </li>
          ))}
        </ul>
        <div ref="muuri" style={{ position: "relative" }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default MuuriGrid
