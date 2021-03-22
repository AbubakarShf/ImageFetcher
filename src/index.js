import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/SearchBar';
import unsplashAPI from '../src/API/unsplash'
import ImageList from './Components/ImageList';
import './index.css';

class App extends React.Component{
        state={images:[]}

    onSearchSubmit=async term=>{
        const response= await unsplashAPI.get('/search/photos',{
            params:{
                query:term
            }});
        this.setState({images:response.data.results});
        };
    
    render(){
        return(
        <div className="ui container">
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
        </div>
    )
};
};

ReactDOM.render(<App/>,document.querySelector('#root'));