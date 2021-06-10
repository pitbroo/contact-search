import React, { useState } from 'react';
import { List, Image, Checkbox } from 'semantic-ui-react';
import './style/Item.css'

const ItemPosition = ({users}) => {
    const [idList, setIdList] = useState([]);

    function listIdChange(e){
        const element = parseInt(e.target.value);
        if (idList.indexOf(element) == -1) {
            idList.push(element);
            console.log('dodaje '+element);
        }
        else{
            idList.splice((idList.indexOf(element)), 1);
            console.log('usuwam '+element);
        }
        console.clear();
        console.log("List of check IDs");
        console.log(idList);
    }
    return (
        <div>

            <List celled>
            {users.map((user) =>
                <List.Item>
                    <Image avatar size="mini" src={user.avatar} className="avatar" />
                    <List.Content>
                        <List.Header >{user.first_name} {user.last_name}</List.Header>
                        <List.Description as='a'>{user.email} {user.id}</List.Description>
                    </List.Content>
                    <div class="ui checkbox">
                        <input type="checkbox" name="example" onChange={listIdChange} value={user.id}/>
                        <label>Show ID</label>
                    </div>
                </List.Item>
            )} 
            </List>
        </div>
    );
};

export default ItemPosition;