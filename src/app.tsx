// create carousel
// add icons to post thumbnails

import { useState } from "preact/hooks";

type Media = {
  path: string;
  type: string;
}

type CarouselIndicatorsProps = {
  number: number,
  current: number,
  //@ts-ignore
  switchIndex
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

function CarouselIndicators({number, current, switchIndex}: CarouselIndicatorsProps) {
  return (
    <div class="carouselIndicators">
      {[...Array(number)].map((_, i) => (
        <button class={`carouselIndicatorItem${current === i ? ' active' : ''}`} onClick={() => switchIndex(i)}></button>
      ))}
    </div>
  );
}

// @ts-ignore
function CarouselControls({prev, next, index, slides}) {
  return (
    <div>
      {index > 0 && <button class="carouselControl left" onClick={prev}>&lt;</button>}
      {index < slides - 1 && <button class="carouselControl right" onClick={next}>&gt;</button>}
    </div>
  );
}

function CarouselItem({slide}: CarouselItemProps) {
  return (
    <div class="carouselItem">
      {slide.type == "photo" && <img src={slide.path} class="carouselItemContent"></img>}
      {slide.type != "photo" && <video autoplay muted class="carouselItemContent"><source src={slide.path} type={slide.type}></source></video>}
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

  const switchIndex = (index: number) => {
    setCurrentSlide(index);
  }

  return (
    <div class="carousel">
      <div class="carouselInner" style={{transform: `translateX(${-currentSlide * 100}%)`}}>
        {
          slides.map((slide, index) => (
            <CarouselItem slide={slide} key={index}></CarouselItem>
          ))
        }
      </div>
      {slides.length > 1 && <CarouselIndicators number={slides.length} current={currentSlide} switchIndex={switchIndex}></CarouselIndicators>}
      <CarouselControls prev={prev} next={next} index={currentSlide} slides={slides.length}></CarouselControls>
    </div>
  );
} 

function PostThumbnail({content, index}: PostThumbnailProps) {
  let onClick = () => {let post = document.getElementById(`post${index}`); post!.style.display = "block"}

  return (
    <div class="postThumbnail">
      {content[0].type == "photo" && <img src={content[0].path} class="thumbnail" onClick={onClick}></img>}
      {content[0].type != "photo" && <video class="thumbnail" preload="metadata" src={content[0].path} onClick={onClick}></video>}
      {content.length > 1 && <img src={"images/multi-post.webp"} class="postIcon"></img>}
      {content.length == 1 && content[0].type != "photo" && <img src={"images/reels-icon.png"} class="postIcon"></img>}
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
        {/* <div class="likes">{likes} likes</div> */}
        <div class="caption" dangerouslySetInnerHTML={{ __html: caption}}></div>
      </div>
    </div>
  );
}

export function App() {
  let postContent: Media[][] = [
    [{"path": "images/milgram.jpg", "type": "photo"}],
    [{"path": "posts/availability-heuristic/1.png", "type": "photo"}, {"path": "posts/availability-heuristic/2.png", "type": "photo"},
    {"path": "posts/availability-heuristic/3.png", "type": "photo"}, {"path": "posts/availability-heuristic/4.PNG", "type": "photo"},
    {"path": "posts/availability-heuristic/5.png", "type": "photo"}, {"path": "posts/availability-heuristic/6.png", "type": "photo"}],
    [{"path": "posts/messaging-post-1/1.png", "type": "photo"}],
    [{"path": "posts/messaging-post-2/1.png", "type": "photo"}],
    [{"path": "posts/messaging-post-3/1.png", "type": "photo"}],
    [{"path": "posts/mindfulness/1.mp4", "type": "video/mp4"}, {"path": "posts/mindfulness/2.mp4", "type": "video/mp4"}, {"path": "posts/mindfulness/3.mp4", "type": "video/mp4"}],
    [{"path": "posts/pluralistic-ignorance/1.png", "type": "photo"}, {"path": "posts/pluralistic-ignorance/2.png", "type": "photo"},
    {"path": "posts/pluralistic-ignorance/3.png", "type": "photo"}, {"path": "posts/pluralistic-ignorance/4.png", "type": "photo"},
    {"path": "posts/pluralistic-ignorance/5.png", "type": "photo"}, {"path": "posts/pluralistic-ignorance/6.png", "type": "photo"},
    {"path": "posts/pluralistic-ignorance/7.png", "type": "photo"}, {"path": "posts/pluralistic-ignorance/8.png", "type": "photo"}],
    [{"path": "posts/text-video/1.mp4", "type": "video/mp4"}]
  ];

  let postLikes: number[] = [
    0, 100, 100, 100, 100, 100, 100, 100, 0
  ];

  let postCaptions: string[] = [
    "Welcome to our group project! We are @milgramsmaniacs and our account is set up to inform you about ways to use social media constructively.<br><br>This first post is just a little guide to outline our project. We have content in the form of graphics and videos, where the main goal is to inform you all about a little social psychology, while also offering suggestions about how you can use social media in a healthier manner. Lots of these are designed as little scenarios and “expectations versus reality” circumstances to really get you to reflect on certain psychological content and how it relates to social media usage. <br><br>Some of the main concepts we focus on are: <br><br>- Pluralistic ignorance: how social media encourages our overestimation of how many people enjoy behaviours that may be harmful, such as dangerous social media challenges and drinking/drugs<br><br>- Peer pressuring: we may feel more inclined to participate in certain activities, given pluralistic ignorance <br><br>- Confirmation bias: how social media reinforces our pre-existing beliefs and biases<br><br>- Self-esteem/self-worth: how social media can lower our self-esteem, as we tend to make upward comparisons to others<br><br>- Availability heuristics and correspondence bias: related to self-esteem, we tend to make comparisons of our lives to others and start feeling badly about our social circle or achievements based on what we see on social media <br><br>Aside from the negatives of social media, we also highlight some ways to use the internet positively. If you notice on our website, we have omitted the follower and like counts, as this could cause some distress on regular social media accounts. We've also included posts on mental health checklists and suggestions of healthy activities aside from social media. <br><br>We hope you enjoy some healthy doom-scrolling through our account!",
    "caption",
    "In this scenario, someone is being invited to a St. Patrick's Day party with friends, in which alcohol is involved. While sometimes these events can be fun when enjoyed in a safe manner, the person seems hesitant to go.<br><br>Pluralistic ignorance is a phenomenon in social psychology in which a person may say or behave in a way that contradicts what they actually believe, because they overestimate the number of people who endorse these behaviours.<br><br>Social media can even enhance this, as we are subject to seeing everyone else's idea of a good time (or so we think).<br><br>Based on this situation, what do you think? Is this person displaying pluralistic ignorance, and were they convinced to go on the basis of having content to post on their social media? ",
    "Going back to the idea of pluralistic ignorance, this is definitely a more problematic form of this idea. Not only does social media appear to endorse some dangerous behaviours, these online challenges spread quickly to others and encourage them to participate (Falgoust et al., 2022).<br><br>Let's take a second to reflect. Why exactly do we think that everyone enjoys these social media challenges? Is it solely for the popularity and numbers in likes and follows, in a way that boosts our self esteem through gratification? Even if it does boost self-esteem in some ways, there are always dislikes and hate comments that target the subject. The gains in numbers might not even be in our best interests…do you actually have a positive and/or personal connection with each and every like and follow?<br><br>Before you even hit post next time, think about the repercussions of your actions; not even solely to preserve your own self-esteem and self-worth, but also in the interests of others in this endless cycle of social media challenges.",
    "We're dealing with a conversation between people who are aware of an individual who died attempting this online challenge. Knowing this information, one person seems hesitant to proceed, but the other person coaxes them into it by saying other people haven't had issues with the challenge.<br><br>This not only displays pluralistic ignorance, but also the idea of confirmation bias in psychology. Confirmation bias occurs on an individual basis, when there is a tendency towards favouring incoming information that confirms one's existing knowledge and beliefs.<br><br>Here, the individual is basing their belief (that nothing will go wrong doing the Blackout Challenge) by recalling only the posts where no long term harm was done, and ignoring examples such as news where an individual ended up passing away. This phenomenon creates a huge potential for the spread of misinformation. In this context, they are misinformed about the actual risks that come from this challenge, by actively seeking out more examples that support that they could even gain fame from attempting this challenge. <br><br>Do you think you have fallen victim to this bias? The thing is, everyone is subjected to bias. However, it's more about how we deal with it. The problem is, social media often reinforces confirmation bias, by producing targeted ads and posts. We should all make an attempt to reduce our confirmation bias, by being more open to new information that might oppose our current knowledge and beliefs even if it makes us uncomfortable!",
    "caption",
    "caption",
    "caption"
  ];

  return (
    <div id="main">
      <div id="profile">
        <img src="images/milgram.jpg" id="profilePhoto"></img>
        <div id="profileInfoContainer">
          <div id="profileInfo">
            <div id="usernameContainer">
              <h1>@milgramsmaniacs</h1>
              <img src="images/checkmark.png" id="checkmark"></img>
            </div>
            <h2>{postContent.length} posts &nbsp;&nbsp; 🤷‍♂️ followers &nbsp;&nbsp; 🤷‍♂️ following</h2>
            <h3>Aryan, Carol, Kalista, Nyden</h3>
            <h3>Using social psychology concepts to foster healthy social media use</h3>
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
          <Post content={content} index={i} likes={0} caption={postCaptions[i]}></Post>
        ))}
      </div>
    </div>
  );
}
