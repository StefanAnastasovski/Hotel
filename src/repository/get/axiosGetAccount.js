import axios from '../../custom-axios/axios';

const Account = {

    fetchAccounts: () => {
        return axios.get(`/api/getallaccounts`)
    }

};

export default Account;