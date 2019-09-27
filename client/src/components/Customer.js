import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from "./CustomerDelete";

class Customer extends Component {
    render() {
        return (
            <>
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                    <TableCell>{this.props.name}({this.props.id})</TableCell>
                    <TableCell>{this.props.birthday}</TableCell>
                    <TableCell>{this.props.gender}</TableCell>
                    <TableCell>{this.props.job}</TableCell>
                    <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>
                </TableRow>
                {/*<div>
                    <CustomerProfile id={this.props.id} image={this.props.images} name={this.props.name}/>
                    <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
                </div>*/}
            </>
        )
    }
}

/*class CustomerProfile extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}*/

export default Customer;