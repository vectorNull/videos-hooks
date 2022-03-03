import axios from 'axios';

const KEY='AIzaSyBw64-NH8sRc7mGyGK62AAm0qFpglM7miM'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})