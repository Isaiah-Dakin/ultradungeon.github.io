// Style
import './style/app.css'
import './style/nav.css'

// components
import React from 'react'
import Welcome from './components/Welcome'
import FadeInOnScroll from './components/FadeInOnScroll'
import HorizontalScroll from './components/HorizontalScroll'
import About from './components/About'

// assets
import udLogo from './assets/favicon.png'
import udBg from './assets/ud-bg-1.png'

function App() 
{
  return (
    <>
      <div className="box">
        <div className="off-screen-menu">
            <a href="">Home.</a>
            <a href="#about">About.</a>
            <a href="#news">News.</a>
            <a href="mailto:ultradungeonteam@gmail.com">Contact.</a>
        </div>

        <nav>
            <div className="logo" onClick={() => window.location.href=''} title='ultradungeon.ca'>
              <img src={udLogo} alt="The ULTRADUNGEON logo."/>
            </div>
            <div className="ham-menu" onClick={() => (document.querySelector('.off-screen-menu').classList.toggle('active'), document.querySelector('.ham-menu').classList.toggle('active'))}>
                <span />
                <span />
                <span />
            </div>
        </nav>

        <div className='background'>
          <img src={udBg} alt='The ULTRADUNGEON site background.'/>
        </div>
        
        {/* home page */}
        <div className="sub-box-1">
          <FadeInOnScroll>
            <Welcome />
          </FadeInOnScroll>

          <FadeInOnScroll>
            <HorizontalScroll/>
          </FadeInOnScroll>

         
          <FadeInOnScroll>
            <h1 id='about'>WHAT IS ULTRADUNGEON?</h1>
            <div className="sub-box-1-1">
              <About>
                <p className='full-p'>
                  ULTRADUNGEON is a top-down 2D indie game that has been in development since early 2023.
                  It combines gameplay mechanics from a variety of genres, including bullet-hell, roguelike, 
                  dungeon-crawler, extraction fighter, and RPG. Players will take what loot they have accumulated
                  , and risk it by delving into increasingly challenging dungeons. Death in these dungeons will 
                  cause you to permanently lose whatever gear and or items you brought with you.
                </p>
                <p className='full-p'>
                  ULTRADUNGEON was initially planned to be developed using the Unity engine, however shortly after the project's 
                  inception, the decision was made to switch to the open-source <a href="https://godotengine.org/" target="_blank" rel="noopener noreferrer">Godot engine</a>. 
                  Today, the project is built with Godot 4.3 and C<i>#</i>.
                </p>
                <p className='full-p'>
                  <h2>Current Features:</h2>
                  &#8226; Over 200 unique items, including nearly 80 different weapons. 
                  <br />
                  &#8226; 3 player classes to choose from. 
                  <br />
                  &#8226; 4 unique NPCs with a variety of dialogue options. 
                  <br />
                  &#8226; Dozens of unique builds, enabling many styles of gameplay. 
                  <br />
                  &#8226; Enemies with random loot drops. 
                  <br />
                  &#8226; An interactive inventory and storage system. 
                  <br />
                  &#8226; A dynamic shop menu, with discounts and refunds. 
                  <br />
                  &#8226; A status effect system, used by weapons, consumables and enemies. 
                  <br />
                  &#8226; A crafting system, with several types of crafting stations.
                  <br />
                  &#8226; Several types of lootable items, including forageables, chests and money-filled pots.
                </p>
                <p className='full-p'>
                  <h2>Planned Features:</h2>
                  &#8226; 9 tiers of procedurally-generated dungeons, based on the 9 circles of Hell. <br />
                  &#8226; A home base where the player can interact with NPCs <br />
                  &#8226; A building system, to allow players to decorate their base. <br />
                  &#8226; A progress tracker for slain enemies and unlockables. <br />
                  &#8226; A fishing minigame. <br />
                  &#8226; And More!
                </p>
                <p className='full-p'>
                  <h2>Release Date:</h2>
                  <span style={{color: "#cc425e"}}>ULTRADUNGEON has no planned release date as of now.</span><br />
                  As a team of two who have limited time, the development process is slow. ULTRADUNGEON is a 
                  passion project and will release when it is ready. In the meantime, thank-you for your support, and stay 
                  tuned for more updates. 
                </p>
              </About>
            </div>
          </FadeInOnScroll>

          <span className='footer'>Made With Love ~ The ULTRADUNGEON Team &#129505;</span>
        </div>
      </div>
    </>
  )
}

export default App