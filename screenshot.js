const args = require('minimist');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

var parms = args(process.argv.slice(2));

   console.log("video path: "+parms.video);
   console.log("screenshot timestamp: "+parms.timestamp);
ffmpeg(parms.video)
.takeScreenshots({
    count: 1,
    filename: 'screenshot--['+parms.timestamp+'].png',
    timemarks: [parms.timestamp] // number of seconds
  }, './res/screenshot', function(err) {
    if(err){
      console.log("Error: "+err)
    }else
  console.log('screenshots were saved')
});
