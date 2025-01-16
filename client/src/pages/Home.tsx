import ChatMessage from "../components/ChatMessage";
import Header from "../components/Header";
import LeagueSelector from "../components/LeagueSelector";
import ScorePreview from "../components/ScorePreview";
import { useState } from "react";

export default () => {
  const [selectedLeague, setSelectedLeague] = useState('nba');

  return (
    <>
      <div className='content'>
        <Header />
        <div className='home-content'>
          <div className='cards-grid'>
            <div className='card-container scores-card'>
              <div>
                <h2 style={{margin: 0}}>Live Scores</h2>
              </div>
              <div className='league-selector-container'>
                <LeagueSelector selected={selectedLeague} setSelected={setSelectedLeague} />
              </div>
              <div className='scores-container'>
                {selectedLeague === 'nba' &&
                  <ScorePreview home='Celtics' homeScore={88} moment='Q3 5:45' away='Nets' awayScore={85} />
                }
              </div>
            </div>
            <div className='card-container discussion-container'>
              <div>
                <h2 style={{margin: 0}}>Discussion</h2>
                <div className='chat-container'>
                  <ChatMessage name='John Doe' timestamp={1736960000} content={"What a game! The Lakers are really struggling in the 4th quarter!"} />
                </div>
              </div>
              <div className='chat-send-message'>
                <input className='chat-input' placeholder='Add to the discussion' type='text' />
                <button className='chat-post'>Post Comment</button>
              </div>
            </div>
            <div className='card-container upcoming-container'>
              <div>
                <h2 style={{margin: '0 0 1rem 0'}}>Upcoming Games</h2>
              </div>
              <div className='upcoming-list'>
                <div className='upcoming-game'>
                  <p style={{margin: 0}}>Lakers vs. Clippers</p>
                  <p style={{margin: 0, color: '#6b7280'}}>Tomorrow, 7:30 PM</p>
                </div>
                <div className='upcoming-game'>
                  <p style={{margin: 0}}>Chiefs vs. Raiders</p>
                  <p style={{margin: 0, color: '#6b7280'}}>Sept 15, 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
