import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import './index.less'
import { AtCountDown  ,AtTabBar,AtNoticebar} from 'taro-ui'

export default class Index extends Component {

  constructor () {
    super(...arguments) ;
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }


  config = {
    navigationBarTitleText: '首页'
  };

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <AtNoticebar marquee icon='volume-plus'>
          新天一鹿业有限责任公司双十一钜惠，先到先得，数量有限，赠完为止！
        </AtNoticebar>
       <view display: flex>
         <text>距离活动开始还有</text>
         <AtCountDown
           isCard={2}
           minutes={51}
           seconds={49}
         />
       </view>
      </View>


    )
  }
}

