import React, { Component } from 'react'
import Newsitem from './Newsitem'
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { Spinner } from 'react-bootstrap';

export default class News extends Component {
  static defaultProps = {
    category : "science"
  }
// static propTypes = {
//   category: this.PropTypes.string,

// }

  // articles= 
  // [
  //   {
  //     "source":{
  //       "id":"espn-cric-info",
  //     "name":"ESPN Cric Info"},
  //     "author":null,
  //     "title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     "description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     "url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     "publishedAt":"2020-04-27T11:41:47Z",
  //     "content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"},
  //     {"source":
  //     {"id":"espn-cric-info",
  //     "name":"ESPN Cric Info"}
  //     ,"author":null,
  //     "title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg","publishedAt":"2020-03-30T15:26:05Z","content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"}];


constructor(){
  super();
  // console.log("Hello Iam a constructor from News component");
  this.state ={
    articles:  [],
    //loading: false,
    page:1
  }
};

async updateNews(){
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b96d04ef2343467a9dd24e2a8881eb98&page=${this.state.page}&pageSize=${this.props.pageSize}`;
// this.setState({
//   loading :true 
// })
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({articles: parsedData.articles,totalArticles: parsedData.totalResults,
    // loading : false
  })
}

async componentDidMount(){
  // console.log("cdm");
  this.updateNews();
}

handlePrevClick = async () => {
//  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b96d04ef2343467a9dd24e2a8881eb98&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
// this.setState({
//   loading :true
// })
// let data = await fetch(url);
// let parsedData = await data.json();
// console.log(parsedData);
// this.setState({articles: parsedData.articles})
// this.setState({
//   page: this.state.page-1,
//   loading : false
// })
// this.props.pageSize-1
this.setState({
  page :this.state.page-1
})
this.updateNews();

}

handleNextClick = async () => {
  console.log("Next");
  if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

  }
else{ let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b96d04ef2343467a9dd24e2a8881eb98&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
this.setState({
  loading : true
})
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({articles: parsedData.articles})
   this.setState({
  page: this.state.page+1,
 })
}}
  render() {
    return (
      <div style={{paddingTop : "50px"}}className='container my-3'> 
        <h1 className='text-center' style={{paddingBottom: "30px"}}>DailyNews - Top Headlines</h1>
        <div className='row'>
        {/* <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >   */}
        {this.state.articles.map((emt)=> {
          return <div className='col-md-3' key={emt.url}>
          <Newsitem title = {(emt.title)?emt.title.slice(0,44):""} description={emt.description?emt.description.slice(0,88): " "} newsUrl={emt.url} imageUrl={emt.urlToImage} author={emt.author} date={emt.publishedAt} publisher={emt.source.id}/>
          </div>    
          // console.log(emt);
        })} 
  
        </div>

      
        <div className='container d-flex justify-content-between'>
           
<button type="button" disabled={this.state.page<=1} class="btn btn-dark my-10" onClick={this.handlePrevClick}>&larr;Previous</button>
<button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} class="btn btn-dark my-10"  onClick={this.handleNextClick}>	Next&rarr;</button>
        </div>
      </div>
    )
  }
}
