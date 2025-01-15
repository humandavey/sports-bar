import Header from "../components/Header";

export default () => {

  return (
    <>
      <div className='content'>
        <Header />
        <div style={{display: 'flex', padding: '2rem 10rem 0 10rem'}}>
          <div style={{backgroundColor: 'white', padding: '1rem', borderRadius: '15px', boxShadow: '0 1px 3px 0 rgb(0, 0, 0, 0.1), 0 1px 2px -1px rgb(0, 0, 0, 0.1)'}}>
            <div style={{marginBottom: '1rem'}}>
              <h2 style={{margin: 0}}>Live Scores</h2>
            </div>
            <div style={{display: 'inline-block', backgroundColor: '#F3F4F6', borderRadius: '7px'}}>
              <div style={{display: 'flex', margin: '3px'}}>
                <div style={{display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '.5rem', borderRadius: '5px'}}>
                  <img src="./leagues/nba.png" style={{width: 16, height: 16, marginRight: '.5rem'}} />
                  <p style={{margin: 0}}>NBA</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', padding: '.5rem', borderRadius: '5px'}}>
                  <img src="./leagues/nfl.png" style={{width: 16, height: 16, marginRight: '.5rem'}} />
                  <p style={{margin: 0}}>NFL</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', padding: '.5rem', borderRadius: '5px'}}>
                  <img src="./leagues/mlb.png" style={{width: 16, height: 16, marginRight: '.5rem'}} />
                  <p style={{margin: 0}}>MLB</p>
                </div>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '1rem'}}>
              <div style={{display: 'flex', alignItems: 'center', width: '40vw', justifyContent: 'space-between', marginBottom: '.5rem', boxShadow: '0 1px 3px 0 rgb(0, 0, 0, 0.1), 0 1px 2px -1px rgb(0, 0, 0, 0.1)'}}>
                <div style={{display: 'flex', alignItems: 'center', marginLeft: '1rem'}}>
                  <h3>Celtics</h3>
                  <h1 style={{margin: '0 1rem 0 1rem'}}>88</h1>
                </div>
                <div>
                  <p>Q3 5:45</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginRight: '1rem'}}>
                  <h1 style={{margin: '0 1rem 0 1rem'}}>85</h1>
                  <h3>Nets</h3>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', width: '40vw', justifyContent: 'space-between', boxShadow: '0 1px 3px 0 rgb(0, 0, 0, 0.1), 0 1px 2px -1px rgb(0, 0, 0, 0.1)'}}>
                <div style={{display: 'flex', alignItems: 'center', marginLeft: '1rem'}}>
                  <h3>Celtics</h3>
                  <h1 style={{margin: '0 1rem 0 1rem'}}>88</h1>
                </div>
                <div>
                  <p>Q3 5:45</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginRight: '1rem'}}>
                  <h1 style={{margin: '0 1rem 0 1rem'}}>85</h1>
                  <h3>Nets</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}