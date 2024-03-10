// create carousel
// add icons to post thumbnails

import { useState } from "preact/hooks";

type Media = {
  path: string;
  type: string;
}

type CarouselItemProps = {
  slide: Media;
}

type CarouselProps = {
  slides: Media[];
}

type PostThumbnailProps = {
  content: Media[];
  index: number;
}

type PostProps = {
  content: Media[];
  index: number;
  likes: number;
  caption: string
}

// @ts-ignore
function CarouselControls({prev, next}) {
  return (
    <div>
      <button class="carouselControl left" onClick={prev}>&lt;</button>
      <button class="carouselControl right" onClick={next}>&gt;</button>
    </div>
  );
}

function CarouselItem({slide}: CarouselItemProps) {
  return (
    <div class="carouselItem">
      {slide.type == "photo" && <img src={slide.path} class="carouselItemContent"></img>}
      {slide.type != "photo" && <video autoplay muted class="carouselItemContent"><source src={slide.path}></source></video>}
    </div>
  );
}

// @ts-ignore
function Carousel({slides}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : 0;
    setCurrentSlide(index);
  };

  const next = () => {
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  return (
    <div class="carousel">
      <div class="carouselInner" style={{transform: `translateX(${-currentSlide * 100}%)`}}>
        {
          slides.map((slide, index) => (
            <CarouselItem slide={slide} key={index}></CarouselItem>
          ))
        }
      </div>
      <CarouselControls prev={prev} next={next}></CarouselControls>
    </div>
  );
} 

function PostThumbnail({content, index}: PostThumbnailProps) {
  let onClick = () => {let post = document.getElementById(`post${index}`); post!.style.display = "block"}

  return (
    <div class="postThumbnail">
      {content[0].type == "photo" && <img src={content[0].path} class="thumbnail" onClick={onClick}></img>}
      {content[0].type != "photo" && <video class="thumbnail" preload="metadata" src={content[0].path} onClick={onClick}></video>}
    </div>
  );
}

function Post({content, index, likes, caption}: PostProps) {
  return (
    <div id={"post" + index} class="post">
      <button class="closeButton" onClick={() => {let post = document.getElementById(`post${index}`); post!.style.display = "none"}}>X</button>
      <Carousel slides={content}></Carousel>
      <div class="postInfo">
        <div>
          <img src="images/heart.jpg" class="icon"></img>
          <img src="images/comment.png" class="icon"></img>
        </div>
        <div class="likes">{likes} likes</div>
        <div class="caption">{caption}</div>
      </div>
    </div>
  );
}

export function App() {
  let postContent: Media[][] = [
    [{"path": "posts/quack.png", "type": "photo"}, {"path": "posts/stock.mp4", "type": "video/mp4"}],
    [{"path": "posts/stock.mp4", "type": "video/mp4"}]
  ];

  let postLikes: number[] = [
    123, 45
  ];

  let postCaptions: string[] = [
    "This is a caption", "This is another caption"
  ];

  return (
    <div id="main">
      <div id="profile">
        <img src="images/photo.jpg" id="profilePhoto"></img>
        <div id="profileInfoContainer">
          <div id="profileInfo">
            <div id="usernameContainer">
              <h1>@username</h1>
              <img src="images/checkmark.png" id="checkmark"></img>
            </div>
            <h2># posts &nbsp;&nbsp; # followers &nbsp;&nbsp; # following</h2>
            <h3>Aryan, Carol, Kalista, Nyden</h3>
            <h3>Bio</h3>
          </div>
        </div>
      </div>
      <div id="postThumbnails">
        {postContent.map((content, i) => (
          <PostThumbnail content={content} index={i}></PostThumbnail>
        ))}
      </div>
      <div id="posts">
        {postContent.map((content, i) => (
          <Post content={content} index={i} likes={postLikes[i]} caption={postCaptions[i]}></Post>
        ))}
      </div>
    </div>
  );
}
