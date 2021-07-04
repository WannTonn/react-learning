/*
 * @Author: WannTonn
 * @Date: 2021-07-04 08:54:31
 * @Description: 
 * @FilePath: /net-music/src/views/List/item.js
 */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// import { Consumer } from "@/context";
const ContextName = React.createContext();

class ListItem extends Component {
  // static ContextName = ContextName
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <Fragment>
        <ContextName.Consumer>
          {
            (name) => (
              // <h3> +++ {name}</h3>
              <div>+++{name}</div>
            )
          }
        </ContextName.Consumer>
        {/* <div>{this.context}</div> */}

        <h3>{this.props.content.name}</h3>
        <button onClick={this.handleClick.bind(this)}>delete</button>
      </Fragment>

    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    // nextProps:变化后的属性; nextState:变化后的状态;
    // console.log(nextProps, nextState);
    return nextProps.content !== this.props.content;
  }
  handleClick() {
    console.log(this.props.index);
    this.props.deleteItem(this.props.index)
  }
}
ListItem.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
export default ListItem;