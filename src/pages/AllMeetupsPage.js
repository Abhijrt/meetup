import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage () {
    const [meetUpData, setMeetUpData] = useState([]);

    useEffect(() => {
        fetch('https://react-summery-default-rtdb.firebaseio.com/meetup.json')
        .then((response) => response.json())
        .then((data) => {
            const meetUpData = [];
            for(const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetUpData.push(meetup);
            }
            setMeetUpData(meetUpData);
        });
    },[])

    return <section>
        <MeetupList meetups={meetUpData} />
    </section>
}

export default AllMeetupsPage;