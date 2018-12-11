import  React, { Component,Fragment} from 'react'
import Header from 'components/common/header/Header'

import './Home.css'
class Home extends Component {
    constructor(){
      super()
      this.state={
        List:[]
      }
    }
    render() {
      return(
        <Fragment>
            <Header title="图文"></Header>
            <div className="content-list-wrapper">
            {this.state.List.map((value,index)=>{
              return(
                <div className="content-list item-list" key={value.id}>
                <div className="item-text item-picture link-div" data-id="2283">       
                 <p className="item-picture-date">{value.date}</p>        
                   <p className="issue-no">VOL.{value.id}</p>            
                    <a className="div-link" href="http://m.wufazhuce.com/one/2283">      
                      <img alt="" className="lazy_img item-picture-img"src={value.img_url} style={{display: "inline"}}/>              
                    </a>               
                  <p className="picture-author">{value.picture_author}</p>                                    
                  <p className="picture-content">{value.content}</p>       
                   <p className="picture-author">{value.text_authors}</p>          
                </div>
              </div>
              )
            })} 
            </div>
        </Fragment>
      )
    }
    componentDidMount(){
      fetch('/mock/one.json')
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


export default Home
  
