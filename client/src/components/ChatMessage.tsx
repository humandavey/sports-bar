interface ChatMessageProps {
  name: string,
  timestamp: number,
  content: string,
}

export default ({name, timestamp, content}: ChatMessageProps) => {

  const formatTime = (timestamp: number): string => {
    const seconds = (Date.now() / 1000) - timestamp;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    if (days >= 1) return Math.floor(days) + 'd ago';
    if (hours >= 1) return Math.floor(hours) + 'h ago';
    if (minutes >= 1) return Math.floor(minutes) + 'm ago';
    return Math.floor(seconds) + 's ago';
  }

  return (
    <>
      <div className='chat-message'>
        <img className='chat-profile-pic' src={'https://api.dicebear.com/6.x/initials/svg?seed=' + name} />
        <div className='chat-message-content'>
          <div className='chat-message-info'>
            <p style={{margin: 0}}>{name}</p>
            <p style={{margin: 0, color: '#6b7280'}}>{formatTime(timestamp)}</p>
          </div>
          <div>
            <p style={{margin: 0, fontSize: 14, color: '#374151'}}>{content}</p>
          </div>
        </div>
      </div>
    </>
  )
}