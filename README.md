</p>

表面上似乎是个弹幕姬  
实际上是youtube chatbox的高仿(指样式表直接照搬)实现，不过把内容换成了b站直播弹幕2333  
**所以在OBS中对于youtube livechat的自定义CSS代码可以直接copy**  
自豪地使用好文明Angular 7  
感谢logo提供者:[@Afanyiyu](https://github.com/Afanyiyu)
														————3Shain

<span><strong>改弹幕姬是基于3Shian佬的弹幕姬Bilichat魔改而来，新增了日语显示功能，可供各主播B限时使用</strong></span>
<span>具体使用方式请参考<a href="https://github.com/3Shain/BiliChat">3Shain</a>佬的原版程序</span>

## 🍥URL参数  
在url后面添加query参数可以自定义效果  
* `loadAvatar` true/false 控制是否从api获取头像  默认true
    >这个设置不等于不显示头像，而是只显示默认头像。若需要去掉头像可以在css中设置。  
* `levelFilter` 一个数字 用户等级(UL)低于该值的弹幕不会被显示  默认0
* `hideGiftDanmaku` true/false 控制是否隐藏礼物抽奖弹幕(节奏风暴/摩天楼/小电视的效果) 默认true  
* `showGift` true/false 控制是否展示礼物信息 默认true  
    > 价值与颜色对应信息如果需要自定义，请参考本地配置文件。
* `wordFilter` 以半角逗号分隔的字符串 所有包含关键词的弹幕都会被屏蔽  
    > 有一部分词语已经被默认屏蔽，若需解除请自行修改。
* `giftOnly` 只显示礼物信息 默认false
* `groupSimilar` 堆叠同类弹幕 默认true
* `pure` 是否忽略api服务器 设置为true时只显示默认头像 并且不支持短房间号 默认false
* `blackList` 以半角逗号分隔的数字UID字符串,对应用户的弹幕将会被屏蔽  
* `minGiftValue` 最低显示礼物价值,默认20
* `silverGiftRatio` 银瓜子折算金瓜子价值比例,默认0,即不显示任何银瓜子礼物
* `showJP` true/false 仅仅显示日文  默认false

例子: https://your.domain/alpha/114514?showJP=true&loadAvatar=false&levelFilter=20&showGift=false&wordFilter=屏蔽词1,屏蔽词2

