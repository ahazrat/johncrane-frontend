import React from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

class Dashboard extends React.Component {
    state = {
        searchText: 'Search Text'
    }
    handleSubmit(e) {
        const searchText = document.getElementById('searchText').value
        console.log(searchText)
    }
    render() {
        return (
            <div>
                <br /><br />
                <Input id='searchText' onChange={e=>this.setState({ searchText: e.target.value })} /><br /><br />
                {this.state.searchText}<br /><br />
                <Button variant='contained' onClick={this.handleSubmit}>Submit</Button>
            </div>

        )
    }
}

export default Dashboard
