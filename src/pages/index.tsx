import * as React from 'react';
import Map from './components/Map';
import Ranking from './components/Ranking';
import Trend from './components/Trend';
import styles from './index.css';

export default function () {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.header_title}>北部湾城市群综合科技服务监控大屏</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={`${styles.col} ${styles.col_l}`}>
            <div className={`${styles.xpanel_wrapper} ${styles.xpanel_wrapper_60}`}>
              <div className={`${styles.xpanel} ${styles.xpanel_l_t}`}>
                <div className={styles.title}>科技服务业产值排行Top10</div>
                <div className={styles.chart_wrapper}>
                  <div className={styles.chart_div}>
                    {/* <Ranking /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.xpanel_wrapper} ${styles.xpanel_wrapper_40}`}>
              <div className={`${styles.xpanel} ${styles.xpanel_l_b}`}>
                <div className={styles.title}>实时热词</div>
              </div>
            </div>
          </div>
          <div className={`${styles.col} ${styles.col_c}`}>
            <div className={`${styles.xpanel_wrapper} ${styles.xpanel_wrapper_75}`}>
              <div className={`${styles.xpanel} ${styles.no_bg}`}>
                <Map />
              </div>
            </div>
            <div className={`${styles.xpanel_wrapper} ${styles.xpanel_wrapper_25}`}>
              <div className={`${styles.xpanel} ${styles.xpanel_c_b}`}>
                <div className={`${styles.title} ${styles.title_long}`}>科技服务业产值排名</div>
                <div className={styles.chart_wrapper}>
                  <div className={styles.chart_div}>
                    {/* <Ranking /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.col} ${styles.col_r}`}>
            <div className={`${styles.xpanel_wrapper} ${styles.xpanel_wrapper_45}`}>
              <div className={`${styles.xpanel} ${styles.xpanel_r_t}`}>
                <div className={styles.title}>关注趋势</div>
                <div className={styles.chart_wrapper}>
                  <div className={styles.chart_div}>
                    {/* <Trend /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.xpanel_wrapper} ${styles.xpanel_wrapper_25}`}>
              <div className={`${styles.xpanel} ${styles.xpanel_r_m}`}>
                <div className={styles.title}>实时数据</div>
              </div>
            </div>
            <div className={`${styles.xpanel_wrapper} ${styles.xpanel_wrapper_30}`}>
              <div className={`${styles.xpanel} ${styles.xpanel_r_b}`}>
                <div className={styles.title}>实时数据</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}