import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { ReactElement, Widget, WidgetCategory } from '@kleeen/types';

export type PreviewPanel = {
  closePreviewPanel: () => void;
  isPreviewOpen: boolean;
  openPreviewPanel: (title: ReactElement) => void;
  previewTitle: ReactElement;
  previewWidgets: Widget[];
  previewWidgetCategory: WidgetCategory | null;
  setPreviewWidgets: Dispatch<SetStateAction<Widget[]>>;
  setPreviewWidgetCategory: Dispatch<SetStateAction<WidgetCategory | null>>;
};

const emptyContextFn = () => {
  console.warn('No preview panel context set');
};
export const PreviewPanelContext = createContext<PreviewPanel>({
  closePreviewPanel: emptyContextFn,
  isPreviewOpen: false,
  openPreviewPanel: emptyContextFn,
  previewTitle: null,
  previewWidgets: [],
  previewWidgetCategory: null,
  setPreviewWidgets: emptyContextFn,
  setPreviewWidgetCategory: emptyContextFn,
});

export function usePreviewPanel() {
  const previewPanelContext = useContext<PreviewPanel>(PreviewPanelContext);

  return previewPanelContext;
}

export function PreviewPanelLayoutProvider({ children }: { children: ReactElement }) {
  const [isPreviewOpen, setPreviewOpen] = useState(false);
  const [previewTitle, setPreviewTitle] = useState<ReactElement>(null);
  const [previewWidgets, setPreviewWidgets] = useState<Widget[]>([]);
  const [previewWidgetCategory, setPreviewWidgetCategory] = useState<WidgetCategory | null>(null);

  function closePreviewPanel() {
    setPreviewOpen(false);

    // Clean state after close
    setPreviewTitle(null);
    setPreviewWidgets([]);
    setPreviewWidgetCategory(null);
  }

  function openPreviewPanel(title: ReactElement) {
    // Set state before open
    setPreviewTitle(title);

    setPreviewOpen(true);
  }

  const previewPanelProps = {
    closePreviewPanel,
    isPreviewOpen,
    openPreviewPanel,
    previewTitle,
    previewWidgets,
    previewWidgetCategory,
    setPreviewWidgets,
    setPreviewWidgetCategory,
  };

  return <PreviewPanelContext.Provider value={previewPanelProps}>{children}</PreviewPanelContext.Provider>;
}
