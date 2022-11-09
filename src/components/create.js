import React from "react";
import axios from 'axios';

export class Create extends React.Component {

    constructor()
    {
        //Binding the methods to the correct instance
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.state = {
            title:'',
            cover: '',
            author: ''
        }
    }


    handleSubmit(e)
    {
        e.preventDefault();
        console.log(` ${this.state.title},
        ${this.state.cover}, ${this.state.author}`);


        this.setState = {
            title:'',
            cover: '',
            author: ''
        }

    const newBook = {
        title: this.state.title,
        cover: this.state.cover,
        author: this.state.author
    }

     //Making request to the url localhost:4000 and passing the books that are added into the database
     axios.post('http://localhost:3000/api/books', newBook)
     .then((res)=>{
         console.log(res);
     })
     .catch((err)=>{
         console.log(err);
     });
    }

    onChangeBookTitle(e)
    {
        this.setState({
            title:e.target.value
        })
    }

    onChangeBookCover(e)
    {
        this.setState({
            cover:e.target.value
        })
    }

    onChangeBookAuthor(e)
    {
        this.setState({
            author:e.target.value
        })
    }

    //Form element is called in the render method
    //Allows us to enter an input for the book title, author and cover by calling the onchange events which takes in the values submitted
    //And the handleSubmit event outputs the values onto the console
    render() {
        return (
            <div>
                <h3>Hello from Create Component!</h3>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>
                    <input type="submit" value="Add Book" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}