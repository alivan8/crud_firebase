import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import firebase from "./Firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("coments");
    this.unsubscribe = null;
    this.state = {
      coments: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    const coments = [];
    querySnapshot.forEach(doc => {
      const { title, description, author } = doc.data();
      coments.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author
      });
    });
    this.setState({
      coments
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">
                  <h3 class="panel-title">
                         COMENT LIST
                   </h3>
            </div>
        
        <div class="panel-body">
            <h4><Link to="/create">Add Coment</Link></h4>
                <table class="table table-stripe">
                  <thead>
                      <tr>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Author</th>
                      </tr>
                  </thead>
                    <tbody>
                        {this.state.coments.map(Coment =>
                            <tr>

                              <td><Link to={`/show/${Coment.key}`}>{Coment.title}</Link></td>
                              <td>{Coment.description}</td>
                              <td>{Coment.author}</td>
                            </tr>
                        )}
                  </tbody>
                </table>
        </div>
    </div>
  </div>
);
}
}
export default App;








