
const Notifications = () => {
  const notificationList = [
    {
        id : 1,
        message : "Hi new message here",
        type : "private-message",
        from : "Zain",
        fromImage : "",
        fromId : "1123",
        date : "12:30 PM",
    },
    {
        id : 2,
        message : "Hi new good",
        type : "private-message",
        from : "Zain",
        fromImage : "",
        fromId : "1123",
        date : "12:30 PM",
    },
    {
        id : 3,
        message : "Hi how are you",
        type : "private-message",
        from : "Zain",
        fromImage : "",
        fromId : "1123",
        date : "12:30 PM",
    },
    {
        id : 4,
        message : "Hi new message here",
        type : "private-message",
        from : "Zain",
        fromImage : "",
        fromId : "1123",
        date : "12:30 PM",
    },
  ]
  return (
    <div className="my-1">
        <ul>
            {notificationList.map(item => {
                return (
                    <li className="relative shadow-2xs w-full rounded-lg h-18 mb-1.5 active:bg-gray-300 bg-gray-400 p-3">
                        <p className="text-white font-bold">{item.message}</p>
                        <span className="absolute right-2 text-white text-wrap">{item.date}</span>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Notifications