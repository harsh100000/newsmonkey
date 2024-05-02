import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 12,
        category: 'general'
    }

    PropTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0996edc595c0485b90edfb53fe03f0f5&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
        this.setState({ loading: false })
        document.title = `News Monkey - ${this.props.category}`
    }

    async componentDidMount() {
        this.updateNews()
    }

    handlePrevious = async () => {
        this.setState({ page: this.state.page - 1 })
        this.updateNews()
        this.topFunction();
    }

    handleNext = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updateNews()
        this.topFunction();
    }

    topFunction() {
        document.documentElement.scrollTop = 0;
    }

    render() {
        return (
            <>
                {this.state.loading && <Loader />}
                <div className='container my-3'>
                    <h2>News Monkey - Top headlines from {this.props.category} category</h2>

                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 70) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageURL={element.urlToImage ? element.urlToImage : "https://source.unsplash.com/random/"} newsURL={element.url ? element.url : "https://www.hindustantimes.com/lifestyle/health/10-hydrating-fruits-to-beat-the-heatwave-and-stay-healthy-101712646497100.html"} publishedAt={element.publishedAt} />
                        </div>
                        })}
                    </div>
                    
                    <div className="d-flex justify-content-between">

                        <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevious} type="button">&larr; Previous</button>

                        <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNext} type="button">Next &rarr;</button>

                    </div>
                </div>
            </>
        )
    }
}

export default News 








/*
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 12,
        category: 'general'
    }

    PropTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0996edc595c0485b90edfb53fe03f0f5&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json();
        this.setState({ 
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false
        })
        document.title = `News Monkey - ${this.props.category}`
    }

    handlePrevious = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0996edc595c0485b90edfb53fe03f0f5&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json();
        this.setState({ 
            articles: parsedData.articles, 
            page : this.state.page -1,
            loading: false,
        })
        document.title = `News Monkey - ${this.props.category}`
    }

    handleNext = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0996edc595c0485b90edfb53fe03f0f5&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json();
        this.setState({ 
            articles: parsedData.articles, 
            page : this.state.page +1,
            loading: false,
        })
        document.title = `News Monkey - ${this.props.category}`
    }

    render() {
        return (
            <>
                {this.state.loading && <Loader />}
                <div className='container my-3'>
                    <h2>News Monkey - Top headlines from {this.props.category} category</h2>

                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 70) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageURL={element.urlToImage ? element.urlToImage : "https://source.unsplash.com/random/"} newsURL={element.url ? element.url : "https://www.hindustantimes.com/lifestyle/health/10-hydrating-fruits-to-beat-the-heatwave-and-stay-healthy-101712646497100.html"} publishedAt={element.publishedAt} />
                        </div>
                        })}
                    </div>
                    
                    <div className="d-flex justify-content-between">

                        <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevious} type="button">&larr; Previous</button>

                        <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNext} type="button">Next &rarr;</button>

                    </div>
                </div>
            </>
        )
    }
}

export default News */






/*
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 12,
        category: 'general'
    }

    PropTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        }
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0996edc595c0485b90edfb53fe03f0f5&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        document.title = `News Monkey - ${this.props.category}`
    }


    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0996edc595c0485b90edfb53fe03f0f5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        })
    }

    render() {
        return (
            <>
                <h2 className='text-center' >Top headlines from {this.props.category}</h2>
                { {this.state.loading && <Loader/>} } 
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loader/>}>

                    <div className="container">
                        <div className="row">
                            {!this.state.loading && this.state.articles.map((element) => {
                                return <div className="col-md-4 my-3" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 70) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageURL={element.urlToImage ? element.urlToImage : "https://source.unsplash.com/random/"} newsURL={element.url ? element.url : "https://www.hindustantimes.com/lifestyle/health/10-hydrating-fruits-to-beat-the-heatwave-and-stay-healthy-101712646497100.html"} publishedAt={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>

                </InfiniteScroll>
            </>
        )
    }
}

export default News */



// Harry's Code

/*
import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import Loader from './Loader';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Loader />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Loader/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News */