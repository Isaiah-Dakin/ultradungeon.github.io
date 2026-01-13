import ButtonDeck from './ButtonDeck'
import '../style/welcome.css' 

import udlogoimg from "../assets/logo-ud-yellow.png"

function Welcome() 
{
    return (
    <>
        <div className='welcome'>

            <div className='banner'>
                <div className="ud-logo">
                    <img src={udlogoimg}/>
                </div>
                
                <ButtonDeck />
            </div>

            
        </div>
    </>
  )
}

export default Welcome