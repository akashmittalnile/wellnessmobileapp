import axios from 'axios'
import RNFetchBlob from 'rn-fetch-blob'
import { getToken } from './service'



export const postRequest = async ({ url = null, data = null, header = 'json' }) => {
    try {
        const token = await getToken()
        console.log(token)
        const response = await axios({
            method: 'post',
            url: url,
            headers: {
                'Content-Type': header == 'json' ? 'application/json' : 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
            data: data
        })
        console.log('Response ::: ===  ',response)
        if (response.data) {
            return response.data
        }
        return null

    } catch (e) {
        console.log('=== ', e)
        return null
    }
}

export const withoutTokenPostRequest = async ({ url = null, data = null, header = 'json' }) => {
    console.log('User Login :::', url, data)
    try {
        const response = await axios({
            method: 'post',
            url: url,
            headers: {
                'Content-Type': header == 'json' ? 'application/json' : 'multipart/form-data',
            },
            data: data
        })

        if (response.data) {
            return response.data
        }
        return null

    } catch (e) {
        console.log(e)
        return null
    }
}


export const getRequest = async ({ url = null, data = null }) => {
    try {
        const token = await getToken()
        const response = await axios({
            method: 'get',
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        if (response.data) {
            return response.data
        }
        return null

    } catch (e) {
        console.log(e)
        return null
    }
}

export const blobRequest = async ({ url = null, data = null, }) => {
    try {
        const token = await getToken()
        console.log(token)
        if (!token) {
            console.warn('Missing authentication token');
            return null;
        }
        const response = await RNFetchBlob.fetch(
            'POST',
            url,
            {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
            data,
        )

        return JSON.parse(response.data)

    } catch (e) {
        console.log(e)
        return null
    }
}
export const blobRequestWithoutToken = async ({ url = null, data = null }) => {
    try {
        const response = await RNFetchBlob.fetch(
            'POST',
            url,
            {
                'Content-Type': 'multipart/form-data'
            },
            data,
        );

        return JSON.parse(response.data);
    } catch (e) {
        console.log(e,);
        return null;
    }
};

