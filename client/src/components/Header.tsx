import { useNavigate } from "react-router-dom";

export default () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='header-container'>
        <img tabIndex={0} className='header-img' src='./logo_black.svg' />
        <div className='header-nav'>
          <p tabIndex={0} className='header-nav-item' onClick={() => navigate('/')}>Home</p>
          <p tabIndex={0} className='header-nav-item' onClick={() => navigate('/scores')}>Scores</p>
          <p tabIndex={0} className='header-nav-item' onClick={() => navigate('/schedule')}>Schedule</p>
          <p tabIndex={0} className='header-nav-item' onClick={() => navigate('/discussion')}>Discussion</p>
          <p tabIndex={0} className='header-nav-item' onClick={() => navigate('/account')}>Account</p>
        </div>
      </div>
    </>
  );
}