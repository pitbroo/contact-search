import React from 'react';

class Filter{
    filterUsers(e) {
        const text = e.currentTarget.value;
        const filteredUsers = this.getFilteredUsersForText(text)
        this.setState({
          filteredUsers
        })
      }
      
      getFilteredUsersForText(text) {
        return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
      }
}

export default Filter;