import Taro, { Component } from '@tarojs/taro'
import { View,Swiper, SwiperItem} from '@tarojs/components'
import './index.less'
import { AtGrid, AtNoticebar ,AtSearchBar} from 'taro-ui'
import '../../asset/images/tyly.png'

export default class Index extends Component {

  handleClick (type) {
    Taro.atMessage({
      'message': '消息通知',
      'type': type,
    })
  }


  config = {
    navigationBarTitleText: '首页'
  };


  onChange(value) {
    this.setState({
      value: value
    })
  }
  onActionClick() {
    console.log('开始搜索')
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <AtSearchBar
          actionName='搜一下'
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onActionClick={this.onActionClick.bind(this)}
        />
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className='demo-text-1'>
              <image src='../../asset/images/tyly.png' />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>3</View>
          </SwiperItem>
        </Swiper>


        <AtNoticebar marquee icon='volume-plus'>
          汇格科技
        </AtNoticebar>
       <view >
         <AtGrid
           hasBorder  columnNum={2} data={
             [
               {
                 iconPath: './asset/images/tyly.png',
                 value: '领取中心'
               },
               {
                 image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                 value: '找折扣'
               },
               {
                 image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                 value: '领会员'
               },
               {
                 image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                 value: '新品首发'
               },
               {
                 image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                 value: '领京豆'
               },
               {
                 image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                 value: '手机馆'
               }
             ]
           }
         />
        </view>
      </View>
     )
  }
}
/**新天一鹿业有限责任公司双十一钜惠，先到先得，数量有限，赠完为止！*/

