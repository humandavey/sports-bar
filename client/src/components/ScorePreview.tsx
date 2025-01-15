interface ScorePreviewProps {
  home: string,
  homeScore: number,
  moment: string,
  away: string,
  awayScore: number,
}

export default ({home, homeScore, moment, away, awayScore}: ScorePreviewProps) => {

  return (
    <>
      <div className='score-container'>
        <div className='score-home-container'>
          <h3>{home}</h3>
          <h1 className='score-number'>{homeScore}</h1>
        </div>
        <div>
          <p>{moment}</p>
        </div>
        <div className='score-away-container'>
          <h1 className='score-number'>{awayScore}</h1>
          <h3>{away}</h3>
        </div>
      </div>
    </>
  );
}