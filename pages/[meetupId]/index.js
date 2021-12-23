import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://www.thetrainline.com/content/vul/hero-images/city/ljubljana/2x.jpg"
      title="A First Meetup"
      address="Trubarjeva cesta, Ljubljana"
      description="This is a first meetup"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://www.thetrainline.com/content/vul/hero-images/city/ljubljana/2x.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Trubarjeva cesta, Ljubljana",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
