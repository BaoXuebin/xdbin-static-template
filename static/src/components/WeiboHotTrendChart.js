import React, { Component } from 'react'
import { Chart } from '@antv/g2';
import moment from 'moment'

class WeiboHotTrendChart extends Component {

  _data = [{ time: '', hot: 0 }]
  _chart = null

  componentDidMount() {
    this._chart = new Chart({
      container: this.chart,
      autoFit: true,
      height: 360
    });
    this._chart.data(this._data);
    this._chart.scale({
      time: {
        tickCount: 10
      },
      hot: {
        nice: true,
      }
    });
    this._chart.tooltip({
      showMarkers: true
    });
    this._chart.axis('time', {
      label: {
        formatter: text => text
      }
    });

    this._chart.line().position('time*hot');
    this._chart.render();
  }

  componentWillReceiveProps(nextProps) {
    if (this._chart) {
      const data = this.format(nextProps.data)
      if (data) {
        const { max } = this.findMaxMin(data);
        if (max) {
          this._chart.annotation().dataMarker({
            top: true,
            position: [max.time, max.hot],
            text: {
              content: '最高热度：' + max.hot,
            },
            line: {
              length: 30,
            }
          });
        }
      }
      this._chart.changeData(data)
    }
  }

  findMaxMin = (data) => {
    let maxValue = 0;
    let minValue = 0;
    let maxObj = null;
    let minObj = null;

    for (const d of data) {
      if (d.hot > maxValue) {
        maxValue = d.hot;
        maxObj = d;
      }
      if (d.hot < minValue) {
        minValue = d.hot;
        minObj = d;
      }
    }
    return { max: maxObj, min: minObj };
  }

  format = (data) => {
    return data.map((hot) => ({ id: hot.id, time: moment(hot.createTime).format('MM-DD HH:mm'), hot: Number(hot.hotValue) }))
  }

  render() {
    return (
      <div ref={chart => this.chart = chart}></div>
    )
  }
}

export default WeiboHotTrendChart
