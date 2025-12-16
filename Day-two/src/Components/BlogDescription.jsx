import React, {useEffect} from 'react';

const BlogDescription = ({ onSectionView }) => {

    const sectionIds = ['para1','para2','para3','para4','para5','para6'];

    useEffect(() => {
        if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
            const firstHeading = document.querySelector("p[id^='heading']");
            if (firstHeading && onSectionView) onSectionView(firstHeading.innerText);
            return;
        }

        const observerOptions = {
            root: null, 
            rootMargin: '0px 0px -20% 0px', 
            threshold: [0.25, 0.5, 0.75, 1] 
        };

        let lastReportedId = null;

        const observer = new IntersectionObserver((entries) => {
        const visibleEntries = entries.filter(e => e.isIntersecting);

        if (visibleEntries.length === 0) {
            return;
        }

        let mostVisible = visibleEntries.reduce((prev, curr) => {
            return (curr.intersectionRatio > prev.intersectionRatio) ? curr : prev;
        }, visibleEntries[0]);

      const currentId = mostVisible.target.id;

        if (currentId !== lastReportedId) {
            lastReportedId = currentId;

            const headingEl = mostVisible.target.querySelector("p[id^='heading']");
            const headingText = headingEl ? headingEl.innerText.trim() : '';

            if (onSectionView) onSectionView({
                id: currentId, 
                heading: headingText});
            }
        }, observerOptions);

        sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
        });

        return () => {
        observer.disconnect();
        };
    }, [onSectionView]);

  return (
    <div>
        <div id='para1' className='scroll-mt-13'>
            <p id='heading1' className='text-black font-bold text-4xl leading-9 mb-3'> A Life-Changing Experience </p>
            <p className='text-gray-600 text-semibold text-lg leading-7 mb-8'>The pivotal moment in Giorgio’s career came when he was asked to teach a web development course to students with varying abilities. "I had in front of me the challenge of teaching people who didn’t have the same opportunities as others to use a keyboard, a mouse, or read a screen," Giorgio explains. <br /> One particularly memorable interaction with a student who struggled to walk but maintained a positive attitude left a lasting impact on Giorgio. "That moment made me rethink my priorities," he says. It was a turning point that solidified his commitment to ensuring that digital accessibility was not just an afterthought but a fundamental part of the development process.</p>
        </div>

        <div id='para2' className='scroll-mt-13'>
            <p id='heading2' className='text-black font-bold text-4xl leading-9 mb-3'> Advocacy at Scale </p>
            <p className='text-gray-600 text-semibold text-lg leading-7 mb-8'>Throughout his career, Giorgio has been a staunch advocate for accessibility, regardless of his role.  <br /> One of his notable achievements was at Capital One, where he introduced metrics to track accessibility bugs and ensured that these were a priority across teams. "When you make it visible, people understand you care, and they start to think differently," Giorgio notes.<br /> He also spearheaded initiatives to embed accessibility checks directly into the development process, preventing engineers from submitting code that introduced new accessibility issues. This approach not only improved the user experience but also fostered a culture of inclusivity and responsibility among his teams. </p>
        </div>

        <div id='para3' className='scroll-mt-13'>
            <p id='heading3' className='text-black font-bold text-4xl leading-9 mb-3'> The Power of Small Steps </p>
            <p className='text-gray-600 text-semibold text-lg leading-7 mb-8'>Giorgio emphasizes that impactful accessibility work doesn't always require grand gestures. "You change the world with one small step at a time," he says. At Amazon, for example, he successfully prioritized an initiative to improve accessibility in Kindle content, starting with iOS. Although the project took time and faced resource limitations, it set a precedent that accessibility was a "first-class citizen" in the development process.</p>
        </div>

        <div id='para4' className='scroll-mt-13'>
            <p id='heading4' className='text-black font-bold text-4xl leading-9 mb-3'> A Life-Changing Experience </p>
            <p className='text-gray-600 text-semibold text-lg leading-7 mb-8'>The pivotal moment in Giorgio’s career came when he was asked to teach a web development course to students with varying abilities. "I had in front of me the challenge of teaching people who didn’t have the same opportunities as others to use a keyboard, a mouse, or read a screen," Giorgio explains. <br /> One particularly memorable interaction with a student who struggled to walk but maintained a positive attitude left a lasting impact on Giorgio. "That moment made me rethink my priorities," he says. It was a turning point that solidified his commitment to ensuring that digital accessibility was not just an afterthought but a fundamental part of the development process.</p>
        </div>

        <div id='para5' className='scroll-mt-13'>
            <p id='heading5' className='text-black font-bold text-4xl leading-9 mb-3'> A Life-Changing Experience </p>
            <p className='text-gray-600 text-semibold text-lg leading-7 mb-8'>The pivotal moment in Giorgio’s career came when he was asked to teach a web development course to students with varying abilities. "I had in front of me the challenge of teaching people who didn’t have the same opportunities as others to use a keyboard, a mouse, or read a screen," Giorgio explains. <br /> One particularly memorable interaction with a student who struggled to walk but maintained a positive attitude left a lasting impact on Giorgio. "That moment made me rethink my priorities," he says. It was a turning point that solidified his commitment to ensuring that digital accessibility was not just an afterthought but a fundamental part of the development process.</p>
        </div>

        <div id='para6' className='scroll-mt-13'>
            <p id='heading6' className='text-black font-bold text-4xl leading-9 mb-3'> A Life-Changing Experience </p>
            <p className='text-gray-600 text-semibold text-lg leading-7 mb-8'>The pivotal moment in Giorgio’s career came when he was asked to teach a web development course to students with varying abilities. "I had in front of me the challenge of teaching people who didn’t have the same opportunities as others to use a keyboard, a mouse, or read a screen," Giorgio explains. <br /> One particularly memorable interaction with a student who struggled to walk but maintained a positive attitude left a lasting impact on Giorgio. "That moment made me rethink my priorities," he says. It was a turning point that solidified his commitment to ensuring that digital accessibility was not just an afterthought but a fundamental part of the development process.</p>
        </div>
    </div>
  )
}

export default BlogDescription;