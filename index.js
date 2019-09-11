/*const musics = {
  "test": {
    "C4": ["n", 4,8,4,8],
    "C5": ["s", 8,4,8,4],
    "G5": ["n", 4,4,8,8],
  }
};
*/
const musics = {
  "test": 
    {'E5': ['s', 8, 40, 8, 32, 8, 64, 7, 1, 4, 4, 7, 33, 8, 28], 'B4': ['n', 8, 4, 16, 4, 32, 7, 1, 4, 116, 7, 1, 4, 48], 'C5': ['n', 12, 4, 8, 4, 16, 4, 12, 4, 12, 4, 16, 8, 68, 4, 12, 4, 12, 4, 16, 8, 20], 'D5': ['n', 16, 8, 32, 4, 20, 8, 44, 8, 44, 4, 20, 8, 36], 'A4': ['n', 32, 7, 1, 4, 60, 6, 2, 12, 108, 7, 1, 12], 'F5': ['n', 140, 4, 12, 4, 92], 'A5': ['n', 144, 8, 100], 'G5': ['n', 152, 4, 96]},
  "test2": {'DS4': ['s', 4, 44, 8, 16, 8, 4, 4, 8, 3, 1, 4, 16, 8], 'FS4': ['n', 4, 4, 8, 4, 16, 4, 48, 4, 36], 'GS4': ['n', 8, 4, 12, 4, 4, 4, 92], 'AS4': ['n', 12, 4, 12, 4, 96], 'F4': ['n', 40, 8, 44, 4, 32], 'CS4': ['n', 56, 8, 16, 4, 44], 'D4': ['n', 104, 8, 4, 4, 8], 'C4': ['n', 112, 4, 12]}

}

/*const musics = {
  "test": 
    {'E5': ['s', 8, 40, 8, 32, 8, 64, 7, 1, 4, 4, 7, 33, 8, 28] }
}*/
const BASE_DURATION_HEIGHT = 8;
const BASE_DURATION_TIME = 0.12;
function createDom(music_name){
  const music = musics[music_name];
  console.log(music);
  const num_code = Object.keys(music).length;
  const music_length = getMusicLength(music);
  let code_index = 1;
  for( let code in music){
    let is_nop = music[code][0] == "n";
    let target_dom = $('.slot' + code_index);

    for(let i = 1; i < music[code].length; i++){
      let appended_dom =$("<div></div>");
      //appended_dom.addClass("t" + music[code][i]);
      appended_dom.css({'height' : BASE_DURATION_HEIGHT * music[code][i] + "px"});
      if(is_nop){
        appended_dom.addClass("n");
      }else{
        appended_dom.addClass("s");
      }
      target_dom.prepend(appended_dom);
      is_nop = !is_nop;
    }
    code_index++;
  }
  let slot_container_dom = $('.slot_container');
  console.log(slot_container_dom);
  console.log(music_length);
  console.log("-" + BASE_DURATION_HEIGHT * music_length + "px");
  slot_container_dom.css({'margin-top' : "-" + BASE_DURATION_HEIGHT * music_length + "px"});
	defineKeyFrame(music_name, music_length);
	playKeyFrame(music_name, music_length);
}
function defineKeyFrame(name, duration){
  $.keyframe.define({
    name: name,
    from: {
        top:"0px"
    },
    to: {
        top: 600 + (BASE_DURATION_HEIGHT * duration) + "px"
    }
  });
}
function playKeyFrame(name, duration){
  $(".slot").playKeyframe({
    name: name, // name of the keyframe you want to bind to the selected element
    //duration: BASE_DURATION_TIME * duration * 1000, // [optional, default: 0, in ms] how long you want it to last in milliseconds
    duration: BASE_DURATION_TIME * duration + "s", // [optional, default: 0, in ms] how long you want it to last in milliseconds
    timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
    delay: '3s', //[optional, default: 0s]  how long you want to wait before the animation starts
    direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow
    fillMode: 'forwards', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
    complete: function(){
		} //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
	});
}
function getMusicLength(music){
  for(let code in music){
    let sum = 0;
    for(let i = 1; i < music[code].length; i++){
      sum += music[code][i];
    }
    return sum;
  }
}

$(document).ready(function(){
	$(".start_button").click(function(){
		let music_name = $(".selected_music").val();
  	createDom(music_name);
	})
});
