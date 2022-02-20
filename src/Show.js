import React, { Component } from 'react'
import './common.css'
import Display from './Display';
export default class Show extends Component {
    state = {
        emp: [],
        empToBeAdded: { eNo: 0, eName: "" }
    }
    componentDidMount() {
        const helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState === 4 && helper.status === 200) {
                const empData = JSON.parse(helper.responseText);
                this.setState({ emp: empData });
            }
        }
        helper.open("GET", "http://localhost:3000/Employee.json");
        helper.send();
    }
    addEmployee = () => {
        const modifiedEmp = this.state.emp;
        this.newEmp = { eNo: 0, eName: "" } // Cleanup code
        modifiedEmp.push(this.state.empToBeAdded); //Adding details
        this.setState({ emp: modifiedEmp });//Updating Details
    }
    newEmp = { eNo: 0, eName: "" }
    addHandler = (args) => {
        //this.newEmp["eNo"] or this.newEmp["eName"]
        this.newEmp[args.target.name] = args.target.value;
        this.setState({ empToBeAdded: this.newEmp });
    }

    render() {
        return (
            
            <div className='container'>
                {/* Sending Parent detals to Child Component through the Props */}
                <Display employess = {this.state.emp}/>
                <hr></hr>
                <label>Enter number</label><br></br>
                <input type="text" id='num' name='eNo' onChange={this.addHandler} /><br></br>
                <label>Enter Name</label><br></br>
                <input type="text" id='name' name='eName' onChange={this.addHandler} /><br></br>
                <input type="button" onClick={this.addEmployee} value="Add Emp" />
            </div>
        )
    }
}

