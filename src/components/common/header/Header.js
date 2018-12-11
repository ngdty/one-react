import  React, { Component} from 'react'
import { withRouter,Link } from 'react-router-dom'
import './Header.css'

//import Left from 'components/common/left/Left'
class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            defaultHeight:true,         
        }
        this.clicksidebar=this.clicksidebar.bind(this)
        this.clickclose=this.clickclose.bind(this)
        
    }
    render() {
        let styleObj ={         
            display: this.state.defaultHeight ? 'none' : 'block'
        }
      return(
            <div className="header">
                <div id="left-panel" className="ui-panel" 
                style={styleObj}>
                <div className="ui-panel-inner">
                <ul className="ui-listview">
                    <li className="ui-first-child">
                        <Link to="/home"  className="ui-btn">
                            <span className="list-text">图文</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/article"  className="ui-btn"> 
                            <span className="list-text">阅读</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/music"  className="ui-btn">
                            <span className="list-text">音乐</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/movie"  className="ui-btn">
                            <span className="list-text">影视</span>
                        </Link>
                    </li>
                    <li><a href="http://m.wufazhuce.com/apps" data-ajax="false" className="ui-btn"> 
                        <span className="list-text">App下载</span></a>
                    </li>
                    <li className="ui-last-child"><p className="ui-btn"> 
                        <span onClick={this.clickclose} className="list-text">关闭</span></p>
                    </li>
                </ul>
                </div>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p className="ui-link">
                            <i className="one-icon one-icon-menu menu"
                            onClick={this.clicksidebar}>其他</i>
                            </p>
                        </td>
                        <td align="center">
                            <span className="text-header text">一个{this.props.title}</span>
                        </td>
                        <td>
                        <a href='##' id="header_search_btn_angOne_index" className="ui-link">
                            <i className="one-icon one-icon-search search"></i>
                        </a>
                        </td>
                    </tr>
                </tbody>
            </table> 
        </div>
      )
      
    }
    clicksidebar(){
        this.setState({
            defaultHeight: false
        })
        
    }
    clickclose(){
        this.setState({
            defaultHeight: true
        })
    }
   
}

export default withRouter(Header)