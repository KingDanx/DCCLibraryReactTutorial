import React, {Component} from "react";
import "./App.css";
import TitleBar from "./TitleBar/TitleBar";
import BookViwer from "./BookViewer/BookViewer";
import Footer from "./Footer/Footer";
import BookCreator from "./BookCreator/BookCreator";

class App extends Component{
    constructor(props){
        super(props);
        this.books = [
            {title: "Ready Player One", author: "Ernest Cline"},
            {title: "All the Light We Cannot See", author: "Anthony Doerr"},
            {title: "The First and Last Freedom", author: "Jiddu Krishnamurit"}
        ];
        this.state = {
            bookNumber: 0,
            siteName: "dCC Library",
            year: 2021
        };
    }

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }

        this.setState({
            bookNumber: tempBookNumber
        })
    }

    gotToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0){
            tempBookNumber = this.books.length - 1;
        }
        this.setState({
            bookNumber: tempBookNumber
        })
    }

    createBook = (newBook) => {
        console.log("From the creatBook on App compoent", newBook)
        this.books.push(newBook);
        this.setState({
            bookNumber: this.books.length - 1
        })
    }

    render(){
        return(
            <div className="container-fluid">
                <TitleBar/>
                <BookViwer book={this.books[this.state.bookNumber]} nextBook={this.goToNextBook} previousBook={this.gotToPreviousBook}/>
                <BookCreator createNewBook={this.createBook}/>
                <Footer siteName={this.state.siteName} year={this.state.year}/>
            </div>
        )
    }
}

export default App;