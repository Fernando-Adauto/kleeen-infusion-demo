import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { WorkflowProvider, useKleeenActions, useUrlQueryParams } from '@kleeen/react/hooks';
import {
  CollectionLayoutStyle,
  DataViewControlSection,
  ViewsManager,
  getRowsCountFromFirstTable,
} from '@kleeen/react/atomic-elements';
import { widgets } from './settings/widgets';
import { workflowAction } from './settings/workflow-action';

function Workflow({ translate, ...props }) {
  const taskName = `workflow1`;
  const workflowData = {
    hasFilters: false,
    taskName: 'workflow1',
    workflowId: 'd88906ff-1d7f-4b53-9306-5fea85122b48',
    entity: 'Hoodie',
  };
  const entity = `Hoodie`;
  const classes = CollectionLayoutStyle();
  const workflowName = `Workflow 1`;
  const objectFocus = `hoodie`;
  const hoodieActions = useKleeenActions(taskName);
  const { paramsBasedOnRoute } = useUrlQueryParams();
  const currentEntity = { id: paramsBasedOnRoute[entity], entity };

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <WorkflowProvider value={workflowData}>
        <div className={`${classes.entityBrowserTask} subhead-dynamic`}>
          <ViewsManager
            views={widgets}
            SubHeader={DataViewControlSection}
            subHeaderProps={{
              actions: workflowAction,
              entity,
              entityActions: hoodieActions,
              hideRefreshControl: true,
              objectValue: objectFocus,
              parent: currentEntity,
              taskName,
              title: workflowName,
              results: `${getRowsCountFromFirstTable(widgets, taskName)} Count of ${entity}`,
            }}
            containerClasses={`${classes.entityBrowserArea} browserArea`}
            pageIntroClasses={`${classes.gridPageIntro}`}
            contentClasses={`${classes.gridGridSection}`}
            entityName={entity}
            taskName={taskName}
          />
        </div>
      </WorkflowProvider>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
