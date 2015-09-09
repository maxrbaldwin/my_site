{% extends "../layouts/default.swig" %}

{% block content %}
 <div class="featured block">
   <div class="profile">
     <div class="profile-pic">
       <img src="/images/profile.jpeg"/>
     </div>
     <div class="profile-desc">
       <span>Web Developer, New York Times</span>
     </div>
     <div class="profile-connect">
       <ul class="social-icons">
         <li class="icon"><a target="_blank" href="https://github.com/maxrbaldwin"><img src="/images/icons/github-icon.png" alt="github" /></a></li>
         <li class="icon"><a target="_blank" href="http://stackoverflow.com/users/3266303/max-baldwin"><img src="/images/icons/stackoverflow-icon.png" alt="stackoverflow" /></a></li>
         <li class="icon"><a target="_blank" href="https://twitter.com/MaxRBaldwin"><img src="/images/icons/twitter-icon.png" alt="twitter" /></a></li>
         <li class="icon"><a target="_blank" href="https://www.linkedin.com/in/maxbaldwin"><img src="/images/icons/linkden-icon.png" alt="linkden" /></a></li>
       </ul>
     </div>
   </div>
 </div>
 <div class="about block">
   <div class="slide">
     <div class="title">
       <h2>My Name is Max...</h2>
     </div>
     <div class="body">
       <p>
         I am a self taught developer with a degree in broadcast journalism. In October of 2015 I graduated from Fullstack Academy in NYC.
         It was there that I studied full stack web development using The MEAN Stack.<br><br>Since then I have started working for the New York Times.
         In my spare time I work on my app called News Seed. An app that aggregates news stories from Twitter and categorizes them by keywords.
       </p>
     </div>
   </div>
 </div>
 <div class="skills block">
   <div class="slide">
     <div class="quote">
       <h3>“Around here, however, we don't look backwards for very long. We keep moving forward, opening up new doors and doing new things, because we're curious...and curiosity keeps leading us down new paths.” -Walt Disney</h3>
     </div>
   </div>
 </div>
 <div class="project block">
   <div class="slide">
     <div class="title">
       <h2>What is News Seed?</h2>
     </div>
     <div class="body-left left">
       <img src="/images/ns.jpg" alt="News Seed" />
     </div>
     <div class="body-right right">
       <p>
         News Seed is a mobile app trying to solve two problems. The first problem is that news is polluted and opinionated on social media. Social media is a very important channel for the distribution of news, but it causes more issues than it solves.
         The rapid rate of distribution has caused a lot of misinformation in news. The second problem is that, we as readers hardly ever hear the end of a story when it is reported on. And if we do we miss a lot of details in the middle.
         <br><br>
         News Seed is trying to solve these issues by aggregating news stories from Twitter, categorizing stories by keywords and presenting them in a familiar way.
       </p>
     </div>
     <div class="clear">

     </div>
   </div>
 </div>
{% endblock %}

{% block title %}
  <title>Max Baldwin | Web Developer, New York Times</title>
{% endblock %}
