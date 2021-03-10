import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


class crudwithclass extends Component {
    constructor(){
        super();
        this.state={
            fname:"",
            lname:"",
            age:'',
            data:[],
            isEdited:true,
            onIndex:0
        }

        this.fname=this.fname.bind(this)
        this.lname=this.lname.bind(this)
        this.age=this.age.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
        this.handleDel=this.handleDel.bind(this)
        this.handleClear=this.handleClear.bind(this)
        this.handleDeleteAll=this.handleDeleteAll.bind(this)

    }

    fname(e){
      this.setState({
          fname:e.target.value
      })
    }

    lname(e){
        this.setState({
            lname:e.target.value
        })
      }

      age(e){
        this.setState({
            age:e.target.value
        })
      }

      handleClear(){
          this.setState({
               fname:"",
               lname:"",
               age:""
          })
         
      }

      handleAdd(){
          if(this.state.isEdited){
            let myObj={
                fname:this.state.fname,
                lname:this.state.lname,
                age:this.state.age,
            }
  
            let myArr=this.state.data;
            myArr.push(myObj)
  
            this.setState({
                data:myArr,
                fname:'',
                lname:'',
                age:""
            })
          }else{
            let myObj={
                fname:this.state.fname,
                lname:this.state.lname,
                age:this.state.age,
            }
  
            let myArr=this.state.data;
            myArr.splice(this.state.onIndex,1,myObj)
  
            this.setState({
                data:myArr,
                fname:'',
                lname:'',
                age:""
            })
            this.setState({isEdited:true})
          }
      }

      handleDeleteAll(index){
            let myArr=this.state.data
            myArr.splice(index)
            this.setState({
                data:myArr
            })
      }

      handleEdit(data1,index){
        this.setState({isEdited:false})

        this.state.fname=data1["fname"]
        this.state.lname=data1["lname"]
        this.state.age=data1["age"]

        this.setState({
            onIndex:index
        })
      }

      handleDel(index){
          let myArr=this.state.data;
          myArr.splice(index,1)
          this.setState({
              data:myArr
          })
      }
    render() {
        return (
            <div>
                    <h1>Customers Detail</h1>

                    <input onChange={this.fname} type="text" placeholder="First name" value={this.state.fname}/>
                    <input onChange={this.lname} type="text" placeholder="Last name" value={this.state.lname}/>
                    <input onChange={this.age} type="number" placeholder="Age" value={this.state.age}/>

                    <button onClick={this.handleAdd}>{this.state.isEdited ?"Add" :"Update"}</button>
                    <button onClick={this.handleClear}>Clear All</button>
                    <button onClick={this.handleDeleteAll}> Delete All</button>

                    <table className="table table-bordered border-primary">

                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((ele,index)=>
                                    <tr>
                                        <td>{ele["fname"]}</td>
                                        <td>{ele["lname"]}</td>
                                        <td>{ele["age"]}</td>
                                        <td><button onClick={this.handleEdit.bind(this,ele,index)}>Edit</button></td>
                                        <td><button onClick={this.handleDel.bind(this,index)}>Delete</button></td>
                                    </tr>
                                )
}
                        </tbody>
                    </table>
            </div>
        );



    }
}

export default crudwithclass;


