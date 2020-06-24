import React from 'react';
import 'tachyons';

const ImageLinkForm = ({onInputChange, onSubmit}) => {
  return (
    <div>
    	<p className='f3'>
    		{'This App will help you detect faces. Give it a try'}
    	</p>
    	<div className='center'>
    		<div className='w-80 pa5 br4 shadow-3'>
	    		<input className='f4 pa2 w-60' type='text' onChange={onInputChange} />
	    		<button 
	    		className='w-25 grow f4 link ph3 pv2 dib white bg-light-purple'
	    		onClick={onSubmit}
	    		>Detect</button>
    		</div>
    	</div>
    </div>
  );
}

export default ImageLinkForm;