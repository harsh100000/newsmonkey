import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NewsItem extends Component {

    render() {
        let {title, description, imageURL, newsURL, publishedAt} = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={imageURL} style={{width: 300, height:200}} className="card-img-top" alt="news img"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated on {new Date(publishedAt).toDateString()}</small></p>
                            <Link to={newsURL} target='_blank' className="btn btn-sm btn-dark">Read Full Article</Link>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem


// API Key - 0996edc595c0485b90edfb53fe03f0f5