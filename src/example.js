import React, {
  Component
} from 'react';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: true,
      others: 'not really', // it won't be change when click event is to be trigger.
    };
  }
  render() {
    console.log(this.state);
    return (
      <div className="App" style={this.props.style}>
        {/* for example */}
        <p>
          <b onClick={this.handleClick}>{this.state.liked === true ? 'True' : 'False'}</b>!
        </p>
        <div>{this.props.arr}</div>
      </div>
    );
  }
  handleClick = (evtproxy, event) => {
    // 此处需要一个箭头函数作为事件的回调函数，同时可以取到组件this的值
    // event 是个普通事件参数，不一定有值，可能为undefined
    // evtproxy是个代理对象，可以取到SyntheticMouseEvent下的值
    console.log(this, evtproxy, event);
    this.setState({
      liked: !this.state.liked
    });
  }
}

class WebSite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasNameComponent: true,
      btnText: '删除Name组件'
    };
  }
  render() {
    return (
      <div>
        {/** use a prop of state to control dom display. */}
        {this.state.hasNameComponent ? <Name ref="baidu" name={this.props.name} /> : ''}
        <Link ref="baiduLink" site={this.props.site} />
        <p>
          <button onClick={this.handleClick} >{this.state.btnText}</button>
        </p>
      </div>
    );
  }
  handleClick = (p) => {
    console.log('change this prop of hasNameComponent to toggle Name component');
    console.log(this.refs);
    this.setState({
      hasNameComponent: !this.state.hasNameComponent,
      // 注意，下面代码将触发 constructor-->componentDidMount 周期，因为Name组件重新加入到真实DOM
      btnText: !this.state.hasNameComponent ? '删除Name组件' : '添加Name组件'
    });
  }
}
/**
 * 在es6版本中,对一些语法进行了更改,更改的内容中都有以下属性的修改:
 * 将propTypes、getDefaultTypes等类属性移到类外面定义,
 * 由于ES6类中只允许定义方法并不允许定义类属性，所以像原先会在 createClass 中定义的 
 * propTypes 、 getDefaultTypes 、 displayName 还有 contextTypes 
 * 等组件属性都要放到类外面来赋值。
 */
WebSite.defaultProps = {
  name: '百度',
  site: 'www.baidu.com'
};
WebSite.propTypes = {
  // 11 -- Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `WebSite`, expected `string`.
  name: React.PropTypes.string.isRequired,
};

/**
 * Name Component will show the react life cycle.
 */
class Name extends Component {
  constructor(props) {
    super(props);
    console.log('Component is initializing!');
  }
  render() {
    console.log('Component Is Rendering!');
    return (
      <h1>{this.props.name}</h1>
    );
  }
  componentWillMount() {
    console.log('Component WILL MOUNT!')
  }
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }
  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECEIVE PROPS!')
  }
  shouldComponentUpdate(newProps, newState) {
    console.log('Component Should Update!')
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }
}

class Link extends Component {
  constructor(props) {
    super(props); // props === this.props => true
    this.target = '_blank';
    // this.props.target = '_blank'; // Uncaught TypeError: Can't add property target, object is not extensible
  }
  render() {
    return (
      <a href={this.props.site} target={this.props.target || this.target} >
        {this.props.site}
      </a>
    );
  }
}

// 模拟angular的双向数据绑定
class BidirectionalDatabinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'hello, React!',
    }
  }
  handleChange = (evtproxyp, event) => {
    console.log('Databinding:\n', evtproxyp, evtproxyp.target.value, event);  // 此时event为undefined
    this.setState({
      value: evtproxyp.target.value
    });
  }
  render() {
    let value = this.state.value;
    let disabled = this.props.disabled;
    let readOnly = this.props.readOnly;
    console.log(this.props);
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} /> 
        <h4>{value}</h4>
        <input type="text" disabled={disabled}/>
        <input type="text" readOnly={readOnly}/>
      </div>
    );
  }
}

export {
  Link,
  Name,
  Example,
  WebSite,
  BidirectionalDatabinding,
}