import React, { Component } from 'react'

export default class Todo extends Component {
    //state
    constructor(props) {
        super(props)
        this.state = {
            valeurajoute: "",
            listitem: [
                {
                    text: "ahmed",
                    iscomplete: false
                },
                {
                    text: "morad",
                    iscomplete: false
                },
                {
                    text: "marwen",
                    iscomplete: false
                }
            ]
        }
    }
    //hander
    // target the value input
    changerhande = (e) => {

        this.setState(
            { valeurajoute: e.target.value }

        )

    }

    // ajouter val target in tab
    submithande = (e) => {
        e.preventDefault()
        if (this.state.valeurajoute) {
            this.setState({
                listitem: [...this.state.listitem, { text: this.state.valeurajoute, iscomplete: false }],
                valeurajoute: ""
            })
        }
        else {
            alert("hhhhhhhhhoooope")
        }



    }
    // delete from tab with filter methode()
    handleDelete = i => {
        // **** FILTER METHOD
        this.setState({
            listitem: this.state.listitem.filter((el, index) => index !== i)
        })


    }

    //faserha
    handleDone = i => {
        this.setState({
            listitem: this.state.listitem.map((el, index) =>
                index === i ? { ...el, iscomplete: !el.iscomplete } : el
            )
        });


    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.submithande}>
                    <input
                        style={{ width: "200px" }}
                        placeholder="Additems"
                        type="text"
                        value={this.state.valeurajoute}
                        onChange={this.changerhande} />
                    <button className="btn btn-primary">add</button>
                </form>

                <ul className="list-group list-group-flush " >

                    {this.state.listitem.map((el, i) => (

                        <div className="d-flex justify-content-center" key={i}>

                            <button type="button" className="btn btn-success" onClick={() => this.handleDone(i)}>
                                {el.iscomplete ? "undo" : "do"}


                            </button>

                            <button type="button" className="btn btn-danger"
                                onClick={() => this.handleDelete(i)}>
                                delete</button>

                            <li className="list-group-item" style={{
                                display: "inline",
                                textDecoration: el.iscomplete ? "line-through" : "none"
                            }}>
                                {el.text}
                            </li>
                        </div>


                    ))}
                </ul>

            </div>
        )
    }
}



