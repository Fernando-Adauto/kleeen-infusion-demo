import { ReactElement, Suspense, lazy, useCallback, MouseEvent } from 'react';

import { AddDialogPayload, Loader } from '@kleeen/react/components';
import { Action, AttributeProps, ParentProps, Translate } from '@kleeen/types';

export interface CustomDialogComponentProps {
  action?: Action;
  attributes?: AttributeProps[];
  onAction: (e: MouseEvent, payload: AddDialogPayload) => void;
  parent?: ParentProps;
  taskName?: string;
  translate?: Translate;
  description: string | ReactElement;
  open: boolean;
  onClose: () => void;
  title: string | ReactElement;
  component: string;
  context?: any;
}

export const CustomDialogComponent = ({ component, ...props }: CustomDialogComponentProps): ReactElement => {
  const CustomWidget = useCallback(
    lazy(() => {
      return import('@kleeen/end-product/frontend/things').then((module) => {
        return { default: module[component] };
      });
    }),
    [component],
  );

  return (
    <Suspense fallback={<Loader />}>
      <CustomWidget {...props} />
    </Suspense>
  );
};

export default CustomDialogComponent;
