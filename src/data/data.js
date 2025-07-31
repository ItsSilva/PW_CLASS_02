      const fetchData = async () => {
          const response = await fetch('https://rickandmortyapi.com/api/character');
          const data = await response.json();
        //   console.log(data.results);
      return data.results;
    }

export default fetchData;
