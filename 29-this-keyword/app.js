// This Keyword
//method -> obj
//function -> global(window , global)

//method -> obj

const video = {
  title: 'a',
  play() {
    console.log(this);
  },
};

//we should invoke video();
//stop is a method in video
video.stop = function () {
  console.log(this);
};

video.stop();

//-------------------------------------

function playVideo() {
  console.log(this);
}

playVideo();

//-----------------------------------

//using Constructor

function Video(title) {
  this.title = title;
  console.log(this);
}

//use keyword new to create a new object in constructor
const v = new Video('shashi'); //{}

//------------------------------------

const videos = {
  title: 'a',
  tags: ['z', 'x', 'c'],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

videos.showTags();
