import { createStore } from "redux";

    const initialState= {
        hours:'00',
        minutes:'00',
        seconds:'00'
    }

    let sec=0;
    let min=0;
    let hrs=0;

    let id= setInterval(()=>{
if(min>0 &&min%60===0 ){
            hrs += 1;
        }
    else{
            if(sec>0 &&sec%60 ===0){
                min= min+1;   
            }
            else{
                sec = sec+1
            }
        
        }
     },1000)

    export const reducerfn=(state=initialState,action)=>{

        console.log(action)
        switch(action.type){
            case "start":
         
 
    return{
        ...state,
        hours:hrs,
        minutes:min,
        seconds:sec
    }

    case "pause": clearInterval(id) 
                return state
                    case "restart":
                        default: return state
        }
    }
    export const store= createStore(reducerfn)