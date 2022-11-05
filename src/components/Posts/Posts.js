import React from 'react';
import {useForm} from "react-hook-form";
import {db} from "../../server/firebase";
import {useNavigate} from "react-router-dom";

function Posts(props) {
    const navigate = useNavigate()
    const {handleSubmit,reset,register} = useForm()
    function upload(data){
        console.log(data)
        db.collection('english').doc().set({
            eng:data.eng,
            uzb:data.uzb
        }).then(res=>{
            navigate('/')
        }).catch(err=>{
            console.log(err.message)
        })
    }


    return (
        <div className={'container m-auto'}>
            <form className={'mt-5'} onSubmit={handleSubmit(upload)}>
                <input type="text" required={true} {...register('eng')} className={'form-control'} /><br/>
                <input type="text" required={true} {...register('uzb',)} className={'form-control'}/><br/>
                <button className='btn btn-dark'>upload</button>
            </form>
        </div>
    );
}

export default Posts;