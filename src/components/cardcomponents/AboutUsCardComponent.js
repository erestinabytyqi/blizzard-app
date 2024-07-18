import React from "react";
import { Image } from "@chakra-ui/react";
import AIPicture from '../../images/AIPicture.jpg';

function AboutUsCardComponent() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="photo_description ml-10">
          <h1 className="text-4xl font-bold pt-5">
            Artificial Intelligence - AI
          </h1>
          <p className="pt-10 pb-10 text-xl text-gray-400">
            Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn. These machines can perform tasks such as recognizing speech, solving problems, learning, and planning. AI has numerous applications in today's society, from healthcare and education to finance and transportation. The advancements in AI technology have the potential to revolutionize the way we live and work, making processes more efficient and opening up new possibilities for innovation and growth.
          </p>
        </div>
        <div className="photo" style={{ marginRight: '10px', width: '50%' }}>
          <Image src={AIPicture} width="100%" />
        </div>
      </div>
    </>
  );
}

export default AboutUsCardComponent;