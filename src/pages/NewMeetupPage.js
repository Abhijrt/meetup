import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {


    function addMeetupHandler (meetupData) {
        fetch('https://react-summery-default-rtdb.firebaseio.com/meetup.json',{
            method: 'POST',
            body: JSON.stringify(meetupData),
            headersL: {
                'Content-Type': 'application/json'
            }
        });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
}

export default NewMeetupPage;