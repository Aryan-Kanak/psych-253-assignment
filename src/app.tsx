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
      {slide.type != "photo" && <video autoplay muted controls loop class="carouselItemContent"><source src={slide.path} type={slide.type}></source></video>}
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

function Post({content, index, caption}: PostProps) {
  let onClick = () => {
    let post = document.getElementById(`post${index}`);
    post!.style.display = "none";
    let video : Element | null = document.querySelector(`#post${index} video`);
    if (video) {
      (video as HTMLMediaElement).pause();
    }
  };

  return (
    <div id={"post" + index} class="post">
      <button class="closeButton" onClick={onClick}>X</button>
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
    [{"path": "posts/intro-post/1.png", "type": "photo"}],
    [{"path": "posts/availability-heuristic/1.png", "type": "photo"}, {"path": "posts/availability-heuristic/2.png", "type": "photo"},
    {"path": "posts/availability-heuristic/3.png", "type": "photo"}, {"path": "posts/availability-heuristic/4.PNG", "type": "photo"},
    {"path": "posts/availability-heuristic/5.png", "type": "photo"}, {"path": "posts/availability-heuristic/6.png", "type": "photo"}],
    [{"path": "posts/messaging-post-1/1.png", "type": "photo"}],
    [{"path": "posts/messaging-post-2/1.png", "type": "photo"}],
    [{"path": "posts/messaging-post-3/1.png", "type": "photo"}],
    [{"path": "posts/mindfulness/1.gif", "type": "photo"}, {"path": "posts/mindfulness/2.jpg", "type": "photo"},
    {"path": "posts/mindfulness/3.gif", "type": "photo"}, {"path": "posts/mindfulness/4.jpg", "type": "photo"},
    {"path": "posts/mindfulness/5.jpg", "type": "photo"}],
    [{"path": "posts/pluralistic-ignorance/1.png", "type": "photo"}, {"path": "posts/pluralistic-ignorance/2.png", "type": "photo"},
    {"path": "posts/pluralistic-ignorance/3.png", "type": "photo"}, {"path": "posts/pluralistic-ignorance/4.png", "type": "photo"},
    {"path": "posts/pluralistic-ignorance/5.png", "type": "photo"}, {"path": "posts/pluralistic-ignorance/6.png", "type": "photo"},
    {"path": "posts/pluralistic-ignorance/7.png", "type": "photo"}, {"path": "posts/pluralistic-ignorance/8.png", "type": "photo"}],
    [{"path": "posts/text-video/1.mp4", "type": "video/mp4"}],
    [{"path": "posts/nyden-reel/1.mp4", "type": "video/mp4"}],
    [{"path": "posts/confirmation-bias/1.png", "type": "photo"}, {"path": "posts/confirmation-bias/2.png", "type": "photo"},
    {"path": "posts/confirmation-bias/3.png", "type": "photo"}, {"path": "posts/confirmation-bias/4.png", "type": "photo"},
    {"path": "posts/confirmation-bias/5.png", "type": "photo"}, {"path": "posts/confirmation-bias/6.png", "type": "photo"},
    {"path": "posts/confirmation-bias/7.png", "type": "photo"}, {"path": "posts/confirmation-bias/8.png", "type": "photo"}],
    [{"path": "posts/self-esteem/1.jpg", "type": "photo"}, {"path": "posts/self-esteem/2.jpg", "type": "photo"},
    {"path": "posts/self-esteem/3.jpg", "type": "photo"}, {"path": "posts/self-esteem/4.gif", "type": "photo"},
    {"path": "posts/self-esteem/5.jpg", "type": "photo"}, {"path": "posts/self-esteem/6.gif", "type": "photo"},
    {"path": "posts/self-esteem/7.jpg", "type": "photo"}, {"path": "posts/self-esteem/8.jpg", "type": "photo"}],
    [{"path": "posts/social-media/1.png", "type": "photo"}, {"path": "posts/social-media/2.png", "type": "photo"},
    {"path": "posts/social-media/3.png", "type": "photo"}, {"path": "posts/social-media/4.png", "type": "photo"},
    {"path": "posts/social-media/5.png", "type": "photo"}, {"path": "posts/social-media/6.png", "type": "photo"},
    {"path": "posts/social-media/7.png", "type": "photo"}, {"path": "posts/social-media/8.png", "type": "photo"}],
    [{"path": "posts/enhance-self-esteem/1.png", "type": "photo"}, {"path": "posts/enhance-self-esteem/2.png", "type": "photo"},
    {"path": "posts/enhance-self-esteem/3.png", "type": "photo"}, {"path": "posts/enhance-self-esteem/4.png", "type": "photo"},
    {"path": "posts/enhance-self-esteem/5.png", "type": "photo"}],
    [{"path": "posts/wellness-and-esteem/1.png", "type": "photo"}, {"path": "posts/wellness-and-esteem/2.png", "type": "photo"},
    {"path": "posts/wellness-and-esteem/3.png", "type": "photo"}, {"path": "posts/wellness-and-esteem/4.png", "type": "photo"},
    {"path": "posts/wellness-and-esteem/5.gif", "type": "photo"}],
    [{"path": "posts/for-wellbeing/1.png", "type": "photo"}, {"path": "posts/for-wellbeing/2.png", "type": "photo"},
    {"path": "posts/for-wellbeing/3.png", "type": "photo"}, {"path": "posts/for-wellbeing/4.png", "type": "photo"},
    {"path": "posts/for-wellbeing/5.png", "type": "photo"}, {"path": "posts/for-wellbeing/6.png", "type": "photo"},
    {"path": "posts/for-wellbeing/7.png", "type": "photo"}, {"path": "posts/for-wellbeing/8.png", "type": "photo"},
    {"path": "posts/for-wellbeing/9.png", "type": "photo"}],
    [{"path": "posts/cbt/1.png", "type": "photo"}, {"path": "posts/cbt/2.png", "type": "photo"},
    {"path": "posts/cbt/3.png", "type": "photo"}, {"path": "posts/cbt/4.png", "type": "photo"},
    {"path": "posts/cbt/5.png", "type": "photo"}],
    [{"path": "posts/wellness-and-encouragement/1.png", "type": "photo"}, {"path": "posts/wellness-and-encouragement/2.png", "type": "photo"},
    {"path": "posts/wellness-and-encouragement/3.png", "type": "photo"}, {"path": "posts/wellness-and-encouragement/4.png", "type": "photo"},
    {"path": "posts/wellness-and-encouragement/5.png", "type": "photo"}, {"path": "posts/wellness-and-encouragement/6.png", "type": "photo"},
    {"path": "posts/wellness-and-encouragement/7.png", "type": "photo"}, {"path": "posts/wellness-and-encouragement/8.png", "type": "photo"}],
    [{"path": "posts/upwards-comparison-reel/1.mp4", "type": "video/mp4"}],
    [{"path": "posts/six-mindfulness-exercises/1.png", "type": "photo"}, {"path": "posts/six-mindfulness-exercises/2.png", "type": "photo"},
    {"path": "posts/six-mindfulness-exercises/3.png", "type": "photo"}, {"path": "posts/six-mindfulness-exercises/4.png", "type": "photo"},
    {"path": "posts/six-mindfulness-exercises/5.png", "type": "photo"}, {"path": "posts/six-mindfulness-exercises/6.png", "type": "photo"},
    {"path": "posts/six-mindfulness-exercises/7.gif", "type": "photo"}, {"path": "posts/six-mindfulness-exercises/8.gif", "type": "photo"}],
    [{"path": "posts/social-media-2/1.png", "type": "photo"}, {"path": "posts/social-media-2/2.png", "type": "photo"},
    {"path": "posts/social-media-2/3.png", "type": "photo"}, {"path": "posts/social-media-2/4.png", "type": "photo"},
    {"path": "posts/social-media-2/5.png", "type": "photo"}, {"path": "posts/social-media-2/6.png", "type": "photo"},
    {"path": "posts/social-media-2/7.png", "type": "photo"}, {"path": "posts/social-media-2/8.png", "type": "photo"},
    {"path": "posts/social-media-2/9.png", "type": "photo"}]
  ];

  let postCaptions: string[] = [
    "Welcome to our group project! We are @milgramsmaniacs and our account is set up to inform you about ways to use social media constructively.<br><br>This first post is just a little guide to outline our project. We have content in the form of graphics and videos, where the main goal is to inform you all about a little social psychology, while also offering suggestions about how you can use social media in a healthier manner. Lots of these are designed as little scenarios and “expectations versus reality” circumstances to really get you to reflect on certain psychological content and how it relates to social media usage. <br><br>Some of the main concepts we focus on are: <br><br>- Pluralistic ignorance: how social media encourages our overestimation of how many people enjoy behaviours that may be harmful, such as dangerous social media challenges and drinking/drugs<br><br>- Peer pressuring: we may feel more inclined to participate in certain activities, given pluralistic ignorance <br><br>- Confirmation bias: how social media reinforces our pre-existing beliefs and biases<br><br>- Self-esteem/self-worth: how social media can lower our self-esteem, as we tend to make upward comparisons to others<br><br>- Availability heuristics and correspondence bias: related to self-esteem, we tend to make comparisons of our lives to others and start feeling badly about our social circle or achievements based on what we see on social media <br><br>Aside from the negatives of social media, we also highlight some ways to use the internet positively. If you notice on our website, we have omitted the follower and like counts, as this could cause some distress on regular social media accounts. We've also included posts on mental health checklists and suggestions of healthy activities aside from social media. <br><br>We hope you enjoy some healthy doom-scrolling through our account!",
    "Unfortunately, a great proportion of peoples' perception of others is warped by the use of social media. In a study by Chou and Edge, there was a strong correlation between the amount of time an individual spent on social media and their own unhappiness with their own lives. This was measured using a survey, in which participants with high amounts of Facebook usage were more likely to indicate that others were happier than they were, life was unfair and that others had better lives even if they did not know their Facebook 'friends' personally. <br><br>This study was conducted in 2012! Think about the surge of social media since then, in the form of Instagram, Snapchat, TikTok, BeReal and more. In a time where posting is the norm (where everyone wants to put their best selves forward), how can we differentiate between reality and what other people want us to see/believe? <br><br>To reduce the negative effects of availability heuristic and correspondence bias from social media, we can:<br><br>Be more mindful of the amount of time we spend on social media<br><br>Spend more time with actual friends and family<br><br>Keep in mind that everyone is only posting the positive aspects of their lives! We don't know what is going on behind the camera, and we should refrain from making judgements about their lives (subsequently, refrain from comparing our own lives to theirs)<br><br>References<br><br>Chou, H.T.G., Edge, N. (2012). “They are happier and having better lives than I am”: The impact of using Facebook on perceptions of others' lives. Cyberpsychology, Behaviour, and Social Networking, 15(2). https://doi.org/10.1089/cyber.2011.0324/.",
    "In this scenario, someone is being invited to a St. Patrick's Day party with friends, in which alcohol is involved. While sometimes these events can be fun when enjoyed in a safe manner, the person seems hesitant to go.<br><br>Pluralistic ignorance is a phenomenon in social psychology in which a person may say or behave in a way that contradicts what they actually believe, because they overestimate the number of people who endorse these behaviours.<br><br>Social media can even enhance this, as we are subject to seeing everyone else's idea of a good time (or so we think).<br><br>Based on this situation, what do you think? Is this person displaying pluralistic ignorance, and were they convinced to go on the basis of having content to post on their social media? ",
    "Going back to the idea of pluralistic ignorance, this is definitely a more problematic form of this idea. Not only does social media appear to endorse some dangerous behaviours, these online challenges spread quickly to others and encourage them to participate (Falgoust et al., 2022).<br><br>Let's take a second to reflect. Why exactly do we think that everyone enjoys these social media challenges? Is it solely for the popularity and numbers in likes and follows, in a way that boosts our self esteem through gratification? Even if it does boost self-esteem in some ways, there are always dislikes and hate comments that target the subject. The gains in numbers might not even be in our best interests…do you actually have a positive and/or personal connection with each and every like and follow?<br><br>Before you even hit post next time, think about the repercussions of your actions; not even solely to preserve your own self-esteem and self-worth, but also in the interests of others in this endless cycle of social media challenges.<br><br>References<br><br>Falgoust, G., Winterlind, E., Moon, P., Parker, A., Zinzow, H., & Madathil, K. Applying the uses and gratifications theory to identify motivational factors behind young adult's participation in viral social media challenges on TikTok. Human Factors in Healthcare, 2. https://doi.org/10.1016/j.hfh.2022.100014.",
    "We're dealing with a conversation between people who are aware of an individual who died attempting this online challenge. Knowing this information, one person seems hesitant to proceed, but the other person coaxes them into it by saying other people haven't had issues with the challenge.<br><br>This not only displays pluralistic ignorance, but also the idea of confirmation bias in psychology. Confirmation bias occurs on an individual basis, when there is a tendency towards favouring incoming information that confirms one's existing knowledge and beliefs.<br><br>Here, the individual is basing their belief (that nothing will go wrong doing the Blackout Challenge) by recalling only the posts where no long term harm was done, and ignoring examples such as news where an individual ended up passing away. This phenomenon creates a huge potential for the spread of misinformation. In this context, they are misinformed about the actual risks that come from this challenge, by actively seeking out more examples that support that they could even gain fame from attempting this challenge. <br><br>Do you think you have fallen victim to this bias? The thing is, everyone is subjected to bias. However, it's more about how we deal with it. The problem is, social media often reinforces confirmation bias, by producing targeted ads and posts. We should all make an attempt to reduce our confirmation bias, by being more open to new information that might oppose our current knowledge and beliefs even if it makes us uncomfortable!",
    "This post contains mindfulness-based stress reduction interventions such as deep breathing exercises and using  self-compassion to improve negative well-being (particularly depression) associated with pluralistic ignorance from upward social comparisons and envy from social-media use which have a “marked negative impact on well-being” (Carraturo et al., 2023). Self-esteem is covered in Module 5: The Self.<br><br>Reference:<br><br>Carraturo, F., Di Perna, T., Giannicola, V., Nacchia, M.A., Muzii, B., Bottone, M., Sperandeo, R., Bochicchio, V., Maldonato, N.M., Scandurra, C. (2023). Envy, social comparison, and depression on social networking sites: a systematic review”. European Journal of Investigation in Health, Psychology and Education, 2023, Feb; 13(2): 364-376. https://doi.org/10.3390/ejihpe/13020027.", // mindfulness
    "References:<br><br>Sergeant, R. K., Newman, L. S., Pluralistic Ignorance Research in Psychology: A Scoping Review of Topic and Method Variation and Directions for Future Research. Review of General Psychology, 25(2):108926802199516. https:doi.org/10.1177/1089268021995168.<br><br>Andrade, F. C., Erwin, S., Burnell, K., Jackson, J., Storch, M., Nicholas, J., and Zucker, N. “Intervening on Social Comparisons on Social Media: Electronic Daily Diary Pilot Study”. JMIR Mental Health, (2023); 10: e42024. http//doi.org/10.2196/42024.", // pluralistic ignorance
    "This video shows that one of the students thinks the group norm at university/college parties is to drink a lot of shots of alcohol, and he is talking about conforming with that norm, even though he doesn’t really want to drink alcohol. His friend who is apparently more self-assured and likely has high self-esteem is going to take non-alcoholic beer to the party. He tells his friend who claims he will drink as many shots as everyone else does (group conformity) about the Prentice and Miller study from 1993. The friend couldn’t believe that people would do something differently than they wanted to do, because they misperceived the group norm – even though it applied to him as well. After considering the pluralistic ignorance phenomenon, he decided to take non-alcoholic beer to the party too (Module 3 and Prentice et al., 1993).<br><br>Not mentioning privately-held beliefs that are wrongly assumed to be counter to what is thought to be the group norm was studied by Pew Research, and they coined the term “spiral of silence” (Module 3 and Hampton et al., 2014). <br><br>References:<br><br>Hampton, K., Rainie, L., Lu, W., Dwyer, M., Shin, I., Purcell, K. (2014). “Social media and the ‘spiral of silence’ “. Hampton, K.N., Rainie, L., Lu, W., Dwyer, M., Shin, I., & Purcell, K. (2014). “Social Media and the ‘Spiral of Silence.’ Pew Research Center, Washington, DC. http://www.pewinternet.org/2014/08/26/social-media-and-the-spiral-of-silence/<br><br>Prentice, D. A., Miller, D. T. (1993). “Pluralistic ignorance and alcohol use on campus: Some consequences of misperceiving the social norm”. Journal of Personality and Social Psychology, 64(2), 243–256. https://doi.org/10.1037/0022-3514.64.2.243.",
    "This video is a fun little demonstration of how people portray their lives differently on social media versus in real life. It also involves the idea of availability heuristics and their impact on our judgements and assumptions.<br><br>Availability heuristics involve when things that are highly accessible to our minds, such as things that we see often, influence our judgements and we make assumptions about an individual or situation (Module 4). When people are exposed to others’ “best selves” as presented on social media, we start to believe that their lives are much more interesting than our own, simply because we are only observing the positive aspects of this individual’s life (Chou & Edge, 2012). This video gives you both what is portrayed online, and therefore highly accessible to your mind, versus the reality of the person's life. It serves to show that you cannot always believe what you see on social media. This potential bias from this heuristic needs to be recognized and avoided so that you can have a proper perception of yourself and others, as well as the world around you. <br><br>As a Milgram’s Maniacs follower, we trust that you will always question what you see on the internet, and do your own research before you create an assumption or assumption. Stay vigilant against this bias and others. Now that you are aware of availability heuristics, see if you can spot discrepancies between the online and real versions of peoples lives that you know, and try to come up with how the availability heuristic might play a part in your perceptions of them had you not been made aware of its effects. <br><br>References:<br><br>Chou, H.T.G., Edge, N. (2012). “They are happier and having better lives than I am”: The impact of using Facebook on perceptions of others’ lives. Cyberpsychology, Behaviour, and Social Networking, 15(2). https://doi.org/10.1089/cyber.2011.0324/.",
    "Confirmation bias might be something that you have been made aware of in the past, or maybe it is a new concept for you. It is a very common bias, and for those who were not aware of it before, you might notice that it is found everywhere, and may even influence people in your closest social circle.<br><br>Confirmation bias occurs when there is a tendency towards assimilation in social schemas; people actively seek out and favor information that confirms existing knowledge and beliefs (Module 4). Social media not only provides these resources to the individual, but also encourages it, by limiting your exposure to things that it believes you like or are interested in, allowing you to see information that fits your existing beliefs, assimilate it into your knowledge, and sometimes even selectively influencing your memory on that topic. <br><br>How can we as the user counteract the effects of confirmation bias, if it is so widespread? The first concept involves disconfirmation tasks. This is when you develop critical questions and counter arguments to your opinions (Wittebols, 2020). This process not only makes the individual uncomfortable, but also provokes thoughts on their opinion that may lead them to broaden their mindset and explore alternatives (Wittebols, 2020). As well, even the idea of educating people on the effects and nature of this bias has proven beneficial to making people more open minded, and less likely to assimilate false information into their beliefs (Wittebols, 2020). <br><br>We have attempted to provide you with as much information about confirmation bias as we can in this intervention post, so that hopefully even just the awareness of it will allow you to question your pre-existing beliefs and think a little before you decide if something is true, or if it is only easy to believe that it is true because it fits what you already think is true. <br><br>Stay Strong Maniacs! #SayNoToBiases #ThinkFirst<br><br>References:<br><br>Wittebols, James H. (2020). Transforming Confirmation Bias to Generate Critical Consciousness in News/Information Literacy and Social Science Courses. The Canadian Journal for the Scholarship of Teaching and Learning, 11 (2). ",
    "This post is part of the actual intervention for feeling down from social comparisons and to improve the reduced wellbeing that is correlated with social media. The pages in this post relate to positivity, self-esteem enhancement, self-care, and overall increasing wellbeing. The purpose of these pages, in part, is to show positive content to counteract the social-media user’s negative thoughts and their diminished self-worth that is associated partly with pluralistic ignorance and partly from the reduction of spending time on positive activities and in-person social friendships in favour of social media.<br><br>References:<br><br>Andrade, F. C., Erwin, S., Burnell, K., Jackson, J., Storch, M., Nicholas, J., and Zucker, N. “Intervening on Social Comparisons on Social Media: Electronic Daily Diary Pilot Study”. JMIR Mental Health, (2023); 10: e42024. http//doi.org/10.2196/42024.<br><br>Carraturo, F., Di Perna, T., Giannicola, V., Nacchia, M.A., Muzii, B., Bottone, M., Sperandeo, R., Bochicchio, V., Maldonato, N.M., Scandurra, C. (2023). Envy, social comparison, and depression on social networking sites: a systematic review”. European Journal of Investigation in Health, Psychology and Education, 2023, Feb; 13(2): 364-376. https://doi.org/10.3390/ejihpe/13020027.", // self-esteem
    "The reference below is for the slide that says social media can reduce wellbeing. Specifically the reference says that social media for teens can have “negative psychological outcomes”. The “Set Your Own Limits” part of the name was chosen in reference to the topic of normative cultural influence in Module 3 which (roughly paraphrased) says that in our individualistic culture we don’t like being told what to do.<br><br>Reference:<br><br>Allen, K.A, Ryan, T., Gray D.L., McInerney, D.M, Waters, L. (2014).“Adolescents: the positives and the potential pitfalls”. The Educational and Developmental Psychologist, Vol 31, Issue 1, July, 2014, abstract. https://doi.org.10.1017/edp.2014.2.",
    "These slides show a cell phone on the front page which is for a mock intervention by Milgram’s Maniacs. There is also a page that shows a mock podcast for helping people to be aligned with their beliefs and values. Again, these mock media posts are ideas to counteract the low-self esteem that teenage users will likely have if they make an upward comparison of their lives with other people’s lives who they think are more fun or ‘better’ than theirs.. As well, lower self-esteem has been implicated with spending over two hours a day on social media. Much research has been done to correlate pluralistic ignorance from comparisons to diminished self esteem.<br><br>Reference:<br><br>Chou, H-T, G., and Edge, N (2012). “They are Happier and Having Better Lives than I am”. Cyberpsychology, Behavior and Social Networking, Mary-Ann Liebert Inc., Feb 1, 2012. https://doi.org/10.1089/cyber.2011.0324.", // enchance-self-esteem
    "Art and play are suggestions made on these slides, so social media users’ will think of other leisure ideas rather than social media. The abstract for the pertinent study by Twenge et al. (2017) indicates that teenagers are spending more time on “new media” and less time on non-screen practical activities that help to prevent or alleviate depressive symptoms.<br><br>Reference:<br><br>Twenge, J. M., Joiner, T. E., Martin, G. N., et al. (2017). Increases in Depressive Symptoms, Suicide-Related Outcomes, and Suicide Rates Among U.S. Adolescents After 2010 and Links to Increased New Media Screen Time. Clinical Psychological Science (3):216770261772337. http://doi.org/http://dx.doi.org/10.1177/2167702617723376.", // wellness-and-esteem
    "The slides in the post are an assortment of intervention ideas to reduce the negative moods of the teenage social media user.  These pages promote fun and uplifting ideas such as creativity, curiosity, compassion and kindness.<br><br>Reference:<br><br>Carraturo, F., Di Perna, T., Giannicola, V., Nacchia, M.A., Muzii, B., Bottone, M., Sperandeo, R., Bochicchio, V., Maldonato, N.M., Scandurra, C. (2023). Envy, social comparison, and depression on social networking sites: a systematic review”. European Journal of Investigation in Health, Psychology and Education, 2023, Feb; 13(2): 364-376. https://doi.org/10.3390/ejihpe/13020027.", // for-wellbeing
    "As an intervention for any problematic social-media use, Cognitive Behavioural Therapy (CBT) was found to work better than shortening the time on social media or staying away from it completely. A systematic review of the literature (83% of the studies) showed that CBT was especially helpful to increase mental well-being associated with social-media use (Plackett et al., 2023).<br><br>Reference:<br><br>Plackett, R., Blyth, A., Shartau, P. (2023). “The impact of social media use interventions on mental well-being: systematic review”. Journal of Medical Internet Research, 2023 Aug 11:25:e44922. https://doi.org/10.2196/44922.",
    "Generally speaking, after 2010, the rates of teenagers’ depressive moods and suicide rates have increased. The study reference shown below (Twenge et al., 2017) attributes this rise to teenagers spending more time on “new media”, meaning social media.<br><br>Twenge et al. found that adolescents were spending time on social media to the point that it prevented them from experiencing the positive aspects of life such as spending time with friends in person, getting exercise, and doing homework. This shift in social media taking the place of more positive experiences was ascertained to attribute to the rise in the teenagers’ mental health unwellness.<br><br>This reference is also attributed to many of our intervention posts in this assignment.<br><br>The intervention slides in this post include “growth mindset”, positivity and encouragement which are for diverting the attention away from social media and onto a more positive trajectory. As well, the slides are to increase self-esteem and positive content.<br><br>References:<br><br>Twenge, J. M., Joiner, T. E., Martin, G. N., et al. (2017). Increases in Depressive Symptoms, Suicide-Related Outcomes, and Suicide Rates Among U.S. Adolescents After 2010 and Links to Increased New Media Screen Time. Clinical Psychological Science (3):216770261772337. http://doi.org/http://dx.doi.org/10.1177/2167702617723376.<br><br>Rosenthal, S. R., Tobin, A. P. (2022). Self-esteem only goes so far: the moderating effect of social media screen time on self-esteem and depressive symptoms. Behavior, Information Technology. 2023; 42(15): 2688-2695. http://doi.org/10.1080/0144929x.2022.2139759.", // wellness-and-encouragement
    "This short reel aims to provide you with a brief explanation about upward comparison, its impact on self-esteem, common examples of upwards comparison, and most importantly, how to break out of a cycle of upwards comparison. <br><br>The concept of upward social comparisons involves comparing yourself to others who are better off than you are (Module 5). This can be especially prominent on social media, where people often alter their lives and showcase the best possible version of themselves that they can create. Constant comparison with people who you see as being happier or living better lives than you is often linked to feeling much worse about yourself, and increased depressive symptoms are common in those who get trapped in this mindset (Module 5). Being able to identify when you are making an upward comparison, and how to break free from the cycle, are important skills we would like to pass on to you through this video.<br><br>The second you recognize that you are experiencing negative self-esteem in relation to an upward comparison, it is important to take steps to change this mindset. The main intervention method for this habit is known as social savoring. Social savoring can be broken down into three main areas: reminiscing, moment, and anticipating. These domains involve thinking positively about past experiences relating to what is bringing you down, thinking positively about what is happening in the moment, and anticipating what positive experiences could come from this in the future (Kilbert et al., 2022). This has been proven effective by a study from Andrade, F. et al., who found that self-esteem decrease from social comparisons was improved through these savoring methods. Things like giving yourself the compassion and gratitude you deserve, limiting exposure to negative social media posts, and focussing on your own achievements all help sustain these positive emotions.<br><br>Keeping an eye out for social comparisons and staying positives are the key to keep your social media mindset at a #MilgramManiacs approved level.<br><br>References:<br><br>Andrade, F., Erwin, S., Burnell, K., Jackson, J., Storch, M., Nicholas, J., & Zucker, N. Intervening on Social Comparisons on Social Media: Electronic Daily Diary Pilot Study. JMIR Ment Health, 10. doi: 10.2196/42024.<br><br>Erng2009. (n.d.). Woman scrolling smartphone touchscreen on social online communication. Free Video. [Video]. Vecteezy. https://www.vecteezy.com/video/3221810-woman-scrolling-smartphone-touchscreen-on-Social-online-communication.<br><br>Kilbert, J., Sturz, B., LeLeux-LaBarge, K., Hatton, A., Smalley, K., & Warren, J. Savoring Interventions Increase Positive Emotions After a Social-Evaluative Hassle. Front. Psychol., 20(13). https://doi.org/10.3389/fpsyg.2022.791040.<br><br>Modeonstock. (n.d.). Making Diet Food Kitchen Free Video. [Video]. Vecteezy. https://www.vecteezy.com/video/23272293-making-diet-food-kitchen.<br><br> Pingpongchaphoto. (n.d.). Serious stress, business man sitting in office, Problem in working Free Video. [Video]. Vecteezy. https://www.vecteezy.com/video/14854952-serious-stress-business-man-sitting-in-office-problem-in-working. <br><br>Vadosloginov. (n.d.). Fitness girl trains outdoors Free Video. [Video]. Vecteezy. https://www.vecteezy.com/free-videos/people-running.",
    "This set of slides contains mindfulness-based stress reduction (MBSR) and other related ‘therapy interventions’ that put people in touch with their own ‘self’ and how they feel emotionally and bodily. The slides include self concepts such as mindfulness for ‘noticing the breath’, deep breathing exercises for relaxing the muscles; and  ‘mindful awareness’ of the present-moment self and the surrounding environment.<br><br>The purpose of these slides are for the social-media users’ attention to be on themselves and the present moment rather than ruminating and obsessing about what everyone else is doing. These concepts are to resolve teenagers’ experience of the fear of missing out (FOMO) which will keep them constantly monitoring social media on their cell phones.<br><br>Trying to cut back on cell phone use doesn’t work, and may lead to teens having an even greater  awareness of their cell phones and social media. Our entire intervention concept is to take the teenager’s attention off of everyone else and put the attention on him or herself in the present moment and on his or her dreams and aspirations for the future. These are the experiences which each teenager can control.<br><br>References:<br><br>Carraturo, F., Di Perna, T., Giannicola, V., Nacchia, M.A., Muzii, B., Bottone, M., Sperandeo, R., Bochicchio, V., Maldonato, N.M., Scandurra, C. (2023). Envy, social comparison, and depression on social networking sites: a systematic review”. European Journal of Investigation in Health, Psychology and Education, 2023, Feb; 13(2): 364-376. https://doi.org/10.3390/ejihpe/13020027.", // six-mindfulness-exercises
    "The research into social-media use shows some interesting paradoxical conclusions. One study may show that  “social media is good for self esteem” and another study might show  “social media is bad for self esteem”.<br><br>Another study might show that negative outcomes are associated with the amount of time spent on the internet – and another study might show that negative outcomes are associated with the [lack of] quality of the social media’s content that a person sees rather than the quantity of time spent using it.<br><br>Another paradox is that one study will say that too much social media can lead to poor wellbeing/mental health outcomes and another study will say that people go on social media in the first place because they are feeling down, and they are using it to try to feel better.<br><br>Yet another study would say that the negative outcomes associated with social media use could be relative to the degree of neuroticism (meaning part of the personality) of the user. <br><br>Yet another study will say that it is social media that is to blame for people to feel envy because others’ lives seem better than theirs, but other literature will show that the vast majority of people assume that others’ lives are better than theirs, even if they don’t use social media.<br><br>I would assume that at least a few factors come into play including quality of content, length of time spent and mood of the user. I think that many factors are combined to create the user’s experience of social media.<br><br>What can be agreed upon is that more research is required to determine how using social media affects the people who use it. I think likely the factors mentioned plus additional factors not yet studied would create a complex interplay of variables/factors in each teenager’s experience of social media.<br><br>References:<br><br>Allen, K. A., Ryan, T. & Grey, D. L. (2014). Social media use and social connectedness in adolescents: The positives and the potential pitfalls. The Educational and Developmental Psychologist, 31(1), 18-31. https:doi.org/10.1017/edp.2014.2  <br><br>Andrade, F. C., Erwin, S., Burnell, K., Jackson, J., Storch, M., Nicholas, J., and Zucker, N. “Intervening on Social Comparisons on Social Media: Electronic Daily Diary Pilot Study”. JMIR Mental Health, (2023); 10: e42024. http//doi.org/10.2196/42024.<br><br>Chou, H.T.G., Edge, N. (2012). “They are happier and having better lives than I am”: The impact of using Facebook on perceptions of others’ lives. Cyberpsychology, Behaviour, and Social Networking, 15(2). https://doi.org/10.1089/cyber.2011.0324/.<br><br>Chow, T. S., & Wan, H. Y. Is there any ‘Facebook Depression’? Exploring the moderating roles of neuroticism, Facebook social comparison and envy. Personality and Individual Differences, vol 119, 2017. 277-282.https://doi.org/10.1016/j.paid.2017.07.032.<br><br>Deri, S., Davidai, S., & Gilovich, T. (2017). Home alone: Why people believe others’ social lives are richer than their own. Journal of Personality and Social Psychology, 113(6), 858–877. https://doi.org/10.1037/pspa0000105.<br><br>Feinstein, B. A., Herschenberg, R., Bhatia, V., Latack, J. A., Meuwly, N, Devila, J. (2013). Negative Social Comparison on Facebook and Depressive Symptoms: Rumination as a Mechanism. Psychology of Popular Media Culture, 2013, Vol. 2, No. 3, 161-170. https:doi.org/10.1037/a003311.<br><br>Gonzales, A. L., and Hancock J. T. (2009). Mirror, Mirror on my Facebook Wall: Effects of Exposure to Facebook on Self-Esteem. Cyberpsychology, Behavior, and Social Networking, vol 14, 1-2, 2011. https://doi.org.10.1089/cyber.2009.0411.<br><br>Gugushvili, N., Taht, K., Verduyn, P. et al. The Association Between Neuroticism and Problematic Social Networking Sites Use: The Role of Fear of Missing out and Self-Control. https://doi.org/10.1177/00332941221142003.<br><br>Hou, Y., Xiong, D., Jiang, T., Song, L., Wang, Q. (2019). Social media addiction: It’s impact, mediation, and intervention. Cyberpsychology: Journal of Psychosocial Research on Cyberspace. 13 (1), article 4. http://dx.doi.org/10.5817/CP2019-1-4<br><br>Kardefelt-Wither, D. (2014). A conceptual and methodological critique of internet addiction research towards a model of compensatory internet use. Computers in Human Behaviour, pp 351-543. http://doi.org/10.1016/j.chb.2013.10.059.<br><br>Kraut, R., Patterson, M., Lundmarak, V., Kiesler, S., Mukophadhyay, T., Scherlis, W. (1998). Internet paradox: A social technology that reduces social involvement and psychological wellbeing? American Psychologist, 53(9), 1017-1031. https://doi.org/10.1037/0003-066X.53.9.1017.<br><br>Rosenthal, S. R., Tobin, A. P. (2022). Self-esteem only goes so far: the moderating effect of social media screen time on self-esteem and depressive symptoms. Behavior, Information Technology. 2023; 42(15): 2688-2695. http://doi.org/10.1080/0144929x.2022.2139759.<br><br>Sampasa-Kanyinga, H., Chaput, J. P., Hamilton H. A. (2019). Social Media Use, School Connectedness, and Academic Performance Among Adolescents. Journal of Primary Prevention, 2019 Apr;40(2):189-211. http://doi.org/10.1007/s109.35-019-00543-6." // social-media-2
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
            <h2>{postContent.length} posts &nbsp;&nbsp; 🤷‍♂️followers &nbsp;&nbsp; 🤷‍♂️following</h2>
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
          <Post content={content} index={i} caption={postCaptions[i]}></Post>
        ))}
      </div>
    </div>
  );
}
