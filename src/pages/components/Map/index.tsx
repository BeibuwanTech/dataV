import * as React from 'react';
import { Scene } from '@antv/l7';
import { CityLayer } from '@antv/l7-district';
import { Mapbox } from '@antv/l7-maps';

class Map extends React.Component {
  public state = {
  };
  // @ts-ignore
  private scene: Scene;
  // @ts-ignore
  private cityLayer: CityLayer;

  public componentWillUnmount() {
    this.scene.destroy();
  }

  public async componentDidMount() {
    const response = await fetch(
      '/api/data',
    );
    const { data, adcode } = await response.json();
    const scene = new Scene({
      id: 'map',
      map: new Mapbox({
        center: [116.2825, 39.9],
        pitch: 0,
        style: 'blank',
        zoom: 3,
        minZoom: 3,
        maxZoom: 10,
      }),
    });
    scene.on('loaded', () => {
      this.cityLayer = new CityLayer(scene, {
        data,
        joinBy: ['adcode', 'code'],
        adcode: adcode,
        depth: 2,
        autoFit: true,
        label: {
          field: 'NAME_CHN',
          size: 16,
          textAllowOverlap: false,
        },
        fill: {
          color: {
            field: 'NAME_CHN',
            values: [
              '#feedde',
              '#fdd0a2',
              '#fdae6b',
              '#fd8d3c',
              '#e6550d',
              '#a63603',
            ],
          },
        },
        bubble: {
          enable: true,
          size: {
            field: 'pop',
            values: [20, 50]
          }
        },
        popup: {
          enable: true,
          Html: (props: any) => {
            return `<span style="font-size: 18">科技服务业产值： ${props.pop} 万元</span>`;
          },
        },
      });
      this.cityLayer.on('click', (ev) => { console.log(ev) }); // 鼠标左键点击图层事件
    });
    this.scene = scene;
  }

  public render() {
    return (
      <div
        id="map"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          margin: 'auto'
        }}
      />
    );
  }
}

export default Map;