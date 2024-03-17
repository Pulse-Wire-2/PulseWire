import FetchData from "../utils/utils";
import { useState, useEffect } from "react";

const CLIENT_ID = "e449ea2993d64c1bbbc5e6e104643bbd"
const CLIENT_SECRET = "9c5d3a14fef34e13b2de7c7ef6c0089c"

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('')

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const authParameters = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        };

        const response = await fetch('https://accounts.spotify.com/api/token', authParameters);
        if (!response.ok) {
          throw new Error('Failed to fetch access token');
        }

        const data = await response.json();
        setAccessToken(data.access_token);
        console.log("Access Token:", data.access_token); // Log the access token
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };

    fetchAccessToken();
  }, []);

  const fetchSearch = async () => {
    try {
      const data = await FetchData('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg', {
        headers: {
          'Authorization': `Bearer ${BQBEWA6gfLHJvHPeBbxMehRXYwuVItT1OWAcj1nwQPYe3LxfK4Kpald4b4inHur59x74buli6X0yPHmj4hudx9nIX7Xiaj5EwAjEqUH98iGbGiQrm_s}` // Use the access token obtained from authentication
        }
      });
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  fetchSearch();
  
  return (
    <>
    <form action="">
      <button></button>
    </form>
    </>
  )
}

export default Search