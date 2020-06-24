import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation.js' 
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js' 
import FaceR from './components/FaceR/FaceR.js' 
import Rank from './components/Rank/Rank.js' 
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
 apiKey: 'e30d678bd54a4a2d81c0c83b05af4753'
});

const particlesOption = {
  particles: {
    number: {
      value: 150,
      density: {
        enable : true,
        value_area : 900
      }
    }               
  }
}
class App extends Component{
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box : {}
    }
  }

calculateBoundingBox = (data) =>{
  const facebound = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputImage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    left_col : facebound.left_col * width,
    top_row : facebound.top_row * height ,
    right_col : width -(facebound.right_col * width),
    bottom_row : height - (facebound.bottom_row * height)
  }
}

displayFaceBox = (box) => {
  console.log(box);
  this.setState({box: box});
}

onInputChange = (event) =>{
  this.setState({input:event.target.value});
}

onSubmit = (event) =>{
  this.setState({imageUrl: this.state.input});
  app.models.predict("a403429f2ddf4b49b307e318f00e528b",
    this.state.input)
    .then(response => this.calculateBoundingBox(response))
    .then(box => this.displayFaceBox(box))
    .catch(err=>console.log(err))
}

  render(){
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOption}/>
        <Navigation />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <FaceR inputUrl={this.state.imageUrl} box={this.state.box} />
      </div>
    );
  }
  
}

export default App;
