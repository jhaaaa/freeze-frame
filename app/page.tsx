import { getFrameMetadata } from "@coinbase/onchainkit/frame";
import { Metadata } from "next";

const frameMetadata = getFrameMetadata({
	// Accepts and isOpenFrame keys are required for Open Frame compatibility
  accepts: { xmtp: "2024-02-09" },
  isOpenFrame: true,
  
  buttons: [
    {
	    // Whatever label you want your first button to have
      label: "Make transaction",
      // Required 'tx' action for a transaction frame
      action: "tx",
      // Below buttons are 2 route urls that will be added in the next steps.
      // Target will send back info about the transaction
      target: `${process.env.NEXT_PUBLIC_BASE_URL}/api/transaction`,
      // postUrl will send back a transaction success screen
      postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/transaction-success`,
    },
  ],
  
  // This is the image shown on the default screen
  // Add whatever path is needed for your starting image
  // In this case, using an Open Graph image
  image: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?transaction=null`,
});

export const metadata: Metadata = {
  title: "Transaction Frame",
  description: "A frame to demonstrate transactions",
  other: {
    ...frameMetadata,
  },
};

export default function Home() {
  return (
    <>
      <h1>Open Frames Tx Frame</h1>
    </>
  );
}