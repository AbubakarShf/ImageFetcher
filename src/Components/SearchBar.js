import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    state={term:''}
    defaultPreventorFunc=(event)=>{
       event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render(){
        return(
           <div className="ui segment">
                <form onSubmit={this.defaultPreventorFunc} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={e=>this.setState({term:e.target.value})}/>
                    </div>
                </form>
           </div>
        );
    };
}

export default SearchBar;