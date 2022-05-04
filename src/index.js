import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header.js';
import Item from './components/Items'

import Accessories from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';

ReactDOM.render(
<div>
  <Header />
  <div className='app__itemsContainer'>
      <Item 
        title='Model 3'
        desc='Order Online for Touchless Delivery'
        descLink=''
        backgroundImg={Model3}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='EXISTING INVENTORY'
        rightBtnLink=''
        twoButtons='true'
        first
      />
      <Item 
        title='Model Y'
        desc='Order Online for Touchless Delivery'
        descLink=''
        backgroundImg={ModelY}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='EXISTING INVENTORY'
        rightBtnLink=''
        twoButtons='true'
        first
      />
      <Item 
        title='Model S'
        desc='Order Online for Touchless Delivery'
        descLink=''
        backgroundImg={ModelS}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='EXISTING INVENTORY'
        rightBtnLink=''
        twoButtons='true'
        first
      />
      <Item 
        title='Model X'
        desc='Order Online for Touchless Delivery'
        descLink=''
        backgroundImg={ModelX}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        first
      />
       <Item 
        title='Solar Panels'
        desc='Lowest Cost Solar Panels in America'
        descLink=''
        backgroundImg={SolarPanels}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        first
      />
       <Item 
        title='Solar Roof'
        desc='Produce Clean Energy From Your Roof'
        descLink=''
        backgroundImg={SolarRoof}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        first
      />
       <Item 
        title='Accessories'
        desc=' '
        descLink=''
        backgroundImg={Accessories}
        leftBtnTxt='Shop Now'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='false'
        first
      />

  </div>
</div>  
, document.getElementById('root'));