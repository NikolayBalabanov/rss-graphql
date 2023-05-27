import React, { FC, MutableRefObject, Suspense, lazy } from 'react';
import Loader from '../UI/Loader';

const DocsContainer = lazy(() => import('../Documentation/DocsContainer'));

interface IDocumentation {
  onClose: () => void;
  item: MutableRefObject<HTMLDivElement | null>;
}

export const Documentation: FC<IDocumentation> = ({ onClose, item }) => {
  return (
    <section
      ref={item}
      className="absolute z-[500] left-0 top-0 md:w-[50vw] w-full md:h-full h-[90vh] rounded-2xl bg-BGcolor1 p-2 bottom-0 border border-gray-600 -translate-x-full hidden duration-300 transition-transform"
    >
      <Suspense fallback={<Loader />}>
        <DocsContainer onClose={onClose} />
      </Suspense>
    </section>
  );
};