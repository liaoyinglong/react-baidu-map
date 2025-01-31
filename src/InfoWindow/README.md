InfoWindow 信息窗口
===

表示地图上包含信息的窗口。

```jsx
import { InfoWindow, useInfoWindow } from '@uiw/react-baidu-map';
```

### 基本用法

<!--DemoStart,bgWhite,codePen,codePen,codeSandbox-->
```jsx
import React, { useState } from 'react';
import { Map, InfoWindow, APILoader } from '@uiw/react-baidu-map';

const Example = () => {
  const [visiable, setVisiable] = useState(true);
  const [ isOpen, setIsOpen ] = useState(true);
  const [ content, setContent ] = useState('上海市 <del>青浦区</del> 徐泾镇盈港东路');

  function infoWindowRef(props) {
    if (props && props.infoWindow) {
      console.log('infoWindow:', props.infoWindow, props.map, props.BMap);
    }
  }
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? '关闭' : '打开'} isOpen={String(isOpen)}</button>
      <button onClick={() => setVisiable(!visiable)}>{visiable ? '隐藏' : '显示'}visiable={String(visiable)}</button>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <Map zoom={13} center={{ lng: 121.460977, lat: 31.227906 }}>
        <InfoWindow
          ref={infoWindowRef}
          visiable={visiable}
          isOpen={isOpen}
          onClose={() => {
            console.log(':onClose');
          }}
          position={{ lng: 121.501365, lat: 31.224942 }}
          content={content}
          title="地址信息一"
        />
      </Map>
    </>
  );
}

const Demo = () => (
  <div style={{ width: '100%', height: '350px' }}>
    <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
      <Example />
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 使用 hooks

`infoWindow`, `setInfoWindow`, `isOpen`, `setIsOpen`

<!--DemoStart,bgWhite,codePen--> 
```jsx
import React, { useState, useEffect } from 'react';
import { Map, InfoWindow, useInfoWindow, APILoader } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef(null);
  const { setContainer, map } = useMap({
    zoom: 13, center: { lng: 121.460977, lat: 31.227906 },
    widget: ['GeolocationControl', 'NavigationControl']
  });

  const [title, setTitle] = useState('地址信息二');
  const position = { lng: 121.501365, lat: 31.224942 };
  const { infoWindow, isOpen, setIsOpen } = useInfoWindow({
    BMap, map, position, enableCloseOnClick: false, isOpen: true,
    content: '上海市 <del>青浦区</del> 徐泾镇盈港东路',
    title,
    onClose: () => {
      console.log('onClose:');
    }
  });
  useEffect(() => {
    if (divElm.current) {
      setContainer(divElm.current);
    }
  });
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? '显示' : '隐藏'}</button>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <div ref={divElm} style={{ height: '100%' }} />
    </>
  )
}

const Demo = () => {
  return (
    <div style={{ width: '100%', height: '350px' }}>
      <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
        <Example />
      </APILoader>
    </div>
  )
};
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| position | **`必填`** 指定的经度和纬度创建一个地理点坐标 | `Point` | - |
| isOpen | 窗口是否打开 | `Point` | - |
| visiable | 覆盖物是否可见。此属性来自继承 Overlay 实例对象。 | `boolean` | - |
| width | 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整 | `number` | `true` |
| height | 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整 | `number` | - |
| maxWidth | 信息窗最大化时的宽度，单位像素。取值范围：220 - 730 | `number` | - |
| offset | 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的 infoWindowOffset 属性值，您可以为信息窗添加偏移量来改变默认位置 | `Size` | - |
| content | 展示文本内容，支持 HTML 内容字符串 | `string` | - |
| maxContent | 信息窗口最大化时所显示内容，支持HTML内容 | `string` | - |
| title | 信息窗标题文字，支持HTML内容 | `string` | - |
| message | 自定义部分的短信内容，可选项。完整的短信内容包括：自定义部分+位置链接，不设置时，显示默认短信内容。短信内容最长为140个字 | `string` | - |
| enableAutoPan | 是否开启信息窗口打开时地图自动移动（默认开启） | `boolean` | - |
| enableCloseOnClick | 是否开启点击地图关闭信息窗口（默认开启） | `boolean` | - |
| enableMaximize | 启用窗口最大化功能。需要设置最大化后信息窗口里的内容，该接口才生效 | `boolean` | - |

### 事件

| 参数 | 说明 | 类型 |
| ----- | ----- | ----- |
| onClose | 信息窗口被关闭时触发此事件 | (event: { type: string, target: any, point: Point }) => void; |
| onOpen | 信息窗口被打开时触发此事件 | (event: { type: string, target: any, point: Point }) => void; |
| onMaximize | 信息窗口最大化后触发此事件 | (event: { type: string, target: any }) => void; |
| onRestore | 信息窗口还原时触发此事件 | (event: { type: string, target: any }) => void; |
| onClickclose | 点击信息窗口的关闭按钮时触发此事件 | (event: { type: string, target: any }) => void; |
