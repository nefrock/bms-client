let mapping = ["", "C2","CS2","D2","DS2","E2","F2","FS2","G2","GS2","A2","AS2","B2","C3","CS3","D3","DS3","E3","F3","FS3","G3","GS3","A3","AS3","B3","C4","CS4","D4","DS4","E4","F4","FS4","G4","GS4","A4","AS4","B4","C5","CS5","D5","DS5","E5","F5","FS5","G5","GS5","A5","AS5","B5","C6","CS6","D6","DS6","E6","F6","FS6","G6","GS6","A6","AS6","B6","C7","CS7","D7"];
const musics = {
  "NOKIA": {'E6': ['s', 4, 84], 'D6': ['n', 4, 4, 80], 'FS5': ['n', 8, 8, 72], 'GS5': ['n', 16, 8, 64], 'CS6': ['n', 24, 4, 60], 'B5': ['n', 28, 4, 16, 4, 36], 'D5': ['n', 32, 8, 48], 'E5': ['n', 40, 8, 16, 8, 16], 'A5': ['n', 52, 4, 16, 16], 'CS5': ['n', 56, 8, 24]},
  "GOD_FATHER": {'E4': ['s', 4, 40, 16, 8, 4, 32, 4, 100], 'A4': ['n', 4, 4, 8, 4, 4, 4, 4, 4, 36, 4, 8, 4, 4, 4, 4, 4, 80, 16, 8], 'C5': ['n', 8, 4, 8, 4, 52, 4, 8, 4, 116], 'B4': ['n', 12, 4, 12, 4, 48, 4, 12, 4, 48, 16, 44], 'F4': ['n', 36, 4, 100, 4, 32, 4, 28], 'G4': ['n', 40, 4, 164], 'DS4': ['n', 108, 4, 96], 'D4': ['n', 112, 16, 8, 4, 32, 4, 32], 'GS4': ['n', 144, 4, 32, 4, 24]},
  "PAPRIKA": {'DS4': ['s', 4, 44, 8, 16, 8, 4, 4, 8, 3, 1, 4, 16, 8], 'FS4': ['n', 4, 4, 8, 4, 16, 4, 48, 4, 36], 'GS4': ['n', 8, 4, 12, 4, 4, 4, 92], 'AS4': ['n', 12, 4, 12, 4, 96], 'F4': ['n', 40, 8, 44, 4, 32], 'CS4': ['n', 56, 8, 16, 4, 44], 'D4': ['n', 104, 8, 4, 4, 8], 'C4': ['n', 112, 4, 12]},
  "TETRIS": 
    {'E5': ['s', 8, 40, 8, 32, 8, 64, 7, 1, 4, 4, 7, 33, 8, 28], 'B4': ['n', 8, 4, 16, 4, 32, 7, 1, 4, 116, 7, 1, 4, 48], 'C5': ['n', 12, 4, 8, 4, 16, 4, 12, 4, 12, 4, 16, 8, 68, 4, 12, 4, 12, 4, 16, 8, 20], 'D5': ['n', 16, 8, 32, 4, 20, 8, 44, 8, 44, 4, 20, 8, 36], 'A4': ['n', 32, 7, 1, 4, 60, 6, 2, 12, 108, 7, 1, 12], 'F5': ['n', 140, 4, 12, 4, 92], 'A5': ['n', 144, 8, 100], 'G5': ['n', 152, 4, 96]},
  "DRAGON": 
{'G5': ['s', 48, 80, 48, 60, 4, 68, 68, 152, 2, 56, 12, 54, 6, 32, 6, 84, 4, 136, 4, 70, 31, 1, 3, 1, 4, 12, 4, 66, 31, 1, 3, 1, 4, 44, 47, 1, 6, 60, 12, 28, 8, 8], 'AS5': ['n', 48, 4, 188, 4, 56, 8, 222, 8, 36, 12, 72, 6, 20, 6, 32, 4, 58, 4, 30, 4, 76, 6, 86, 4, 60, 4, 54, 4, 142, 4, 68, 4, 36], 'C6': ['n', 52, 2, 122, 4, 64, 52, 1, 3, 684, 6, 116, 6, 258], 'D6': ['n', 180, 2, 34, 20, 164, 4, 28, 4, 28, 4, 28, 4, 38, 12, 114, 12, 40, 6, 66, 4, 20, 6, 36, 4, 36, 4, 30, 4, 126, 4, 200, 4, 68, 8, 28], 'G6': ['n', 192, 12, 204, 3, 1, 4, 4, 12, 8, 3, 1, 4, 4, 12, 8, 3, 1, 4, 4, 12, 8, 3, 1, 4, 4, 12, 210, 42, 24, 8, 70, 12, 476], 'F6': ['n', 204, 12, 188, 4, 28, 4, 28, 4, 28, 4, 94, 12, 86, 12, 114, 12, 70, 12, 454], 'CS6': ['n', 550, 24, 102, 8, 248, 52, 78, 39, 1, 4, 160, 48, 28, 12, 16], 'E6': ['n', 610, 42, 56, 8, 118, 20, 62, 4, 450], 'A6': ['n', 726, 12, 54, 12, 54, 8, 8, 8, 488], 'AS6': ['n', 866, 8, 496], 'B5': ['n', 924, 4, 442], 'A5': ['n', 1050, 4, 200, 4, 68, 4, 40]},
  "YOBIKOMI": {'A5': ['s', 3, 1, 8, 4, 4, 4, 7, 1, 3, 1, 8, 4, 4, 4, 8, 44, 3, 1, 16, 96, 8, 24], 'B5': ['n', 12, 4, 28, 4, 208], 'FS5': ['n', 20, 4, 28, 4, 24, 12, 4, 12, 36, 16, 16, 16, 24, 8, 16, 8, 8], 'D5': ['n', 64, 3, 1, 3, 1, 4, 16, 4, 32, 3, 1, 3, 1, 4, 20, 3, 1, 3, 1, 4, 32, 4, 48], 'E5': ['n', 76, 4, 60, 4, 28, 4, 16, 3, 1, 3, 1, 4, 4, 8, 32, 8], 'G5': ['n', 232, 8, 16]},
  "FAMISTA": {'G5': ['s', 7, 1, 5, 1, 1, 5, 8, 4, 7, 1, 5, 1, 1, 5, 8, 4, 7, 1, 5, 1, 1, 5, 8, 164], 'B5': ['n', 16, 4, 28, 4, 28, 4, 8, 4, 76, 4, 32, 3, 1, 3, 1, 8, 32], 'D5': ['n', 28, 4, 28, 4, 192], 'D6': ['n', 96, 16, 48, 5, 1, 1, 1, 4, 4, 8, 56, 8, 8], 'DS6': ['n', 120, 8, 128], 'E6': ['n', 128, 5, 1, 1, 1, 4, 4, 8, 104], 'C6': ['n', 140, 4, 48, 3, 1, 3, 1, 8, 48], 'A5': ['n', 224, 7, 1, 5, 1, 2, 16]},
  "FAMISTA": {'G5': ['s', 7, 1, 5, 1, 1, 5, 8, 4, 7, 1, 5, 1, 1, 5, 8, 4, 7, 1, 5, 1, 1, 5, 8, 164], 'B5': ['n', 16, 4, 28, 4, 28, 4, 8, 4, 76, 4, 32, 3, 1, 3, 1, 8, 32], 'D5': ['n', 28, 4, 28, 4, 192], 'D6': ['n', 96, 16, 48, 5, 1, 1, 1, 4, 4, 8, 56, 8, 8], 'DS6': ['n', 120, 8, 128], 'E6': ['n', 128, 5, 1, 1, 1, 4, 4, 8, 104], 'C6': ['n', 140, 4, 48, 3, 1, 3, 1, 8, 48], 'A5': ['n', 224, 7, 1, 5, 1, 2, 16]}

}

