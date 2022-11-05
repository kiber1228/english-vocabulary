import React, {useEffect, useState} from 'react';
import {db} from "../server/firebase";

function Admin(props) {
    const [loading,setLoading] = useState(false)
    const [title,setTitle] = useState(null)
    useEffect(()=>{
        db.collection('english').onSnapshot(querySnapshot=>(
            setTitle(querySnapshot.docs.map(res=>({
                id:res.id,
                data:{...res.data()}

            }))),
                setLoading(true)
        ))

        console.log(title)
    },[])

    function deleteItems(id){
        db.collection('english').doc(id).delete()
    }
    return (
        <div className="container mt-5">
            <table className={'table table-striped table-dark'}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>eng</th>
                    <th>uzb</th>
                    <th>remove</th>
                </tr>
                </thead>
                <tbody>
                {loading ? title.map((res,i)=>{
                    return    <>
                        <tr key={res.id}>
                            <td>{i+ 1}</td>
                            <td>{res.data.eng}</td>
                            <td>{res.data.uzb}</td>
                            <td><button className={'btn btn-danger'} onClick={()=>deleteItems(res.id)}>remove</button></td>
                        </tr>
                    </>
                }): 'error'}
                </tbody>
            </table>
        </div>

    );
}

export default Admin;