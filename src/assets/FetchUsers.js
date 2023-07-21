/* get names for list random */
 const  randomData = async (q) => {
    const res = await fetch(`https://randomuser.me/api/?results=${q} `);
  
    const data = await res.json();
  
    console.log(data);

   

}

   


export default randomData;