import '../style/button_deck.css'

import steam from '../assets/icon-steam.png'
import discord from '../assets/icon-discord.png'
import yt from '../assets/icon-yt.png'
import reddit from '../assets/icon-reddit.png'

function ButtonDeck() 
{
    return (
    <>
        <div className='b-deck'>
            <div className="b-d-button" title="r/ultradungeon (COMING SOON)" alt="Logo is owned by Reddit.">
                <img src={reddit}/>
                <button onClick={() => window.location.href=''} />
            </div>

            <div className="b-d-button" title="youtube/ultradungeon" alt="Logo is owned by Youtube.">
                <img src={yt}/>
                <button onClick={() => window.location.href='https://www.youtube.com/channel/UCGIHwsY0BKGbMACW2ux8R4w'} />
            </div>

            <div className="b-d-button" title="discord/ultradungeon (COMING SOON)" alt="Logo is owned by Discord.">
                <img src={discord}/>
                <button onClick={() => window.location.href=''} />
            </div>

            <div className="b-d-button" title="steam/ultradungeon (COMING SOON)" alt="Logo is owned by Valve.">
                <img src={steam}/>
                <button onClick={() => window.location.href=''} />
            </div>
        </div>
    </>
  )
}

export default ButtonDeck