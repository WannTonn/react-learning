/*
 * @Author: WannTonn
 * @Date: 2021-07-03 23:11:00
 * @Description: 
 * @FilePath: /net-music/src/views/List/index.js
 */
import React, { Component, Fragment } from "react"
import ListItem from "./item";
// import { Provider } from "@/context";
import { getMusicList } from "@/api/list";
// import { debounce } from "@/utils/util.js"; 自己搓的debounce ,不能识别this。
import {debounce} from "lodash";
const ContextName = React.createContext('walking in the sun');
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '111',
      list: [{ name: 'aaaa' }, { name: 'the sound of silence' }],
      isShow: false
    }
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleNameChangeDebounce = debounce(this.emitChange, 500 , false);
  }

  componentDidMount() {
    console.log('componentDidMount', '---父组件挂载完成---');
    // this.handleGetSongList();
  }
  componentWillUnmount() {
    // this.handleNameChangeDebounce.cancel();
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate', '---父组件发生改变前执行---');
    return true; // 同意 / 不同意组件更新
  }
  /* componentWillUpdate() {
    console.log('component will update')
  } */
  componentDidUpdate() {
    console.log('--- 父组件 component did update ---');
  }
  componentWillReceiveProps
  render() {
    console.log('render', '---父组件 render ---');
    return (
      <Fragment>
        <ContextName.Provider value={this.state.name}>

          <div>
            <label htmlFor="Name">
              <input type="text" defaultValue={this.state.name} onChange={this.handleNameChange} />
              {/* <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} ref={(input)=>{this.input=input}} /> */}
            </label>
            <div className={`wrapper ${this.state.isShow ? 'show' : 'hide'} ${this.state.list.length > 2 ? 'show' : 'hide'}`}>Don't be evil</div>
            <button onClick={this.handleClick.bind(this)}>add name</button>
            <button onClick={this.handleGetSongList.bind(this)}>Query</button>
            <button onClick={this.handleToggle.bind(this)}>Toggle</button>
            <div ref={(item) => this._item = item}>
              {
                this.state.list.map((e, index) => {
                  return (
                    <ListItem content={e} key={index} index={index} deleteItem={this.handleDelete.bind(this)} />
                  )
                })
              }
            </div>
          </div>
        </ContextName.Provider>
      </Fragment>

    )
  }
  handleNameChange(e) {
    this.handleNameChangeDebounce(e.target.value);
  }
  emitChange(e) {
    console.log(this, 'emitChange');
    this.setState({
      name: e
    }, () => {
      console.log(this.state, '--state--');
    })
  }
  handleClick() {
    this.setState({
      list: [...this.state.list, this.state.name]
    }, () => {
      // 回调函数，在异步操作setState 操作完之后，进行下一步
      console.log(this._item);
    })
  }
  handleDelete(index) {
    console.log(index, 'List.js');
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list
    })
  }
  handleGetSongList() {
    getMusicList(Object.assign({},
      {
        csrf_token: "hlpretag",
        hlposttag: "",
        offset: 0,
        total: true,
        limit: 20,
        type: "1",
        s: this.state.name
      }
    )).then(res => {
      let list = (res.result && res.result.songs) || [];
      this.setState({
        list
      })
    })
  }
  handleToggle() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}
List.contextType = ContextName;
export default List;