import React from "react";
import {connect} from "react-redux"

const Search = (props) => (
  <div>
    <input 
    id="search" 
    onChange={(event) =>props.onSearch(event.target.value)}
    type="text"/>
  </div>
)

const Articles = (props)=> (
   <ul>
     {props.articles.filter(
       article => article.title.toLowerCase().includes(props.searchTerm.toLowerCase()))
       .map((article)=>(
       <li key={article.id}>
        <a href={article.url}>{article.title}</a>
       </li>
     ))}
  </ul>

)

function App(props) {
  return (
    <div className="App">
      <h1>REDUX ARTİCLELİST SEARCH APP</h1>
      <p>Your search is {props.searchTerm} </p>
      <Search onSearch={props.onSearch}/>
      <Articles {...props}/>
    </div>
  );
}

const mapStateToProps = state => ({
  articles: state.articlesState.articles,
  searchTerm: state.searchState.searchTerm,
});

const mapDispatchToProps = dispatch => ({
  onSearch: searchTerm => dispatch({ type: 'SEARCH_SET', searchTerm }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

