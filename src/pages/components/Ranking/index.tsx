import * as React from 'react';
import { Chart } from '@antv/g2';

class Ranking extends React.Component {

    public componentWillUnmount() {
    }

    public async componentDidMount() {
        const response = await fetch(
            '/api/data',
        );
        const { ranking } = await response.json();

        const chart = new Chart({
            container: 'container',
            autoFit: true,
            height: 500,
        });
        chart.data(ranking);
        chart.scale({
            value: {
                max: 100000,
                min: 0,
                alias: '产值（万）',
            },
        });
        chart.axis('type', {
            title: null,
            tickLine: null,
            line: null,
        });

        chart.axis('value', {
            label: null,
            title: {
                offset: 30,
                style: {
                    fontSize: 20,
                    fontWeight: 600,
                },
            },
        });
        chart.legend(false);
        chart.coordinate().transpose();
        chart
            .interval()
            .position('type*value')
            .size(26)
            .label('value', {
                style: {
                    fill: '#8d8d8d',
                },
                offset: 10,
            });
        chart.interaction('element-active');
        chart.render();
    }

    public render() {
        return (
            <div
                id="container"
                style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: 'absolute',
                }}
            />
        );
    }
}

export default Ranking;