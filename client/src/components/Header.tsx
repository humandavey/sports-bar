import { useNavigate } from "react-router-dom";

export default () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='header-container'>
        <h1 className='header-title'>Sports Bar</h1>
        <div className='header-nav'>
          <p className='header-nav-item' onClick={() => navigate('/')}>Home</p>
          <p className='header-nav-item' onClick={() => navigate('/scores')}>Scores</p>
          <p className='header-nav-item' onClick={() => navigate('/schedule')}>Schedule</p>
          <p className='header-nav-item' onClick={() => navigate('/discussion')}>Discussion</p>
          <p className='header-nav-item' onClick={() => navigate('/account')}>Account</p>
        </div>
      </div>
    </>
  );
}