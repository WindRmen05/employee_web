import axios from 'axios';
import {showAlert} from './alert';

export const createEmployee = async (data) => {
    try {
        console.log(data);
        const url = '/register/createEmployee';
        const res = await axios({
            method: 'POST',
            url,
            data
        });

        if(res.data.status === 'success') {
            showAlert('success',"Employee created successfully!!");
            console.log('employee created success!!');
        } else {
            showAlert('danger',res);
        }
    }catch(e) {
        showAlert('danger',e);
        console.log(e);
    }
}