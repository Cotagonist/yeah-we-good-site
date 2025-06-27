'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  { name: 'Mend Together', image: '/projects/project-mend-together.png' },
  { name: 'FitGMR', image: '/projects/project-fitgmr.png' },
  { name: 'Anpetu Wi', image: '/projects/project-anpetu-wi.png' },
  { name: 'Hone', image: '/projects/project-hone.png' },
  { name: 'LANDuel', image: '/projects/project-landuel.png' },
  { name: 'Izzy', image: '/projects/project-izzy.png' },
  { name: 'Bodewell', image: '/projects/project-bodewell.png' },
  { name: 'Realm.fm', image: '/projects/project-realm.png' },
  { name: 'Spot & Tango', image: '/projects/project-spot-and-tango.png' },
  { name: 'Shespoke', image: '/projects/project-shespoke.png' },
  { name: 'Juli', image: '/projects/project-juli.png' },
  { name: 'Misha Nonoo', image: '/projects/project-misha-nonoo.png' },
  { name: 'VR World NYC', image: '/projects/project-vr-world.png' },
  { name: 'Buffy', image: '/projects/project-buffy.png' },
  { name: 'Stage.gg', image: '/projects/project-stagegg.png' },
  { name: 'Reign', image: '/projects/project-reign.png' },
  { name: 'Banqi', image: '/projects/project-banqi.png' },
  { name: 'The Creative Collective', image: '/projects/project-the-creative-collective.png' },
  { name: 'Jennifer Fisher', image: '/projects/project-jennifer-fisher.png' },
  { name: 'Cityrow', image: '/projects/project-cityrow.png' },
  { name: 'Worldquant', image: '/projects/project-worldquant.png' },
  { name: 'Rewise', image: '/projects/project-rewise.png' },
  { name: 'Hopsital for Special Surgery', image: '/projects/project-hospital-for-special-surgery.png' },
  { name: 'Cadilus', image: '/projects/project-cadilus.png' },
  { name: 'Chadder', image: '/projects/project-chadder.png' },
  { name: 'Bikelane Solutions', image: '/projects/project-bikelane.png' },
  { name: 'Celldration', image: '/projects/project-celldration.png' },
  { name: 'Daily Goods', image: '/projects/project-daily-goods.png' },
  { name: 'SqaudUp', image: '/projects/project-squadup.png' },
  { name: 'DreamItReel', image: '/projects/project-dreamitreel.png' },
  { name: 'Seven Minute Life', image: '/projects/project-seven-minute-life.png' },
  { name: 'Six Lines', image: '/projects/project-six-lines.png' },
  { name: 'TrailTech Medical', image: '/projects/project-trialtech-medical.png' },
  { name: 'Cribdilla', image: '/projects/project-cribdilla.png' },
  { name: 'Organize', image: '/projects/project-organize.png' },
  { name: 'Liferaiser', image: '/projects/project-liferaiser.png' },
  { name: 'International Culinary Center', image: '/projects/project-international-culinary-center.png' },
  { name: 'Bioventus', image: '/projects/project-bioventus.png' },
  { name: 'Pimco', image: '/projects/project-pimco.png' },
  { name: 'Mighty Insights', image: '/projects/project-mighty-insights.png' },
  { name: 'Donor', image: '/projects/project-donor.png' },
  { name: 'American Society of Transplantation', image: '/projects/project-american-society-of-transplantation.png' },
  { name: 'Direct Athletics', image: '/projects/project-direct-athletics.png' },
  { name: 'The Love Vote', image: '/projects/project-the-love-vote.png' },
  { name: 'VOIQ', image: '/projects/project-voiq.png' },
  { name: 'Yenko', image: '/projects/project-yenko.png' },
  { name: 'Skinny IT', image: '/projects/project-skinny-it.png' },
  { name: 'Hearing Wisdom', image: '/projects/project-hearing-wisdom.png' },
  { name: 'Publishing Hackathon', image: '/projects/project-publishing-hackathon.png' },
  { name: 'Librify', image: '/projects/project-librify.png' },
  { name: 'Bookish', image: '/projects/project-bookish.png' },
  { name: 'Pikimal', image: '/projects/project-pikimal.png' },

];

const PROJECTS_PER_ROW = 3;
const ROWS_PER_CLICK = 4;
const INITIAL_ROWS = 4;


export default function Projects() {
  const [visibleRows, setVisibleRows] = useState(INITIAL_ROWS);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalRows = Math.ceil(projects.length / PROJECTS_PER_ROW);
  const visibleCount = visibleRows * PROJECTS_PER_ROW;
  const showMore = visibleRows < totalRows;

  const handleLoadMore = () => {
    const el = containerRef.current;
    if (!el) return;

    const prevHeight = el.scrollHeight;
    setVisibleRows((prev) => Math.min(prev + ROWS_PER_CLICK, totalRows));

    requestAnimationFrame(() => {
      const newHeight = el.scrollHeight;
      el.style.height = `${prevHeight}px`;
      requestAnimationFrame(() => {
        el.style.transition = 'height 0.6s ease';
        el.style.height = `${newHeight}px`;
      });
    });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleTransitionEnd = () => {
      el.style.height = 'auto';
      el.style.transition = '';
    };

    el.addEventListener('transitionend', handleTransitionEnd);
    return () => el.removeEventListener('transitionend', handleTransitionEnd);
  }, []);

  return (
    <section className="my-12">
      <h3 className="text-xl font-semibold mb-6">Projects</h3>

      <div
        ref={containerRef}
        style={{ height: 'auto', overflow: 'hidden' }}
        className="transition-all ease-in-out duration-700"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.slice(0, visibleCount).map((project, i) => (
            <div
              key={i}
              className="relative w-full aspect-video rounded-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {showMore && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="text-sm px-4 py-2 rounded bg-white text-black dark:bg-white dark:text-black"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}