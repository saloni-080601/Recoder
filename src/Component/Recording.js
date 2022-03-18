import React from 'react'
import useMediaRecorder from '@wmik/use-media-recorder';
import { ReactMediaRecorder } from "react-media-recorder";
import {BsRecord2Fill}  from "react-icons/bs";
import {BsRecord}  from "react-icons/bs";
function Player({ srcBlob, audio }) {
  if (!srcBlob) {
    return null;
  }

  if (audio) {
    return <audio src={URL.createObjectURL(srcBlob)} controls />;
  }

  return (
    <video
      src={URL.createObjectURL(srcBlob)}
      controls
    />
  );
}

 function Recording() {
  let {
    getMediaStream,
    mediaBlob,
  } = useMediaRecorder({
    
    recordScreen: true,
    blobOptions: { type: 'video/webm' },
    mediaStreamConstraints: { audio: true, video: true }
  });
  return (
    <article className='art'>
     <h1>Screen recorder</h1>
     
        <ReactMediaRecorder
      video
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
      <section className='sec'>              
          <h1>{status}</h1>
          <video src={mediaBlobUrl} controls autoPlay loop  />
          
          <button onClick={startRecording}
          disabled={status === 'recording'} className="btn" >
            <BsRecord2Fill className="col"/>
          </button>
          <button
          type="button"
          onClick={getMediaStream}
          disabled={status === 'ready'} style={{margin:"auto"}}
        >
          Share screen
        </button>
          <button onClick={stopRecording}
          disabled={status !== 'recording'} className="btn" ><BsRecord className="col"/></button>
          
          </section>
      )}
    />
    <Player srcBlob={mediaBlob}/>
    </article>
  )
}export default Recording
