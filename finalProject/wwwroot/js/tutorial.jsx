
//import React from 'react'
//import { render } from 'react-dom'
//import { BrowserRouter } from 'react-router-dom'
//import App from "./temp";
//render((
  //  <BrowserRouter>
       
   // </BrowserRouter>
//), document.getElementById('root'));
import  App  from "./temp.jsx"
//alert('ddddddd');
var Comment = React.createClass({


    render: function () {
        return (
            <div>
                <App />

            </div>
        );
    }
});

ReactDOM.render(
    React.createElement(Comment, null),
    document.getElementById('content')
);

//var Comment = React.createClass({


//    render: function () {
//        return (
//            <div className="comment">
//                <h1 className="commentAuthor">
//                    {this.props.author}
//                </h1>

//            </div>
//        );
//    }
//});
////=======================================================
//var CommentList = React.createClass({
//    render: function () {
//        return (
//            <div className="commentList">
//                <Comment author="Daniel Lo Nigro">Hello ReactJS.NET World!</Comment>
//                <Comment author="Pete Hunt ">This is one comment</Comment>
//                <Comment author="Jordan Walke" >This is *another* comment</Comment>
//            </div>
//        );
//    }
//});
////=======================================================
//var CommentForm = React.createClass({
//    render: function () {
//        return (
//            <div className="commentForm">
//                Hello, world! I am a CommentForm.
//      </div>

//        );
//    }
//});
////=======================================================
//var CommentBox = React.createClass({
//    render: function () {
//        return (
//            <div className="commentBox">
//                <h1>Comments</h1>
//                <CommentList />
//                <CommentForm />
//            </div>
//        );
//    }
//});
////===========================================================
//var ex1 = React.createClass({
//    getInitialState: function () {
//        return { value: 'enter text here' };
//    },
//    handleChange(event) {
//        this.setState({ value: event.target.value });
//    },
//    render: function () {
//        return (
//            <div className="CommentInput">
//                <input type="text" value={this.state.value} onChange={this.handleChange} />
//                <input type="text" value={this.state.value} onChange={this.handleChange} />
//                <input type="text" value={this.state.value} onChange={this.handleChange} />
//                <input type="text" value={this.state.value} onChange={this.handleChange} />
//            </div>
//        );
//    }
//});
////===========================================================
//var ex2 = React.createClass({
//    getInitialState: function () {
//        return {
//            valueSec: 0,
//            valueMin: 0,
//        };
//    },
//    handleChangeSec(event) {
//        this.setState({ valueSec: event.target.value });

//    },
//    handleChangeMin(event) {
//        this.setState({ valueSec: (event.target.value) * 60 });

//    },
//    handleChangeH(event) {
//        this.setState({ valueSec: (event.target.value) * 60 * 60 });

//    },
//    render: function () {
//        return (
//            <div className="CommentInput">
//                <input type="text" value={this.state.valueSec} onChange={this.handleChangeSec} />
//                <input type="text" value={this.state.valueSec / 60} onChange={this.handleChangeMin} />
//                <input type="text" value={(this.state.valueSec / 60) / 60} onChange={this.handleChangeH} />


//            </div>
//        );
//    }
//});
////=======================================================
//var ex3 = React.createClass({
//    getInitialState: function () {
//        return {
//            num: parseInt(Math.random() * 100),
//            userNum: 0,
//            help: "",
//        };
//    },
  
//    check(event) {
//        console.log(this.state.userNum + " " + parseInt(this.state.num));
//        this.setState({ userNum: event.target.value});
//    },
//    temp() {
       
//        console.log(this.state.userNum + " " + parseInt(this.state.num));
//        if (this.state.userNum == this.state.num) {
//            this.setState({ help: 'you win' });
            
//        }
//        else if (this.state.userNum > this.state.num)
//            this.setState({ help: 'to high' });
//        else
//            this.setState({ help: 'to low' })

//    },
   
//    render: function () {
//        return (
//            <div className="CommentInput">
//                <input type="text" value={this.state.userNum} onChange={this.check} />
//                <input type="text" value={this.state.help} readOnly />
//                <input type="text" value={this.state.num} readOnly />
               
//                <button onClick={this.temp}>click</button>
//            </div>
//        );
//    }
//});
////===========================================================

////=======================================================
//ReactDOM.render(
//    React.createElement(ex3, null),
//    document.getElementById('content')
//);



