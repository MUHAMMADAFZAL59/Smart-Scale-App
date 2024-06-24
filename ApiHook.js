import axios from 'axios';
import { useEffect, useState } from "react";

const getApi = () => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://raw.githubusercontent.com/cc-zubairali/react-api-server/main/smart-scale-app-diet-plan-api.json');
                const data = response.data.users;
                setUserData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return { userData };
};

export default getApi;