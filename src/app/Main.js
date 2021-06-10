import ItemPosition from './ItemPosition';
import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import './style/Main.css';
import { Input, Loader, Icon } from 'semantic-ui-react';
import { sortBy } from './utils/Sort.js';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      filtredUsers: [],
      isLoaded: false,
      error: null
    }

    this.filtredUsers = this.filtredUsers.bind(this);
  }

  componentDidMount = () => {
    fetch('http://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result.sort(sortBy("last_name"))
          });
          this.setState({
            filtredUsers: this.state.users
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  filtredUsers(e) {
    const text = e.currentTarget.value;
    const filtredList = this.getFiltredUsersForText(text);
    this.setState({
      filtredUsers: filtredList
    })
  }
  getFiltredUsersForText(text) {
    return this.state.users.filter((user) => (user.last_name + " " + user.first_name).toLowerCase().includes(text.toLowerCase()))
  }

  render() {
    return (
      <main>
        <Input size='mini' icon='search' placeholder='Search...' className="inputSearch" onInput={this.filtredUsers} />
        <div className="contactsConteiner">
          {(this.state.users.length < 1)  ?
            <div className="loader">
              <Loader active inline='centered' size='huge' />
              LOADING...
            </div>
            :     (this.state.filtredUsers.length < 1 ?
                    <div className="loader">
                     <Icon name='meh outline' size='huge' />
                    No Results...
                  </div>
                  :
                  <ItemPosition users={this.state.filtredUsers} />
                  )
          }
        </div>
      </main>
    );
  }
}
export default Main;