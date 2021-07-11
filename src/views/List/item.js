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
    console.log('render', '---子组件render ---');
    
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

        <span>{this.props.content.name}</span>
        <button onClick={this.handleClick}>delete</button>
      </Fragment>

    );
  }
  componentDidMount() {
    console.log('componentDidMount', '---子组件挂载完成 ---');
  }
  shouldComponentUpdate(nextProps, nextState) {
    // nextProps:变化后的属性; nextState:变化后的状态;
    // console.log(nextProps, nextState);
    console.log('shouldComponentUpdate', '---子组件shouldComponentUpdate ---');
    return nextProps.content !== this.props.content;
  }
  /* componentDidUpdate(prevProps) {
    console.log(prevProps, 'item watch props');
  } */
  
  handleClick() {
    console.log(this.props.index);
    this.props.deleteItem(this.props.index)
  }
}
ListItem.propTypes = {
  name: PropTypes.string.isRequired, // 属性为必填
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
ListItem.defaultProps = {
  name: "ASD"
}
export default ListItem;