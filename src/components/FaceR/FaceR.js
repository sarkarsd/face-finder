import React from 'react';
import 'tachyons';
import './FaceR.css'

const FaceR = ({inputUrl, box}) => {
  return (
    <div className='center pa4'>
        <div className = 'absolute mt2'>
            <img id='inputImage' alt='' src={inputUrl} width='300px' height='auto'/>
            <div className='bounding-box' style={{top:box.top_row, right:box.right_col, bottom:box.bottom_row, left:box.left_col }}></div>
        </div>
    </div>
  );
}

export default FaceR;