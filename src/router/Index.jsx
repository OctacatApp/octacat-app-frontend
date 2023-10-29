import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Loaders from '@/components/common/Loaders';
import MainLayout from '@/layout/MainLayout';

import Constant from '@/utils/constans';

export default function Routers() {
  const { routesNavigation } = Constant();

  return (
    <Routes>
      {
            routesNavigation?.map((pages) => {
              if (pages.requireAuth) {
                return (
                  <Route
                    key={pages.path}
                    path={pages?.path}
                    element={(
                      <Suspense fallback={(
                        <div className="flex items-center justify-center w-full h-screen">
                          <Loaders />
                        </div>
                      )}
                      >
                        <MainLayout>
                          {pages?.element}
                        </MainLayout>
                      </Suspense>
                    )}
                  />
                );
              }
              return (
                <Route
                  key={pages?.path}
                  path={pages?.path}
                  element={pages?.element}
                />
              );
            })
        }
    </Routes>
  );
}
