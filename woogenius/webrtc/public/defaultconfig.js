// a default configuration that is used by the rtc package
module.exports = {
  // simple constraints for defaults
  constraints: {
    video: true,
    audio: false
  },

  // use the public switchboard for signalling
  signaller: '//switchboard.rtc.io',

  // no room is defined by default
  // rtc-quickconnect will autogenerate using a location.hash
  room: 'asdf',

  // specify ice servers or a generator function to create ice servers
  ice: [],

  // any data channels that we want to create for the conference
  // by default a chat channel is created, but other channels can be added also
  // additionally options can be supplied to customize the data channel config
  // see: <http://w3c.github.io/webrtc-pc/#idl-def-RTCDataChannelInit>
  channels: {
    chat: true
  },

  // the selector that will be used to identify the localvideo container
  localContainer: '#l-video',

  // the selector that will be used to identify the remotevideo container
  remoteContainer: '#r-video',

  // should we atempt to load any plugins?
  plugins: [],

  // common options overrides that are used across rtc.io packages
  options: {}
};