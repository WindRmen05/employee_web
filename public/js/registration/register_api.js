import axios from 'axios';
// import {showAlert} from 

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
            console.log('employee created success!!');
        }
    }catch(e) {
        console.log(e);
    }
}