import ChatMessage from "../components/ChatMessage";
import Header from "../components/Header";
import LeagueSelector from "../components/LeagueSelector";
import ScorePreview from "../components/ScorePreview";

export default () => {

  return (
    <>
      <div className='content'>
        <Header />
        <div className='home-content'>
          <div className='card-container'>
            <div>
              <h2 style={{margin: 0}}>Live Scores</h2>
            </div>
            <div className='league-selector-container'>
              <LeagueSelector />
            </div>
            <div className='scores-container'>
              <ScorePreview home='Celtics' homeScore={88} moment='Q3 5:45' away='Nets' awayScore={85}/>
            </div>
          </div>
          <div className='card-container discussion-container'>
            <div>
              <h2 style={{margin: 0}}>Discussion</h2>
              <div className='chat-container'>
                <ChatMessage name='John Doe' timestamp={0} content={"What a game! The Lakers are really struggling in the 4th quarter!"} />
              </div>
            </div>
            <div className='chat-send-message'>
              <input className='chat-input' placeholder='Add to the discussion' type='text' />
              <button className='chat-post'>Post Comment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}