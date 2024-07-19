import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[] | undefined;
  leftPanel: ReactNode;
  rightPanel: ReactNode;
}

const ResizablePanel = ({
  defaultLayout = [33, 67],
  leftPanel,
  rightPanel,
}: IProps) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <>
      <PanelGroup direction="horizontal" onLayout={onLayout}>
        <Panel defaultSize={defaultLayout[0]} children={leftPanel}></Panel>
        <PanelResizeHandle className="border-[#ffffff1f] border-r-[1px] h-screen" />
        <Panel defaultSize={defaultLayout[1]} children={rightPanel}></Panel>
      </PanelGroup>
    </>
  );
};

export default ResizablePanel;
