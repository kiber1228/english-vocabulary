import React, {useEffect, useState} from 'react';
import './Content.css'
import {db} from "../../server/firebase";

function Content(props) {
    const [loading,setLoading] = useState(false)
    const [title,setTitle] = useState(null)
    const [search,setSearch] = useState('')
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

    console.log(search)
    return (
        <div className={'container-fluid content  bg-black text-white'}>
            {/* <form className={'input-group w-50 m-auto pt-3'}>
                <input type="text" placeholder={'search...'} onChange={e=>setSearch(e.target.value)} className={'form-control'}/>
                <button className={'btn btn-dark text-white'}>search</button>
            </form> */}
            <br/>
            <div className="container w-50 m-auto">
                <table className="table table-striped table-info">
                    <thead>
                    <tr>
                        <th>#</th>
                        <td>English</td>
                        <td>Uzbek</td>
                    </tr>
                    </thead>
                    <tbody>
                    {loading ? title.sort((a,b)=> a - b).map((res,i)=>{
                    return    <>
                            <tr key={res.id}>
                                <td>{i+ 1}</td>
                                <td>{res.data.eng}</td>
                                <td>{res.data.uzb}</td>
                            </tr>
                        </>
                    }): 'error'}

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Content;