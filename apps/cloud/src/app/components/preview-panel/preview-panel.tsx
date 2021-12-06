import { PreviewPanelContent, PreviewPanelHeader } from './components';
import { ReflexContainer, ReflexElement, ReflexHandle, ReflexSplitter } from 'react-reflex';

import { ClassNameBem } from '@kleeen/types';
import { PreviewPanelProps } from './preview-panel.model';
import classnames from 'classnames';
import { usePreviewPanel } from '@kleeen/react/hooks';
import { useStyles } from './preview-panel.styles';

const bem = ClassNameBem.Layout;

export function PreviewPanel({ children }: PreviewPanelProps) {
  const { isPreviewOpen } = usePreviewPanel();
  const styles = useStyles();

  return (
    <ReflexContainer className={classnames(`${bem}__preview-container`, 'layout')} orientation="horizontal">
      <ReflexElement minSize={288}>{children}</ReflexElement>
      {isPreviewOpen && <ReflexSplitter className={styles.previewSplitter} />}
      {isPreviewOpen && (
        <ReflexElement minSize={42}>
          <ReflexHandle className={styles.previewHandle}>
            <PreviewPanelHeader />
          </ReflexHandle>
          <PreviewPanelContent />
        </ReflexElement>
      )}
    </ReflexContainer>
  );
}
