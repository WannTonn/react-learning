import React, { useEffect } from 'react';
import './style.scss';

const Searchlight = () => {
  useEffect(() => {
    let borderLayer = document.querySelector('.border-layer');
    document.querySelector('.calendar').addEventListener('mousemove', function (e) {
      let x = e.pageX;
      let y = e.pageY;
      let bounding = borderLayer.getBoundingClientRect();

      borderLayer.style.webkitMaskPosition = `${x - bounding.x - 80}px ${y - bounding.y - 80}px`;
    })
  }, [])
  return (
   /*  <div style={{ marginTop: 200 }}>
      <div className='gallery-wrapper'>
        <div className="border-layer">

        </div>
        <div className="item">1</div>
      </div>
    </div> */
    <div className="calendar">
    <div className="calendar-header">
      <div className="week-day">一</div>
      <div className="week-day">二</div>
      <div className="week-day">三</div>
      <div className="week-day">四</div>
      <div className="week-day">五</div>
      <div className="week-day">六</div>
      <div className="week-day">日</div>
    </div>
    <div className="calendar-body">
      <div className="grid-container border-layer">
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
      <div className="grid-container number-layer">
        <div className="grid-item"><span>28</span><span>十四</span></div>
        <div className="grid-item"><span>29</span><span>十五</span></div>
        <div className="grid-item"><span>30</span><span>十六</span></div>
        <div className="grid-item"><span>1</span><span>十七</span></div>
        <div className="grid-item"><span>2</span><span>十八</span></div>
        <div className="grid-item"><span>3</span><span>十九</span></div>
        <div className="grid-item"><span>4</span><span>廿十</span></div>
        <div className="grid-item"><span>5</span><span>廿一</span></div>
        <div className="grid-item"><span>6</span><span>廿二</span></div>
        <div className="grid-item"><span>7</span><span>廿三</span></div>
        <div className="grid-item"><span>8</span><span>廿四</span></div>
        <div className="grid-item"><span>9</span><span>廿五</span></div>
        <div className="grid-item"><span>10</span><span>廿六</span></div>
        <div className="grid-item"><span>11</span><span>廿七</span></div>
        <div className="grid-item"><span>12</span><span>廿八</span></div>
        <div className="grid-item"><span>13</span><span>廿九</span></div>
        <div className="grid-item"><span>14</span><span>初一</span></div>
        <div className="grid-item"><span>15</span><span>初二</span></div>
        <div className="grid-item"><span>16</span><span>初三</span></div>
        <div className="grid-item"><span>17</span><span>初四</span></div>
        <div className="grid-item"><span>18</span><span>初五</span></div>
        <div className="grid-item"><span>19</span><span>初六</span></div>
        <div className="grid-item"><span>20</span><span>初七</span></div>
        <div className="grid-item"><span>21</span><span>初八</span></div>
        <div className="grid-item"><span>22</span><span>初九</span></div>
        <div className="grid-item"><span>23</span><span>初十</span></div>
        <div className="grid-item"><span>24</span><span>十一</span></div>
        <div className="grid-item"><span>25</span><span>十二</span></div>
        <div className="grid-item"><span>26</span><span>十三</span></div>
        <div className="grid-item"><span>27</span><span>十四</span></div>
        <div className="grid-item"><span>28</span><span>十五</span></div>
        <div className="grid-item"><span>29</span><span>十六</span></div>
        <div className="grid-item"><span>30</span><span>十七</span></div>
        <div className="grid-item"><span>1</span><span>十八</span></div>
        <div className="grid-item"><span>2</span><span>十九</span></div>
    </div>
    </div>
  </div>
  )
}

export default Searchlight;