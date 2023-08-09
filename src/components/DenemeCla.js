import React, { Component } from 'react'



class DenemeCla extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "https://official-joke-api.appspot.com/random_joke")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }


    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <div className="App">
                <h1> Fetch data from an api in react </h1>

                <p>{items.setup}</p>
                <p>Answer: {items.punchline}</p>



            </div>
        );
    }
}

export default DenemeCla