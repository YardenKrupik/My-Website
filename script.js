$(window).on('scroll', function() {

      $('.flip').each(function() {

        var scrollTop = $(window).scrollTop(),
          parentElementOffsetTop = $(this).parent().offset().top,
          parentDistanceTop = (parentElementOffsetTop - scrollTop);
        var elementHeight = $(this).height();
        var distanceBottom = (parentDistanceTop + elementHeight);
        var opacity = (distanceBottom / elementHeight);
        var rotateSpeed = ((parentDistanceTop / 8).toFixed(2) * -1);

         if (rotateSpeed <= 0) {
          rotateSpeed = 0;
        } else if (rotateSpeed >= 90) {
          rotateSpeed = 90;
        }
        /* $(this).find(".pixel-counter").html(distanceBottom + "px is the parents bottom-               distance to top of viewport"); */
        $(this).css({
          "transform": " translateY(0px)  rotateX(" + rotateSpeed + "deg)",
          "opacity": opacity
        });
      });
    });


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const fade = entry.target.querySelector('.about');
    const fade1 = entry.target.querySelector('.title');

    if (entry.isIntersecting) {
      fade.classList.add('about-animation');
      fade1.classList.add('title-animation');

	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    fade.classList.remove('about-animation');
    fade1.classList.remove('title-animation');
  });
});
observer.observe(document.querySelector('.about-wrapper'));

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const fade = entry.target.querySelector('.skills-title');
    const fade1 = entry.target.querySelector('.leftSide'); 
    const fade2 = entry.target.querySelector('.rightSide');
    const fade3 = entry.target.querySelector('.java');
    const fade4 = entry.target.querySelector('.c');
    const fade5 = entry.target.querySelector('.sqlite');
    const fade6 = entry.target.querySelector('.html');
    const fade7 = entry.target.querySelector('.css');
    const fade8 = entry.target.querySelector('.javascript');
    const fade9 = entry.target.querySelector('.intellij');
    const fade10 = entry.target.querySelector('.eclipse');
    const fade11 = entry.target.querySelector('.inventor');
    const fade12 = entry.target.querySelector('.langu');
    const fade13 = entry.target.querySelector('.en');
    const fade14 = entry.target.querySelector('.de');
    const fade15 = entry.target.querySelector('.heb');

    if (entry.isIntersecting) {
      fade.classList.add('skills-title-animation');
      fade1.classList.add('leftSide-animation');
      fade2.classList.add('rightSide-animation');
      fade3.classList.add('java-animation');
      fade4.classList.add('c-animation');
      fade5.classList.add('sqlite-animation');
      fade6.classList.add('html-animation');
      fade7.classList.add('css-animation');
      fade8.classList.add('javascript-animation');
      fade9.classList.add('intellij-animation');
      fade10.classList.add('eclipse-animation');
      fade11.classList.add('inventor-animation');
      fade12.classList.add('langu-animation');
      fade13.classList.add('en-animation');
      fade14.classList.add('de-animation');
      fade15.classList.add('heb-animation');
	  return; 
    }
    fade.classList.remove('skills-title-animation');
    fade1.classList.remove('leftSide-animation');
    fade2.classList.remove('rightSide-animation');
    fade3.classList.remove('java-animation');
    fade4.classList.remove('c-animation');
    fade5.classList.remove('sqlite-animation');
    fade6.classList.remove('html-animation');
    fade7.classList.remove('css-animation');
    fade8.classList.remove('javascript-animation');
    fade9.classList.remove('intellij-animation');
    fade10.classList.remove('eclipse-animation');
    fade11.classList.remove('inventor-animation');
    fade12.classList.remove('langu-animation');
    fade13.classList.remove('en-animation');
    fade14.classList.remove('de-animation');
    fade15.classList.remove('heb-animation');
  });
});
observer1.observe(document.querySelector('.skills-wrapper'));

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const fade = entry.target.querySelector('.contact-title');
    const fade1 = entry.target.querySelector('.github');
    const fade2 = entry.target.querySelector('.linkedIn');
    const fade3 = entry.target.querySelector('.xing');
    const fade4 = entry.target.querySelector('.email');

    if (entry.isIntersecting) {
      fade.classList.add('contact-title-animation');
      fade1.classList.add('github-animation');
      fade2.classList.add('linkedIn-animation');
      fade3.classList.add('xing-animation');
      fade4.classList.add('email-animation');
	  return;
    }

    fade.classList.remove('contact-title-animation');
    fade1.classList.remove('github-animation');
    fade2.classList.remove('linkedIn-animation');
    fade3.classList.remove('xing-animation');
    fade4.classList.remove('email-animation');
  });
});
observer2.observe(document.querySelector('.contact-wrapper'));
