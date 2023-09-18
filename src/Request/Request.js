import axios from "axios";

export default class Request{
     constructor(setterState) {
         this.setterState= setterState;

     }

  /*  async GetDatas (){await axios.get(`${this.url}`).then(({data})=>{return this.setterState(data);})}*/
    FetchAllDatas = async ()=>{await axios.get('http://127.0.0.1:8000/api/info').then(({data})=>{this.setterState (data);})}
    FetchData = async (id)=>{await axios.get(`http://127.0.0.1:8000/api/info/${id}`).then(({data})=>{this.setterState (data); console.log(data) })}
}
