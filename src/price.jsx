import React, {Component} from 'react';

export default class Price extends Component{
    render(){
        return(
            <div className="price">
                <h1 className="head">{this.props.price }</h1>
                <p>{this.props.permonth}</p>
                <p>{this.props.li1}</p>
                <p>{this.props.li2}</p>
                <p>{this.props.li3}</p>
               <botton className="btn">{this.props.btntext}</botton>

                


            </div>
        );
    }
}

