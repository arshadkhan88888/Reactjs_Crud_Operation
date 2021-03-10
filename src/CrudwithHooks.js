import React, { useState } from 'react';

const CrudwithHooks = () => {

    const [inp1,setInp1]=useState()
    const [inp2,setInp2]=useState()
    const [inp3,setInp3]=useState()
    const [inp4,setInp4]=useState()
    const [inp5,setInp5]=useState()
    const [data,setData]=useState([])
    const [isEdit,setIsEdit]=useState(true)
    const [onIndex,setOnIndex]=useState(0)
    const [err,setErr]=useState("")

    const handleChange1=(e)=>{
        let fnamereg=/^[a-z ,.'-]+$/i
        let res1=fnamereg.test(e.target.value)
        if(!res1){
                setErr("Wrong Input")
        }else {
            setErr("Correct")
        }
            setInp1(e.target.value)
    }

    const handleChange2=(e)=>{
        setInp2(e.target.value)
}

const handleChange3=(e)=>{
    setInp3(e.target.value)
}

const handleChange4=(e)=>{
    setInp4(e.target.value)
}

const handleChange5=(e)=>{
    setInp5(e.target.value)
}

const handleAdd=()=>{
    if(isEdit){
        let myObj={
            fname:inp1,
            lname:inp2,
            mob:inp3,
            email:inp4,
            pass:inp5
        }
        data.push(myObj)
        setInp1("")
        setInp2("")
        setInp3("")
        setInp4("")
        setInp5("")


    }else{
        let myObj={
            fname:inp1,
            lname:inp2,
            mob:inp3,
            email:inp4,
            pass:inp5
        }
        data.splice(onIndex,1,myObj)
        setInp1("")
        setInp2("")
        setInp3("")
        setInp4("")
        setInp5("")
        setIsEdit(true)

    }    
    
      
}

const handleEdit=(index)=>{
    setIsEdit(false);
    let myObj={
    inp1:data[index].fname,
    inp2:data[index].lname,
    inp3:data[index].mob,
    inp4:data[index].email,
    inp5:data[index].pass

    }

    setInp1(data[index].fname)
    setInp2(data[index].lname)
    setInp3(data[index].mob)
    setInp4(data[index].email)
    setInp5(data[index].pass)
    setOnIndex(index,myObj)
    }
    
    const handleDelete = (index) => {
        data.splice(index, 1)
       setData([...data])
        
    }


    return (
        <div className="container">
            <h1>Login Form</h1><br/>
            <input type="text" placeholder="First Name" onChange={handleChange1} value={inp1}/><br/><br/>
            <p>{err}</p>
            <input type="text" placeholder="Last Name" onChange={handleChange2} value={inp2}/><br/><br/>
            <input type="number" placeholder="Mobile"onChange={handleChange3} value={inp3}/><br/><br/>
            <input type="email" placeholder="Email"onChange={handleChange4} value={inp4}/><br/><br/>
            <input type="password" placeholder="Password"onChange={handleChange5} value={inp5}/><br/><br/>

            <button className="btn btn-primary" onClick={handleAdd}>{isEdit  ?"Submit"  : "Update"}</button>

            <table  className="table table-bordered border-primary">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Mob</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((list,index)=>
                            <tr>
                                <td>{list["fname"]}</td>
                                <td>{list["lname"]}</td>
                                <td>{list["mob"]}</td>
                                <td>{list["email"]}</td>
                                <td>{list["pass"]}</td>
                                <td><button onClick={()=>{handleEdit(index)}}>Edit</button></td>
                                <td><button onClick={()=>{handleDelete(index)}}>Delete</button></td>
                            </tr>

                        )
                    }
                </tbody>
            </table>

        </div>
    );
};

export default CrudwithHooks;