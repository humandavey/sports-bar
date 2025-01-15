import Header from "../components/Header";
import LeagueSelector from "../components/LeagueSelector";
import ScorePreview from "../components/ScorePreview";

export default () => {

  return (
    <>
      <div className='content'>
        <Header />
        <div className='home-content'>
          <div className='live-scores-container'>
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
        </div>
      </div>
    </>
  );
}