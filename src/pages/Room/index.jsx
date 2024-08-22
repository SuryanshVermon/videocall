import React from"react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const RoomPage =() => {
    const{ roomId}=useParams();


    const myMeeting = async(element)=>{
        const appID =1201230889;
        const serverSecret="294cb923e1bb1196e2eab5e3aef169c1";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),"Suryansh");

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        console.log(window.location.origin);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name :'Copy Link',
                    url : `${window.location.origin}/room/${roomId}`,
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,

        });

    };

    return <div>
        <div ref={myMeeting} style={{ width: '100vw', height: '100vh' }} />
    </div>
};
export default RoomPage;
