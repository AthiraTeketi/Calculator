import './App.css'
function Keypad({handleClickEvents,Calculation,Clear}){
    return(
        <div className='keypad'>
            <div className="row1">
                <button className='digit' id='digit'  onClick={()=>{
                    handleClickEvents("7")
                }}>7</button>
                <button  className='digit' onClick={()=>{
                    handleClickEvents("8")
                }}>8</button>
                <button className='digit' onClick={()=>{
                    handleClickEvents("9")
                }}>9</button>
                <button className='operator' onClick={()=>{
                    handleClickEvents("/")
                }}>/</button>
            </div>


            <div className='row2'>
                <button className='digit' onClick={()=>{
                    handleClickEvents("4")
                }}>4</button>
                <button className='digit' onClick={()=>{
                    handleClickEvents("5")
                }}>5</button>
                <button className='digit' onClick={()=>{
                    handleClickEvents("6")
                }}>6</button>
                <button className='operator' onClick={()=>{
                    handleClickEvents("*")
                }}>*</button>
            </div>
            <div className='row3'>
                <button className='digit' onClick={()=>{
                    handleClickEvents("1")
                }}>1</button>
                <button className='digit' onClick={()=>{
                    handleClickEvents("2")
                }}>2</button>
                <button className='digit' onClick={()=>{
                    handleClickEvents("3")
                }}>3</button>
                <button className='operator' onClick={()=>{
                    handleClickEvents("-")
                }}>-</button>


            </div>
            <div className='row4'>
                <button className='digit' onClick={()=>{
                    handleClickEvents("0")
                }}>0</button>
                <button className='functionalkey' onClick={()=>{
                    Calculation()
                }}>=</button>
                <button className='functionalkey' onClick={()=>{
                    Clear()
                }}>c</button>
                <button className='operator' onClick={()=>{
                    handleClickEvents("+")
                }}>+</button>
            </div>
        </div>
       
    )
}
export default Keypad
