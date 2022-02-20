import React, { Component } from 'react'
import './common.css'
export default class Display extends Component {
    render() {
        return (
            <div>
               <h1 id='empheading'>Employee Details</h1>
                <div className='phoneBook'>
                    <table className='myTable'>
                        <thead>
                            <tr>
                                <th>No</th><th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.employess.map((details) => {
                                return (
                                    <tr key={details.eNo}>
                                        <td>{details.eNo}</td>
                                        <td>{details.eName}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                 
            </div>
        )
    }
}
