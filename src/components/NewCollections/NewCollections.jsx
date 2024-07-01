import './NewCollections.css';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';

const NewCollections = () => {

  const url = "https://gala-backend-nf24.onrender.com";
  const [new_collections, setNew_Collection] = useState([]);

  useEffect(()=>{
    fetch(url+'/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_Collection(data));
  },[])

  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>      
    </div>
  )
}

export default NewCollections
