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
    {"path": "posts/social-media/7.png", "type": "photo"}, {"path": "posts/social-media/8.png", "type": "photo"},
    {"path": "posts/social-media/9.png", "type": "photo"}, {"path": "posts/social-media/10.png", "type": "photo"},
    {"path": "posts/social-media/11.png", "type": "photo"}, {"path": "posts/social-media/12.png", "type": "photo"}],
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
    {"path": "posts/six-mindfulness-exercises/7.gif", "type": "photo"}, {"path": "posts/six-mindfulness-exercises/8.gif", "type": "photo"}]
  ];

  let postCaptions: string[] = [
    "Welcome to our group project! We are @milgramsmaniacs and our account is set up to inform you about ways to use social media constructively.<br><br>This first post is just a little guide to outline our project. We have content in the form of graphics and videos, where the main goal is to inform you all about a little social psychology, while also offering suggestions about how you can use social media in a healthier manner. Lots of these are designed as little scenarios and “expectations versus reality” circumstances to really get you to reflect on certain psychological content and how it relates to social media usage. <br><br>Some of the main concepts we focus on are: <br><br>- Pluralistic ignorance: how social media encourages our overestimation of how many people enjoy behaviours that may be harmful, such as dangerous social media challenges and drinking/drugs<br><br>- Peer pressuring: we may feel more inclined to participate in certain activities, given pluralistic ignorance <br><br>- Confirmation bias: how social media reinforces our pre-existing beliefs and biases<br><br>- Self-esteem/self-worth: how social media can lower our self-esteem, as we tend to make upward comparisons to others<br><br>- Availability heuristics and correspondence bias: related to self-esteem, we tend to make comparisons of our lives to others and start feeling badly about our social circle or achievements based on what we see on social media <br><br>Aside from the negatives of social media, we also highlight some ways to use the internet positively. If you notice on our website, we have omitted the follower and like counts, as this could cause some distress on regular social media accounts. We've also included posts on mental health checklists and suggestions of healthy activities aside from social media. <br><br>We hope you enjoy some healthy doom-scrolling through our account!",
    "Unfortunately, a great proportion of peoples' perception of others is warped by the use of social media. In a study by Chou and Edge, there was a strong correlation between the amount of time an individual spent on social media and their own unhappiness with their own lives. This was measured using a survey, in which participants with high amounts of Facebook usage were more likely to indicate that others were happier than they were, life was unfair and that others had better lives even if they did not know their Facebook 'friends' personally. <br><br>This study was conducted in 2012! Think about the surge of social media since then, in the form of Instagram, Snapchat, TikTok, BeReal and more. In a time where posting is the norm (where everyone wants to put their best selves forward), how can we differentiate between reality and what other people want us to see/believe? <br><br>To reduce the negative effects of availability heuristic and correspondence bias from social media, we can:<br><br>Be more mindful of the amount of time we spend on social media<br><br>Spend more time with actual friends and family<br><br>Keep in mind that everyone is only posting the positive aspects of their lives! We don't know what is going on behind the camera, and we should refrain from making judgements about their lives (subsequently, refrain from comparing our own lives to theirs)<br><br>References<br><br>Chou, H.T.G., Edge, N. (2012). “They are happier and having better lives than I am”: The impact of using Facebook on perceptions of others' lives. Cyberpsychology, Behaviour, and Social Networking, 15(2). https://doi.org/10.1089/cyber.2011.0324/.",
    "In this scenario, someone is being invited to a St. Patrick's Day party with friends, in which alcohol is involved. While sometimes these events can be fun when enjoyed in a safe manner, the person seems hesitant to go.<br><br>Pluralistic ignorance is a phenomenon in social psychology in which a person may say or behave in a way that contradicts what they actually believe, because they overestimate the number of people who endorse these behaviours.<br><br>Social media can even enhance this, as we are subject to seeing everyone else's idea of a good time (or so we think).<br><br>Based on this situation, what do you think? Is this person displaying pluralistic ignorance, and were they convinced to go on the basis of having content to post on their social media? ",
    "Going back to the idea of pluralistic ignorance, this is definitely a more problematic form of this idea. Not only does social media appear to endorse some dangerous behaviours, these online challenges spread quickly to others and encourage them to participate (Falgoust et al., 2022).<br><br>Let's take a second to reflect. Why exactly do we think that everyone enjoys these social media challenges? Is it solely for the popularity and numbers in likes and follows, in a way that boosts our self esteem through gratification? Even if it does boost self-esteem in some ways, there are always dislikes and hate comments that target the subject. The gains in numbers might not even be in our best interests…do you actually have a positive and/or personal connection with each and every like and follow?<br><br>Before you even hit post next time, think about the repercussions of your actions; not even solely to preserve your own self-esteem and self-worth, but also in the interests of others in this endless cycle of social media challenges.<br><br>References<br><br>Falgoust, G., Winterlind, E., Moon, P., Parker, A., Zinzow, H., & Madathil, K. Applying the uses and gratifications theory to identify motivational factors behind young adult's participation in viral social media challenges on TikTok. Human Factors in Healthcare, 2. https://doi.org/10.1016/j.hfh.2022.100014.",
    "We're dealing with a conversation between people who are aware of an individual who died attempting this online challenge. Knowing this information, one person seems hesitant to proceed, but the other person coaxes them into it by saying other people haven't had issues with the challenge.<br><br>This not only displays pluralistic ignorance, but also the idea of confirmation bias in psychology. Confirmation bias occurs on an individual basis, when there is a tendency towards favouring incoming information that confirms one's existing knowledge and beliefs.<br><br>Here, the individual is basing their belief (that nothing will go wrong doing the Blackout Challenge) by recalling only the posts where no long term harm was done, and ignoring examples such as news where an individual ended up passing away. This phenomenon creates a huge potential for the spread of misinformation. In this context, they are misinformed about the actual risks that come from this challenge, by actively seeking out more examples that support that they could even gain fame from attempting this challenge. <br><br>Do you think you have fallen victim to this bias? The thing is, everyone is subjected to bias. However, it's more about how we deal with it. The problem is, social media often reinforces confirmation bias, by producing targeted ads and posts. We should all make an attempt to reduce our confirmation bias, by being more open to new information that might oppose our current knowledge and beliefs even if it makes us uncomfortable!",
    "Mindfulness-based interventions (including self-compassion) improve negative well-being (particularly depression) associated with pluralistic ignorance from upward social comparisons and envy from social-media use which have a “marked negative impact on well-being” (Carraturo et al., 2023). <br><br>Reference:<br><br>Carraturo, F., Di Perna, T., Giannicola, V., Nacchia, M.A., Muzii, B., Bottone, M., Sperandeo, R., Bochicchio, V., Maldonato, N.M., Scandurra, C. (2023). Envy, social comparison, and depression on social networking sites: a systematic review”. European Journal of Investigation in Health, Psychology and Education, 2023, Feb; 13(2): 364-376. https://doi.org/10.3390/ejihpe/13020027.", // mindfulness
    "caption", // pluralistic ignorance
    "This video shows that one of the students thinks the group norm at university/college parties is to drink a lot of shots of alcohol, and he is talking about conforming with that norm, even though he doesn’t really want to drink alcohol. His friend who is apparently more self-assured and likely has high self-esteem is going to take non-alcoholic beer to the party. He tells his friend who claims he will drink as many shots as everyone else does (group conformity) about the Prentice and Miller study from 1993. The friend couldn’t believe that people would do something differently than they wanted to do, because they misperceived the group norm – even though it applied to him as well. After considering the pluralistic ignorance phenomenon, he decided to take non-alcoholic beer to the party too (Module 3 and Prentice et al., 1993).<br><br>Not mentioning privately-held beliefs that are wrongly assumed to be counter to what is thought to be the group norm was studied by Pew Research, and they coined the term “spiral of silence” (Module 3 and Hampton et al., 2014). <br><br>References:<br><br>Hampton, K., Rainie, L., Lu, W., Dwyer, M., Shin, I., Purcell, K. (2014). “Social media and the ‘spiral of silence’ “. Hampton, K.N., Rainie, L., Lu, W., Dwyer, M., Shin, I., & Purcell, K. (2014). “Social Media and the ‘Spiral of Silence.’ Pew Research Center, Washington, DC. http://www.pewinternet.org/2014/08/26/social-media-and-the-spiral-of-silence/<br><br>Prentice, D. A., Miller, D. T. (1993). “Pluralistic ignorance and alcohol use on campus: Some consequences of misperceiving the social norm”. Journal of Personality and Social Psychology, 64(2), 243–256. https://doi.org/10.1037/0022-3514.64.2.243.",
    "This video is a fun little demonstration of how people portray their lives differently on social media versus in real life. It also involves the idea of availability heuristics and their impact on our judgements and assumptions.<br><br>Availability heuristics involve when things that are highly accessible to our minds, such as things that we see often, influence our judgements and we make assumptions about an individual or situation (Module 4). When people are exposed to others’ “best selves” as presented on social media, we start to believe that their lives are much more interesting than our own, simply because we are only observing the positive aspects of this individual’s life (Chou & Edge, 2012). This video gives you both what is portrayed online, and therefore highly accessible to your mind, versus the reality of the person's life. It serves to show that you cannot always believe what you see on social media. This potential bias from this heuristic needs to be recognized and avoided so that you can have a proper perception of yourself and others, as well as the world around you. <br><br>As a Milgram’s Maniacs follower, we trust that you will always question what you see on the internet, and do your own research before you create an assumption or assumption. Stay vigilant against this bias and others. Now that you are aware of availability heuristics, see if you can spot discrepancies between the online and real versions of peoples lives that you know, and try to come up with how the availability heuristic might play a part in your perceptions of them had you not been made aware of its effects. <br><br>References:<br><br>Chou, H.T.G., Edge, N. (2012). “They are happier and having better lives than I am”: The impact of using Facebook on perceptions of others’ lives. Cyberpsychology, Behaviour, and Social Networking, 15(2). https://doi.org/10.1089/cyber.2011.0324/.",
    "Confirmation bias might be something that you have been made aware of in the past, or maybe it is a new concept for you. It is a very common bias, and for those who were not aware of it before, you might notice that it is found everywhere, and may even influence people in your closest social circle.<br><br>Confirmation bias occurs when there is a tendency towards assimilation in social schemas; people actively seek out and favor information that confirms existing knowledge and beliefs (Module 4). Social media not only provides these resources to the individual, but also encourages it, by limiting your exposure to things that it believes you like or are interested in, allowing you to see information that fits your existing beliefs, assimilate it into your knowledge, and sometimes even selectively influencing your memory on that topic. <br><br>How can we as the user counteract the effects of confirmation bias, if it is so widespread? The first concept involves disconfirmation tasks. This is when you develop critical questions and counter arguments to your opinions (Wittebols, 2020). This process not only makes the individual uncomfortable, but also provokes thoughts on their opinion that may lead them to broaden their mindset and explore alternatives (Wittebols, 2020). As well, even the idea of educating people on the effects and nature of this bias has proven beneficial to making people more open minded, and less likely to assimilate false information into their beliefs (Wittebols, 2020). <br><br>We have attempted to provide you with as much information about confirmation bias as we can in this intervention post, so that hopefully even just the awareness of it will allow you to question your pre-existing beliefs and think a little before you decide if something is true, or if it is only easy to believe that it is true because it fits what you already think is true. <br><br>Stay Strong Maniacs! #SayNoToBiases #ThinkFirst<br><br>References:<br><br>Wittebols, James H. (2020). Transforming Confirmation Bias to Generate Critical Consciousness in News/Information Literacy and Social Science Courses. The Canadian Journal for the Scholarship of Teaching and Learning, 11 (2). ",
    "caption", // self-esteem
    "The reference below is for the slide that says social media can reduce wellbeing. Specifically the reference says that social media for teens can have “negative psychological outcomes”. The “Set Your Own Limits” part of the name was chosen in reference to the topic of normative cultural influence in Module 3 which (roughly paraphrased) says that in our individualistic culture we don’t like being told what to do.<br><br>Reference:<br><br>Allen, K.A, Ryan, T., Gray D.L., McInerney, D.M, Waters, L. (2014).<br><br>“Adolescents: the positives and the potential pitfalls”. The Educational and Developmental Psychologist, Vol 31, Issue 1, July, 2014, abstract. https://doi.org.10.1017/edp.2014.2.",
    "caption", // enchance-self-esteem
    "caption", // wellness-and-esteem
    "caption", // for-wellbeing
    "To counteract the negative aspects of social-media use, Cognitive Behavioural Therapy (CBT) was found to work better than shortening the time on social media or staying away from it completely. A systematic review of the literature (83% of the studies) showed that CBT was especially helpful as an intervention for poor mental well-being associated with social-media use (Plackett et al., 2023).<br><br>Reference:<br><br>Plackett, R., Blyth, A., Shartau, P. (2023). “The impact of social media use interventions on mental well-being: systematic review”. Journal of Medical Internet Research, 2023 Aug 11:25:e44922. https://doi.org/10.2196/44922.",
    "caption", // wellness-and-encouragement
    "This short reel aims to provide you with a brief explanation about upward comparison, its impact on self-esteem, common examples of upwards comparison, and most importantly, how to break out of a cycle of upwards comparison. <br><br>The concept of upward social comparisons involves comparing yourself to others who are better off than you are (Module 5). This can be especially prominent on social media, where people often alter their lives and showcase the best possible version of themselves that they can create. Constant comparison with people who you see as being happier or living better lives than you is often linked to feeling much worse about yourself, and increased depressive symptoms are common in those who get trapped in this mindset (Module 5). Being able to identify when you are making an upward comparison, and how to break free from the cycle, are important skills we would like to pass on to you through this video.<br><br>The second you recognize that you are experiencing negative self-esteem in relation to an upward comparison, it is important to take steps to change this mindset. The main intervention method for this habit is known as social savoring. Social savoring can be broken down into three main areas: reminiscing, moment, and anticipating. These domains involve thinking positively about past experiences relating to what is bringing you down, thinking positively about what is happening in the moment, and anticipating what positive experiences could come from this in the future (Kilbert et al., 2022). This has been proven effective by a study from Andrade, F. et al., who found that self-esteem decrease from social comparisons was improved through these savoring methods. Things like giving yourself the compassion and gratitude you deserve, limiting exposure to negative social media posts, and focussing on your own achievements all help sustain these positive emotions.<br><br>Keeping an eye out for social comparisons and staying positives are the key to keep your social media mindset at a #MilgramManiacs approved level.<br><br>References:<br><br>Andrade, F., Erwin, S., Burnell, K., Jackson, J., Storch, M., Nicholas, J., & Zucker, N. Intervening on Social Comparisons on Social Media: Electronic Daily Diary Pilot Study. JMIR Ment Health, 10. doi: 10.2196/42024.<br><br>Erng2009. (n.d.). Woman scrolling smartphone touchscreen on social online communication. Free Video. [Video]. Vecteezy. https://www.vecteezy.com/video/3221810-woman-scrolling-smartphone-touchscreen-on-Social-online-communication.<br><br>Kilbert, J., Sturz, B., LeLeux-LaBarge, K., Hatton, A., Smalley, K., & Warren, J. Savoring Interventions Increase Positive Emotions After a Social-Evaluative Hassle. Front. Psychol., 20(13). https://doi.org/10.3389/fpsyg.2022.791040.<br><br>Modeonstock. (n.d.). Making Diet Food Kitchen Free Video. [Video]. Vecteezy. https://www.vecteezy.com/video/23272293-making-diet-food-kitchen.<br><br> Pingpongchaphoto. (n.d.). Serious stress, business man sitting in office, Problem in working Free Video. [Video]. Vecteezy. https://www.vecteezy.com/video/14854952-serious-stress-business-man-sitting-in-office-problem-in-working. <br><br>Vadosloginov. (n.d.). Fitness girl trains outdoors Free Video. [Video]. Vecteezy. https://www.vecteezy.com/free-videos/people-running.",
    "caption" // six-mindfulness-exercises
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
