import React from 'react';
import vegas from './images/vegas.jpeg'
import aboutJosie from './images/about-josie.jpeg'
import recentFam from './images/recent-fam.jpeg'

const About = () => {
    return(
        <div>
            <main>
      <article >
        <img
          src={vegas}
          id="pic1"
          alt="an old picture of Josie and her family in Las Vegas"
          width="278px"
          height="260px"
        />
        <img
          src={aboutJosie}
          id="pic2"
          alt="a picture of Josie (current day)"
          width="278px"
          height="260px"
        />
        <img
          src={recentFam}
          id="pic3"
          alt="a recent photo of Josie and her family"
          width="278px"
          height="260px"
        />
      </article>
      <article>
        <article>
          <h2>about me</h2>
          <p>
            Hi! My name is Josie Parker and I&apos;m 19 years old. I live with
            my family - my parents, Ben and Christina, my brother, Cash, and our
            dog, Tilly. I&apos;ve lived in Oklahoma for (almost) my whole life
            and I&apos;m currently pursuing my Associates of Applied Sciences in
            Computer Science with an emphasis on Web Design and Development.
            I&apos;m also attending the Fullstack Academy coding boot camp in
            order to become more skilled in web design and development. When I
            was younger, I never quite knew what I wanted to do. First, I
            thought I should be a doctor, but I lost that urge after I realized
            I hated being around blood; then I thought maybe I should be a
            teacher, but I didn&apos;t really feel passionate about it. I
            continued on like this: from librarian to biologist to lawyer, I
            carefully considered and subsequently dismissed these career paths.
            At last, after my dad urged me to pursue a degree in computer
            science - and I figured I didn&apos;t have anything to lose - I
            decided on web design and development, found I was passionate about
            it, and never looked back.
          </p>
        </article>

        <article>
          <h2>what I love</h2>
          <p>
            I love, first and foremost, spending time with my family and my best
            friend. They're my favorite people in the world and never fail to
            make my life more bright and full. Beyond that, I love reading; if
            I'm not with friends and family, you can probably find me reading or
            listening to an audio-book. I also love being outside and spending
            some time in the sun when I can. Lastly, I feel it's important to
            mention that I love learning about and working on web design and
            development. I love the combination of creativity and precision
            that comes with design and development and, most of all, I love the
            feeling of being satisfied with a project that works correctly and
            functions (mostly) as intended.
          </p>
        </article>
      </article>
    </main>
        </div>
    )
}

export default About;