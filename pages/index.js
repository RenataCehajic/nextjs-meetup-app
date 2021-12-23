import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://www.thetrainline.com/content/vul/hero-images/city/ljubljana/2x.jpg",
    address: "Trubarjeva cesta, Ljubljana",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://cdn.kimkim.com/files/a/images/e6ed02b51de5cc040c62025b52748d3624eda8a3/big-a221fba325283cfb5e98072395bbd970.jpg",
    address: "Gregorjeva ulica, Bled",
    description: "This is a second meetup!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API, or a DB
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, // number of seconds
  }; // you always need to return an object
}

export default HomePage;