/*const musics = {
  "test": 
    {'E5': ['s', 8, 40, 8, 32, 8, 64, 7, 1, 4, 4, 7, 33, 8, 28] }
}*/
const BASE_DURATION_HEIGHT = 8;
const BASE_DURATION_TIME = 0.1;
function createLedBox(code){
  let arr = [];
  arr.push(code & 0b010000 ? "y": "w");
  arr.push(code & 0b001000 ? "y": "w");
  arr.push(code & 0b000100 ? "y": "w");
  arr.push(code & 0b000010 ? "y": "w");
  arr.push(code & 0b000001 ? "y": "w");
  arr.push(code & 0b100000 ? "r": "");
  let appended_dom =$("<div></div>");
  for(let i = 0; i < arr.length; i++){
    appended_dom.append(`<div class="box ${arr[i]}box"></div>`);
  }
  return appended_dom;
}
function createDom(music_name){
  const music = musics[music_name];
  const num_code = Object.keys(music).length;
  const music_length = getMusicLength(music);
  $('.slot').empty();
  let code_index = 1;
  for( let code in music){
    let is_nop = music[code][0] == "n";
    let target_dom = $('.slot' + code_index);
    let led_code = mapping.indexOf(code);
    let led_dom = createLedBox(led_code);
    $(".box-container"+code_index).empty();
    $(".box-container"+code_index).append(led_dom);

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
  slot_container_dom.css({'margin-top' : "-" + (BASE_DURATION_HEIGHT * music_length + 16) + "px"});
	defineKeyFrame(music_name, music_length);
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
  $(".slot").resetKeyframe(function(){})
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
  let createDomWrapper = function() {
		const music_name = $(".selected_music").val();
  	createDom(music_name);
  };
  for( let music_name in musics){
    $(".selected_music").append(`<option value="${music_name}"> ${music_name} </option>`);
  }
  $( ".selected_music" ).change(createDomWrapper);

	$(".start_button").click(function(){
		const music_name = $(".selected_music").val();
    const music = musics[music_name];
    const music_length = getMusicLength(music);
	  playKeyFrame(music_name, music_length);
	})
  createDomWrapper();
});
