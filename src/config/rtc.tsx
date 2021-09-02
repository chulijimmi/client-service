import Webrtc from '../library/Webrtc';
import turn from './turn';
import ws from './ws';

const rtc = new Webrtc(ws.url, turn);

export default rtc;
