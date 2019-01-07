import Taro, { Component } from '@tarojs/taro'
import { AtForm, AtInput, AtButton,AtAvatar } from 'taro-ui'
import { View,Picker } from '@tarojs/components'

export default class Discovery extends Component {

  constructor () {
    super(...arguments);
    this.state = {
      userName:'',
      passWords:'',
      dateSel: '2018-04-22'

    }
  }
  userNameChange (userName) {
    console.log("userName:"+userName);
    this.setState({
      userName
    })
  }
  passWordChange (passWords) {
    console.log("passWords:"+passWords);
    this.setState({
      passWords
    })
  }
   onSubmit (event) {
    console.log(event);
    console.log("userName:"+this.state.userName);
    console.log("passWords:"+this.state.passWords);
    console.log("dateSel:"+this.state.dateSel)
   }
   onReset () {
     this.setState({
       userName:'',
       passWords:''
     })
  }

  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  };

  render () {
    return <AtForm
      onSubmit={this.onSubmit.bind(this)}
      onReset={this.onReset.bind(this)}
    >
      <view>
        <AtAvatar circle image='https://jdc.jd.com/img/200' />
        <AtInput
          name='userName'
          title='用户名'
          type='text'
          placeholder='用户名'
          value={this.state.userName}
          onChange={this.userNameChange.bind(this)}
        />
        <AtInput
          name='passWords'
          title='性别'
          type='text'
          placeholder='性别'
          value={this.state.passWords}
          onChange={this.passWordChange.bind(this)}
        />
        <View className='page-section'>
          <View>
            <Picker mode='date' onChange={this.onDateChange}>
              <View className='pic41ker'>
                出生日期：{this.state.dateSel}
              </View>
            </Picker>
          </View>
        </View>
        <AtButton formType='submit'>提交</AtButton>
        <AtButton formType='reset'>重置</AtButton>
      </view>

    </AtForm>
  }
}
