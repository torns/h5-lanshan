# 轮播组件

# 基础式
 <ls-swiper :list="list" imgKey="imgUrl" @click="clickItem($event)" />

# 卡片式
 <ls-swiper :list="list" imgKey="imgUrl" :imgWidth="300" :imgRadius="true" :crown="true" />

# 链式
<ls-swiper :list="list" imgKey="imgUrl" :imgWidth="300" :spaceBetween="10" :center="false" />

# props
参数名           |  说明                                              | 类型        |   默认值
-----------------|-------------------------------------------------- -|-------------|------------
list             |  轮播数据                                          | Array       |  必输
imgKey           |  轮播数据key                                       | String      |  必输
autoplay         |  是否自动播放                                      | Boolean     |  false
speed            |  播放速度                                          | Number      |  1000
loop             |  是否循环                                          | Boolean     |  true
autoplay         |  是否自动播放                                      | Boolean     |  false
pagination       |  是否显示轮播点                                    | Boolean     |  false
imgWidth         |  图片宽度                                          | Number      |  375 (单位:px,设计图建议以375px为准)
imgHeight        |  图片高度                                          | Number      |  200 (单位:px,设计图建议以375px为准)
spaceBetween     |  图片间距                                          | Number      |  0   (单位:px,设计图建议以375px为准)
imgRadius        |  图片圆角                                          | Boolean     |  false
center           |  是否居中,默认true居中,false居左                    | Boolean     |  true
crown            |  皇冠特效 (中间突出，两边缩放特效)                  | Boolean     |  false
@clickItem       |  点击事件                                          | Function     |  