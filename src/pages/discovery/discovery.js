import Taro, { Component } from '@tarojs/taro'
import './discovery.less'
import { AtForm, AtInput, AtButton } from 'taro-ui'


export default class Discovery extends Component {

  constructor () {
    super(...arguments);
    this.state = {
      userName:'',
      passWords:''

    }
  }
  handleChange (userName) {
    console.log("userName:"+userName);
    this.setState({
     userName
    })
  }
   onSubmit (event) {
    console.log(event);
    console.log("userName:"+this.state.userName);
    console.log("passWords:"+this.state.passWords)
  }
   onReset (event) {
    console.log(event)
  }
  render () {
    return (
      <AtForm
        onSubmit={this.onSubmit.bind(this)}
        onReset={this.onReset.bind(this)}
      >
        <AtInput
          name='userName'
          title='用户名'
          type='text'
          placeholder='用户名'
          value={this.state.userName}
          // onChange={this.handleChange.bind(this)}
        />
        <AtInput
          name='passWords'
          title='性别'
          type='text'
          placeholder='性别'
          value={this.state.passWords}
          // onChange={this.handleChange.bind(this)}
        />
        <AtButton formType='submit'>提交</AtButton>
        <AtButton formType='reset'>重置</AtButton>
      </AtForm>
    )
  }
}
