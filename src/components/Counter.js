import {useState} from 'react'
function Counter (props){
    let  [count , setCount] = useState(0)
    const [bgColor , setBgColor] = useState('grey')

    function hundleOnClick(){
        let count1 = count + 1
        setCount(count1)
        if(count1 >= 10) setBgColor('green')
        if(count1 >= 20) setBgColor('orange')
    }
    console.log('userState 1',  useState(78))

    // setTimeout( function(){
    //     setCount(10)
    //     console.log('count:', count)
    // },3000)


    return (
        <>
           <div>---------- counter component ----------</div>
           <div onClick={hundleOnClick} style={{width: '500px', height: "100px", backgroundColor: bgColor}}>
                <h2>{count} click</h2>

                 <h6>Click me</h6>
           </div>
        </>
    )
}

export default Counter