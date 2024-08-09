import { useEffect,useState } from "react";
import Cards from "./Cards";
import AddCard from "./AddCard";
/* My secret plans to conquire the world*/
/*const DUMMY_DATA=[
    {
        key:1,
        title: "First Title",
        body:"First Body",
        date: new Date(),
    },
    {
        key:2,
        title: "Second Title",
        body:"Second Body",
        date: new Date(),
    },
]*/

export default function Home () {
    const [ data,setData]=useState(null);
   /* useEffect(()=>{
        setData(DUMMY_DATA);
    },[]); */
    return(
        <>
            <img alt="background" style={{height:'100vh',width:'100vw'}} src="https://aruulwduir.cloudimg.io/_pb_cdn_/000_clients/000_org/blog/h23270vcwowvhamqwddyg6dkxvg.jpg?p=@s768&force_format=webp" />
            <div className="container-fluid" style={{position:'absolute',top:'0',left:'0',height:'100vh',width:'100vw',backgroundColor:'rgba(0,0,0,0.3)',backdropFilter:'blur(1px)'}}>
                <div className="row w-100 h-100 d-flex justify-content-around align-items-center">
                    <div className="col-md-4">
                        <h3 className="display-1 text-white fst-italic">Manage Yourself & Set Goals</h3>
                        <AddCard data={data} setData={setData}/>
                    </div>
                    <div className="col-md-6">
                        {
                            data ?
                                <div style={{overflowY:'scroll',height:'60vh'}}>
                                    <Cards data={data} setData={setData}/>
                                </div>
                            :
                                <h3 className="display-2 text-white fw-bold">Start Creating Goals</h3>
                        }
                        </div>
                </div>
            </div>
        </>
    );
}