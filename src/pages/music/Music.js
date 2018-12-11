import React, { Component,Fragment } from 'react';
import { withRouter} from 'react-router-dom'
import Header from 'components/common/header/Header'

import './Music.css'

class Music extends Component {
    constructor(){
      super()
      this.state={
          List:[],   
      }
  }
  render() {
      
    return (
        <Fragment>
           <Header title="音乐"></Header>
        <div className="content-list-wrapper">
          <div className="content-list reading-list">
          {this.state.List.map((value,index)=>{
            return(
              <div className="item-text link-div" key={value.id}>        
               <p className="text-tag">- 音乐 -</p>            
               <p className="text-title ellipsis-row2"><a className="div-link" href="##">{value.title}</a></p>   
               <p className="text-author ellipsis-row1">文/{value.author.user_name}</p>   
                 <div className="text-cover-img">
                 <img className="lazy_img resize_img img_center_y"  src={value.img_url} alt="11" /></div>  
                 <p className="text-music-author ellipsis-row1">{value.music_name} · {value.audio_author} | {value.audio_album}</p>                   
                 <p className="text-content-short ellipsis-row2">{value.forward}</p>                  
                   <p className="date">{value.date}</p>               
               </div>
            )
               
          })}
          </div>
        </div>     
        </Fragment>   
    );
  }
  componentDidMount(){
      fetch('/mock/music.json')
      .then(r => {
          return r.json()
      })
      .then(result =>{     
          console.log(result.data)    
          this.setState({
              List:result.data
          }) 
      })   
  }
}

export default withRouter(Music)
