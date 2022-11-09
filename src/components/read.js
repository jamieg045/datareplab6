import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component{

    componentDidMount() {
        //callback function to get our data asynchronously from json
        //Applies a get method and returns the data as a response in json and catches any errors if the data is not found 
        axios.get('http://localhost:3000/api/books')
        .then((response)=>{
            this.setState({
                books: response.data.books
            })
        })
        .catch(function(error) {
            console.log(error);
        });
    }
    
    state = {
        books:[]
    }
    
    render(){
        return(
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}