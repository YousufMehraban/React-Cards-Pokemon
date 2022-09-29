import React, {useState} from "react";
import {v4 as uuid} from "uuid";
import axios from "axios";

const useFlip = () =>{
    const [state, setState] = useState(true)
    const flipCard = () =>{
        setState(s => !s)
    }
    return [state, flipCard]
}


const useAxios = (url) =>{
    const [state, setState] = useState([]);
    const addItem = async (pokeName="") => {
      const response = await axios.get(`${url}/${pokeName}`);
      setState(items => [...items, { ...response.data, id: uuid() }]);
    };
    return [state, addItem]
}

export {useFlip, useAxios}