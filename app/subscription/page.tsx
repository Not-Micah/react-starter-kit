"use client";

import Subheading from "@/components/common/Subheading"
import Text from "@/components/common/Text";
import { useUser } from "@/providers/UserProvider";
import { signIn, signOut } from "@/utils/databaseFunctions";

const Subscription = () => {
  const { user } = useUser();

  return (
    <div className='default-container py-12'>
      <Subheading>Subscription</Subheading>
      {!user ? (
        <div className="mt-4">
          <Text>Please sign in to continue.</Text>
          <button className='mt-4 w-fit px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90' onClick={() => signIn()}>Sign In</button>
        </div>
      ) : (
        <div className="flex flex-col gap-y-2 mt-4">
          <Text>Signed in as {user.email}</Text>
          <Text className="text-gray-400">Standard Member</Text>
          <button className="w-fit px-4 py-2 bg-blue-500 text-white rounded-lg hover:opacity-90">Subscribe</button>
          <button className='w-fit px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90' onClick={() => signOut()}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Subscription;