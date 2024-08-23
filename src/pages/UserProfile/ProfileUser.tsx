import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { username } = useParams();
  return (
    <>
      <div className="flex flex-col items-center min-h-screen p-6">
        {/* UserProfile Information Section */}
        <div className="w-full max-w-lg md:max-w-4xl lg:w-2/3 flex flex-row items-center justify-between space-x-6 p-6 bg-white border-solid border-1 border-gray-800 rounded-lg shadow-lg">
          {/* Flex Container for Image and Text */}
          <div className="flex flex-row items-center space-x-6 w-full lg:w-3/4">
            <img
              src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Profile"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 shadow-lg"
            />
            <div className="flex flex-col items-start text-left">
              <p className="text-gray-900 font-bold text-sm md:text-base lg:text-lg">
                {username}
              </p>
              {/* <p className="text-gray-600 text-sm md:text-base lg:text-lg">
              {userId}
            </p>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg">
              {batch}
            </p> */}
            </div>
          </div>

          {/* Edit Profile Button */}
          <div className="flex items-center lg:w-1/4">
            {/* <button className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-sm md:text-base lg:text-lg rounded-md md:rounded-full shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Edit Profile
          </button> */}
            <Button>Edit Profile</Button>
          </div>
        </div>

        <div className="w-full max-w-lg md:max-w-4xl lg:w-2/3 flex flex-row items-center mt-6 lg:mt-12 space-x-2">
          {/* UserParticipation in Clubs Section */}
          <Tabs defaultValue="clubs" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="clubs">Clubs</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>
            <TabsContent value="clubs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
              distinctio consectetur odio harum, repudiandae possimus esse
              voluptatem et quisquam ullam minus illum enim laboriosam error
              delectus earum libero. Laudantium, consequatur?
            </TabsContent>
            <TabsContent value="events">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              explicabo ex ullam illo voluptas, impedit dolorem debitis sapiente
              molestias, laboriosam aspernatur voluptatem, beatae velit
              praesentium molestiae! Facilis neque atque placeat!
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
