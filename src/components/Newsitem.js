import React, { Component } from 'react'

export default class Newsitem extends Component {
 
  render() {
      let {title,description,imageUrl,newsUrl,author,date,publisher} = this.props;
    return (
      <div>
        <div className="card">
        <span style={{left: '30%', zIndex: '1'}} class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
     {publisher?publisher:"unknown"}
  </span>
  <img src= {imageUrl?imageUrl:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p class="card-text"><small class="text-body-secondary">by {author?author:""} on {new Date(date).toLocaleTimeString()}</small></p>
    <a rel="noreferrer" href={newsUrl}  target='_blank' className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

